UU.addModule("binding", function (UU) {

  Handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj, null, 4);
  });

  // START Module API code
  model = UU.getPageData("model");
  template = Handlebars.templates.main;
  domScope = "#content";

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
    $(domScope).html(template(model));
    var t1 = performance.now();
    console.log("dom update took " + (t1 - t0) + " milliseconds.")
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