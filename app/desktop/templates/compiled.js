this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["color"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a data-color data-val=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-atp=\"";
  if (helper = helpers.atp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.atp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><img src=\"";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a>";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

  stack1 = (helper = helpers.bound || (depth0 && depth0.bound),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bound", depth0, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["distinct"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<option value=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>";
  return buffer;
  });

this["Handlebars"]["templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.defined_str) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defined_str); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.undefined_str) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.undefined_str); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program5(depth0,data) {
  
  var buffer = "";
  buffer += "\n  "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n  <pre>"
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "</pre>\n  ";
  return buffer;
  }

  buffer += "<div>\n  <h2>model</h2>\n</div>\n\n\n\n<div>bound defined_str: <span>";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.bound) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.bound); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.bound) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><pre class=\"example\">&lbrace;{#bound}}&lbrace;{defined_str}}&lbrace;{/bound}}</pre></div>\n<div>bound undefined_str: <span>";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.bound) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.bound); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.bound) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><pre class=\"example\">&lbrace;{#bound}}&lbrace;{undefined_str}}&lbrace;{/bound}}</pre></div>\n\n<div>defined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.defined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n<div>defined_obj.undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.defined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><pre class=\"example\"></pre></div>\n\n<div>undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><pre class=\"example\"></pre></div>\n<div>undefined_obj.undefined_obj.str: <span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.undefined_obj)),stack1 == null || stack1 === false ? stack1 : stack1.str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><pre class=\"example\"></pre></div>\n\n<div>defined_single_dimension_arr: <span>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.defined_single_dimension_arr), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><pre class=\"example\"></pre></div>\n<div>undefined_single_dimension_arr: <span>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.undefined_single_dimension_arr), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><pre class=\"example\"></pre></div>\n\n<div>defined_str: <input type=\"text\" ";
  stack1 = (helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'value': ("defined_str"),
    'on': ("keyup")
  },inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bind-attr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><pre class=\"example\">&lt;input type=\"text\" &lbrace;{#bind-attr this value=\"defined_str\" on=\"keyup\"}}&lbrace;{/bind-attr}}></pre></div>\n\n<div>defined_str: <input type=\"text\" ";
  stack1 = (helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'value': ("defined_str")
  },inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bind-attr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n<pre class=\"example\">&lt;input type=\"text\" &lbrace;{#bind-attr this value=\"defined_str\"}}&lbrace;{/bind-attr}}></pre></div>\n\n<div>undefined_str: <input type=\"text\" ";
  stack1 = (helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'value': ("undefined_str"),
    'on': ("keyup")
  },inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bind-attr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><pre class=\"example\">&lt;input type=\"text\" &lbrace;{#bind-attr this value=\"undefined_str\" on=\"keyup\"}}&lbrace;{/bind-attr}}></pre>\n</div>\n<div>\n  ";
  stack1 = (helper = helpers.bound || (depth0 && depth0.bound),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bound", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<pre class=\"example\">&lbrace;{#bound}}\n  &lbrace;{json this}}\n&lbrace;{/bound}}\n</pre>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["product"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"product\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.style), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.distinct), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.color), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.size), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <h3>Qty</h3>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3>Style</h3>\n    <select>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.style), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.distinct, 'distinct', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3>Distinct</h3>\n    <select>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.style), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3>Color</h3>\n    <nav class=\"color\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.color), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </nav>\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.color, 'color', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3>Size</h3>\n    <nav class=\"size\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.size), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </nav>\n    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.size, 'size', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["size"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a data-size data-val=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-atp=\"";
  if (helper = helpers.atp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.atp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

  stack1 = (helper = helpers.bound || (depth0 && depth0.bound),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "bound", depth0, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });