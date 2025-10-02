const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

function relativeToInputPath(inputPath, relativeFilePath) {
	let split = inputPath.split("/");
	split.pop();

	return path.resolve(split.join(path.sep), relativeFilePath);

}

function isFullUrl(url) {
	try {
		new URL(url);
		return true;
	} catch(e) {
		return false;
	}
}

// simple HTML escaper for the caption
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


function escapeAttr(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

module.exports = function(eleventyConfig) {
  /* Back compatible image shortcode
     Usage in Markdown:
     {% image "./25.jpg", "Me", [320, 640], "(max-width: 40rem) 100vw, 640px", "round" %}
     If className includes "round" it crops square at build time
  */
eleventyConfig.addAsyncShortcode(
    "image",
    async function imageShortcode(src, alt, widths, sizes, className = "") {
      const input = isFullUrl(src) ? src : relativeToInputPath(this.page.inputPath, src);
      const formats = ["avif", "webp", "auto"];

      const widthArray = Array.isArray(widths) ? widths : [Number(widths) || 300];

      const sharpOptions = className && String(className).includes("round")
        ? { fit: "cover", position: "center", height: widthArray[0] }
        : {};

      const metadata = await eleventyImage(input, {
        widths: widthArray,
        formats,
        outputDir: path.join(eleventyConfig.dir.output, "img"),
        sharpOptions
      });

      const imageAttributes = {
        alt,                 // keep alt for screen readers
        sizes,
        class: className || "",
        loading: "lazy",
        decoding: "async"
      };

      const pictureHtml = eleventyImage.generateHTML(metadata, imageAttributes);

      // Tufte CSS: margin figure with caption in the margin
      const caption = escapeHtml(alt || "");

      return `
<figure class="margin">
  ${pictureHtml}
  ${caption ? `<figcaption>${caption}</figcaption>` : ""}
</figure>`.trim();
    }
  );

  /* New inlineImage shortcode with wrap and shape control
     {% inlineImage src, alt, size=200, side="left", shape="rect"|"rounded"|"circle", radius=16, extraClass="", figureStyle="" %}
  */
  eleventyConfig.addAsyncShortcode(
    "inlineImage",
    async function inlineImageShortcode(
      src,
      alt,
      size = 200,
      side = "left",
      shape = "rect",
      radius = 16,
      extraClass = "",
      figureStyle = ""
    ) {
      const input = isFullUrl(src) ? src : relativeToInputPath(this.page.inputPath, src);
      const formats = ["avif", "webp", "auto"];
      const target = Number(size) || 200;

      // Square crop for circle shape
      const sharpOptions =
        String(shape).toLowerCase() === "circle"
          ? { fit: "cover", position: "center", height: target }
          : {};

      const metadata = await eleventyImage(input, {
        widths: [target],
        formats,
        outputDir: path.join(eleventyConfig.dir.output, "img"),
        sharpOptions,
      });

      // Help CLS using intrinsic size from the first generated file
      const firstFormat = Object.values(metadata)[0][0];
      const widthAttr = firstFormat.width;
      const heightAttr = firstFormat.height;

      const sideClass =
        String(side).toLowerCase() === "right" ? "sideRight" : "sideLeft";
      const s = String(shape).toLowerCase();
      const shapeClass =
        s === "circle" ? "shapeCircle" : s === "rounded" ? "shapeRounded" : "shapeRect";

      const inner = eleventyImage.generateHTML(metadata, {
        alt,
        class: `inlineImg ${extraClass}`.trim(),
        loading: "lazy",
        decoding: "async",
        width: widthAttr,
        height: heightAttr,
      });

      // Computed defaults
      const baseFigureStyle =
        s === "circle"
          ? `width:${target}px;height:${target}px;--radius:${radius}px;`
          : `width:${target}px;--radius:${radius}px;`;

      // Append user style so it can override defaults if needed
      const mergedFigureStyle =
        baseFigureStyle + (figureStyle ? " " + figureStyle.trim() : "");

      return `
<figure class="inlineWrap ${sideClass} ${shapeClass}" style="${escapeAttr(mergedFigureStyle)}">
  ${inner}
</figure>
`.trim();
    }
  );
};
