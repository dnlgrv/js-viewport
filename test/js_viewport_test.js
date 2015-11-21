describe("JSViewport", function () {
  describe("default configuration", function () {
    it("is empty", function () {
      expect(JSViewport.configuration).to.eql({});
    });
  });

  describe("#getElement", function () {
    context("when there's no custom element configured", function () {
      it("returns the #jsvp element", function () {
        expect(JSViewport.getElement().id).to.be("jsvp");
      });
    });

    context("when a  custom element is configured", function () {
      beforeEach(function () {
        JSViewport.configure({
          element: document.getElementById("custom")
        });
      });

      afterEach(function () {
        JSViewport.configure({
          element: undefined
        });
      });

      it("returns the custom element", function () {
        expect(JSViewport.getElement().id).to.be("custom");
      });
    });
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
