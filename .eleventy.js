const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    let meta = await Image(src, {
        widths: [200, 300, 640, 1600],
        formats: ["webp", "png"],
        outputDir: "./_site/images",
        urlPath: "/images/"
    });

    let attrs = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async"
    };

    return Image.generateHTML(meta, attrs);
}


module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addPassthroughCopy("css/");
};
