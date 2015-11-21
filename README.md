# JS Viewport

If you've ever had to run JavaScript based on the current viewport dimension
(and media query), JS Viewport can help you. A lot of the time you will end up
storing your media query breakpoint widths (mobile, tablet, laptop, desktop
etc.) in your JS as well as your CSS, leading to duplication. JS Viewport can
help by re-using those CSS media queries.

## Usage

1. Include JS Viewport
2. You need an element on your page (best to have it on every page) that you're
   going to modify based on the media query
3. (Optional) Let JS Viewport know which element you're using to define your
   breakpoints (JSViewport will look for a `#jsvp` element by default):

   ```js
   JSViewport.configure({
     element: document.findElementById("custom-viewport-element")
   });
   ```

4. Set up your CSS media queries to modify the element's `content` attribute:

   ```js
   #jsvp {
     content: "mobile";
     display: none;
   }

   @media screen and (min-width: 768px) {
     #jsvp {
       content: "tablet";
     }
   }

   @media screen and (min-width: 1224px) {
     #jsvp {
       content: "laptop";
     }
   }
   ```

5. Use JSViewport from your JS to find out what the current viewport is:

   ```js
   if (JSViewport.is("mobile")) {
     // Do things for mobile
   } else if (JSViewport.is("tablet")) {
     // Do things for tablet
   }
   ```

## License

See [LICENSE](LICENSE.md).
