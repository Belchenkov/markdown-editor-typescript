"use strict";
var TagType;
(function (TagType) {
    TagType[TagType["Paragraph"] = 0] = "Paragraph";
    TagType[TagType["Header1"] = 1] = "Header1";
    TagType[TagType["Header2"] = 2] = "Header2";
    TagType[TagType["Header3"] = 3] = "Header3";
    TagType[TagType["HorizontalRule"] = 4] = "HorizontalRule";
})(TagType || (TagType = {}));
var HtmlHandler = /** @class */ (function () {
    function HtmlHandler() {
    }
    HtmlHandler.prototype.TextChangeHandler = function (id, output) {
        var markdown = document.getElementById(id);
        var markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = function (e) {
                if (markdown.value) {
                    new TagTypeToHtml();
                    markdownOutput.innerHTML = markdown.value;
                }
                else {
                    markdownOutput.innerHTML = "<p></p>";
                }
            };
        }
    };
    return HtmlHandler;
}());
var TagTypeToHtml = /** @class */ (function () {
    function TagTypeToHtml() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
        this.tagType.set(TagType.HorizontalRule, "hr");
        console.log(this.tagType);
    }
    return TagTypeToHtml;
}());
//# sourceMappingURL=MarkdownParser.js.map