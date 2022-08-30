const Image = require("@11ty/eleventy-img");
const markit = require("markdown-it");
const path = require('node:path');

async function imageShortcode(src, alt, sizes) {
    src = __dirname + "/src/" + src;
    let meta = await Image(src, {
        widths: [200, 300, 400, 640, 1600],
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
    eleventyConfig.ignores.add("**.md");
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return new markit({html: true}).render(content);
    });
    return {
        dir: {
            includes: "src/_includes",
        }
    }
};
