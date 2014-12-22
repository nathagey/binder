UU.addModule("binding", function (UU) {

  Handlebars.registerHelper('json', function(json, options) {
    return JSON.stringify(json, null, 4);
  });

  // START Module API code
  // start parameters
  model = UU.getPageData("model");
  template = Handlebars.templates.main;
  domScope = "#content";
  // end parameters

  var boundDomChanging = false;
  var bound = [];

  // bind input events...
  function _uid () {
    return performance.now().toString().replace(".", "");
  }

  Handlebars.registerHelper('bound', function (context, options) {
    // bound without context means bind to all?
    if (!options) {
      var morph = Metamorph(context.fn(model));
      bound.push({
        fn: context.fn,
        morph: morph
      });
      return morph.outerHTML();
    }
    console.error("The 'bound' helper was passed parameters.");
    // An undefined needs in the dom is essentailly an empty string.
    // This is done so that when an undefined value becomes defined,
    // there is a placeholder in the dom that gets the new defined value.
    var value = context[options.hash.value] || "";
    var key = options.hash.value;

    // create a new morph
    bound[key] = Metamorph(value);

    // return the value to the DOM
    return bound[key].outerHTML();
  });

  Handlebars.registerHelper('bind-attr', function(context, options) {
    
    var id = _uid();
    var changeEvent = "change";
    var key = options.hash.value;
    var value = context[key] || "";

    if (options.hash.on) {
      changeEvent = options.hash.on;
    }

    $(document).on(changeEvent, "[data-binding='"+id+"']", function () {
      var t0 = performance.now();
      boundDomChanging = true;
      var newValue = $(this).val();
      var that = this;
      // update an individual dom reference via morph
      // {{#bound this value="defined_str"}}{{/bound}}
      // bound[key].html(newValue);
      // update the model
      context[key] = newValue;
      $("[data-bound-to='"+key+"']").each(function () {
        if (this !== that) {
          $(this).val(newValue);
        }
      });
      // update elements bound to the entire model
      bound.forEach(function (element, index, array) {
        array[index].morph.html(array[index].fn(model));
      });
      var t1 = performance.now();
      console.log("change event took " + (t1 - t0) + " milliseconds.");
    });
    
    return "data-bound-to='"+key+"' data-binding='"+id+"' value='"+value+"'";
  });

  function _isObjectLiteral (prop) {
    return typeof prop === "object" && !_isArray(prop);
  }

  function _isArray (prop) {
    return prop instanceof Array;
  }

  function _propertyCount (object) {
    if (_isArray(object)) {
      return object.length;
    }
    return $.map(object, function(n, i) { return i; }).length;
  }

  function _bindViewToModel (model, prop) {
    var scope = prop || model;
    Object.observe(scope, function(changes) {
      changes.forEach(function(change) {
        // boundDomChanging means that we want to stop doing an updateView
        // in favor of allowing the change event to update the bound[key]
        if (boundDomChanging) {
          boundDomChanging = false;
          return false;
        }
        if (_isArray(scope) && change.type === "update"
              && change.name === "length") {
          // arrays seem to trigger an update on the length
          // along with the change
        } else {
          updateView(model);
        }
        console.log(change.type, change.name, change.oldValue);
        if (change.type === "add" && typeof scope[change.name] === "object") {
          _bindViewToModel(model, scope[change.name]);
          if (_propertyCount(scope[change.name])) {
            updateView(model);
          }
        }
      });
    });
  }
  
  function updateView(model) {
    var t0 = performance.now();
    bound = [];
    $(domScope).html(template(model));
    var t1 = performance.now();
    console.log("dom update took " + (t1 - t0) + " milliseconds.");
  }

  function bind (model) {
    if (_isObjectLiteral(model)) {
      for (var prop in model) {
        if (typeof model[prop] === "object") {
          _bindViewToModel(model, model[prop]);
        }
      }
    }
  }

  _bindViewToModel(model);
  // STOP Module API code

  return {

    init: function () {
      updateView(UU.getPageData("model")); // change to boolean
      bind(UU.getPageData("model"));
    }
  };
});

UU.setPageData("model", {
  defined_str: "populated",
  defined_obj: {
    str: "populated"
  },
  defined_single_dimension_arr: [1,2,3]
});