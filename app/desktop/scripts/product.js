UU.addModule("product", function (UU) {
  
  var _model = UU.getPageData("model");
  var _product = UU.getService("product service");

  return {

    scope: ".product",

    bind: {
      model: _model,
      template: Handlebars.templates.main
    },

    events: {
      "click [data-color]": function (event, target) {
        var product = _product.getModelByDomElement(target, _model);
        var selected = target.getAttribute("data-val");

        _product.setColor(product, selected);
        _product.setSizeATP(product, _model.inventory);
      },
      "click [data-size]": function (event, target) {
        var product = _product.getModelByDomElement(target, _model);
        var selected = target.getAttribute("data-val");

        _product.setSize(product, selected);
        _product.setColorATP(product, _model.inventory);
      }
    }
  };
});

UU.addService("product service", function () {

  function _setAttrVal (product, attr, val) {
    var options = product[attr].slice();

    // update this attr
    options.forEach(function(element, index, array) {
      if (element.key === val) {
        element.selected = true;
      } else if (element.selected) {
        delete element.selected;
      }
    });

    product[attr] = options;
  }

  return {
    getModelByDomElement: function (element, model) {
      var index = $(element).parents(".product").index();
      if (model) {
        return model.products[index];
      }
    },
    setColor: function (product, color) {
      _setAttrVal(product, "color", color);
    },
    setSize: function (product, size) {
      _setAttrVal(product, "size", size);
    },
    setBand: function (product, band) {
      _setAttrVal(product, "band", band);
    },
    setCup: function (product, cup) {
      _setAttrVal(product, "cup", cup)
    },
    setSizeLength: function (product, length) {
      _setAttrVal(product, "length", length);
    },
    setSizeWaist: function (product, waist) {
      _setAttrVal(product, "waist", waist);
    },
    setDistinct: function (product, distinct) {
      _setAttrVal(product, "distinct", distinct);
    },
    setStyle: function (product, style) {
      _setAttrVal(product, "style", style);
    },
    setSizeATP: function (product, inventory) {
      var color = _.find(product.color, {selected: true});
      
      product.size.forEach(function (size) {
        if (color && color.key === "BR2" && size.key === "S") {
          size.atp = "D";
        } else if (color && color.key && size.key === "L") {
          size.atp = "B";
        } else if (size.atp) {
          delete size.atp;
        }
      });
    },
    setColorATP: function (product, inventory) {
      var size = _.find(product.size, {selected: true});
      
      product.color.forEach(function (color) {
        if (size && size.key === "S" && color.key === "BR2") {
          color.atp = "D";
        } else if (size && size.key === "L") {
          color.atp = "B";
        } else if (color.atp) {
          delete color.atp;
        }
      });
    }
  }
});