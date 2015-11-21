JSViewport = {
  configuration: {}
};

JSViewport.configure = function (configuration) {
  this.configuration = configuration;
};

JSViewport.getElement = function () {
  return this.configuration.element ||
    document.getElementById("jsvp");
};

JSViewport.is = function (breakpoint) {
  var element = this.getElement(),
      computedStyle = window.getComputedStyle(element);

  return computedStyle.content === ("\"" + breakpoint + "\"")
};
