this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n  "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div>\n  <h2>model</h2>\n</div>\n\n<div>defined_str: <span>";
  if (helper = helpers.defined_str) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defined_str); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n<div>undefined_str: <span>";
  if (helper = helpers.undefined_str) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.undefined_str); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n\n<div>defined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.defined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n<div>defined_obj.undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.defined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n\n<div>undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n<div>undefined_obj.undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n\n<div>defined_single_dimension_arr: <span>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.defined_single_dimension_arr), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></div>\n<div>undefined_single_dimension_arr: <span>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.undefined_single_dimension_arr), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></div>\n\n<div>defined_str: <input type=\"text\" ";
  stack1 = (helper = helpers.bind || (depth0 && depth0.bind),options={hash:{
    'value': ("defined_str")
  },inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bind", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\n\n<div>undefined_str: <input type=\"text\" ";
  stack1 = (helper = helpers.bind || (depth0 && depth0.bind),options={hash:{
    'value': ("undefined_str")
  },inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bind", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\n\n<pre>"
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "</pre>";
  return buffer;
  });