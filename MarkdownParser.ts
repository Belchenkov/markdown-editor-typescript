enum TagType {
    Paragraph,
    Header1,
    Header2,
    Header3,
    HorizontalRule
}

class HtmlHandler {
    public TextChangeHandler(id: string, output: string) : void {
        let markdown = <HTMLTextAreaElement>document.getElementById(id);
        let markdownOutput = <HTMLLabelElement>document.getElementById(output);

        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    new TagTypeToHtml();
                    markdownOutput.innerHTML = markdown.value;
                } else {
                    markdownOutput.innerHTML = "<p></p>";
                }
            }
        }
    }
}

class TagTypeToHtml {
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();

    constructor() {
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
        this.tagType.set(TagType.HorizontalRule, "hr");
    }

    private GetTag(tagType : TagType, openingTagPattern : string) : string {
        let tag = this.tagType.get(tagType);

        if (tag !== null) {
            return `${openingTagPattern}${tag}>`;
        }

        return `${openingTagPattern}p>`;
    }

    public OpeningTag(tagType : TagType) : string {
        return this.GetTag(tagType, `<`);
    }

    public ClosingTag(tagType : TagType) : string {
        return this.GetTag(tagType, `</`);
    }


}
