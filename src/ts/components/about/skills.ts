/// <reference path="about.ts" />

interface AboutSkillsContent {
  title: string;
  content: object[];
}

interface SkillInfo {
  skill: string;
  level: number;
}

class AboutSkillsBlock extends AboutContentBlock {
  private blockName: string;

  constructor(parent: HTMLElement, id: string, content: SkillsSection) {
    super(parent, id);
    this.blockName = content.title.toLowerCase();
    this.appendChildren(content);
  }

  appendChildren(content: SkillsSection) {
    /**
     * Skills blocks
     */
    this.children.part1 = new DOMElement(
      "div",
      this.node,
      ["about-block-part-1"],
      content.title.split(" ").join("-") + "-part1"
    );
    this.children.part2 = new DOMElement(
      "div",
      this.node,
      ["about-block-part-2"],
      content.title + "-part2"
    );
    this.children.title = new DOMElement(
      "h1",
      this.children.part1.node,
      ["about-block-title"],
      content.title + "-title",
      content.title
    );

    /**
     * Rows
     */
    let i = 1;
    let column: keyof SkillContent;
    for (column in content.content) {
      this.children["row" + i] = new DOMElement(
        "div",
        this.children.part2.node,
        ["skill-column", "flex"],
        content.title.split(" ").join("-") + "-column-" + i
      );

      /**
       * Items on rows
       */
      for (const item in content.content[column]) {
        const skillBlock = content.content[column][item];
        this.children[skillBlock.skill] = new DOMElement(
          "h2",
          this.children["row" + i].node,
          ["skill-element", "about-h3"],
          skillBlock.skill + "-element",
          skillBlock.skill
        );
      }
      i++;
    }
  }
}
