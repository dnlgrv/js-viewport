JSViewport = {
  configuration: {
    element: document.getElementById("jsvp")
  }
};

JSViewport.configure = function (configuration) {
  this.configuration = configuration;
};

JSViewport.is = function (breakpoint) {
  var element = this.configuration.element,
      computedStyle = window.getComputedStyle(element);

  return computedStyle.content === ("\"" + breakpoint + "\"")
};
