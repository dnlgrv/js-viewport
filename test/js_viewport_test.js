describe("JSViewport", function () {
  it("has a default configured element of #jsvp", function () {
    expect(JSViewport.configuration.element.id).to.be("jsvp");
  });

  describe("#is", function () {
    context("when the provided breakpoint matches the content attribute", function () {
      it("returns true", function () {
        expect(JSViewport.is("mobile")).to.be(true);
      });
    });

    context("when a custom element is provided", function () {
      beforeEach(function () {
        JSViewport.configure({
          element: document.getElementById("custom")
        });
      });

      it("uses the configured element", function () {
        expect(JSViewport.is("custom")).to.be(true);
      });
    });
  });
});
