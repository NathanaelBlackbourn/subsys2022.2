interface AboutSkillsContent {
    title: string;
    content: object[];
  }
  
  interface SkillInfo {
    skill: string;
    level: number;
  }
  
  class AboutSkillsBlock extends AboutContentBlock {
  
      blockName: string;
  
    constructor(parent: HTMLElement, id: string, content: SkillsSection) {
      super(parent, id);
      this.blockName = content.title.toLowerCase();
      this.appendChildren(content);
    }
  
    appendChildren(content: SkillsSection) {
      this.children.part1 = new DOMElement(
          "div",
          this.node,
          ["block-part"],
          this.blockName + "-part-1"
        );
        this.children.part2 = new DOMElement(
          "div",
          this.node,
          ["block-part"],
          this.blockName + "-part-2"
        );
      this.children.head = new DOMElement(
        "div",
        this.children.part1.node,
        ["about-head", "flex", "space-between"],
        content.title + "-head"
      );
      this.children.title = new ContentElement(
        "h2",
        this.children.head.node,
        ["about-block-title"],
        content.title + "-title",
        content.title
      );
      let i = 1;
      let row: keyof SkillsContent
      for (row in content.content) {
        this.children["row" + i] = new DOMElement(
          "div",
          this.children.part1.node,
          ["skill-row", "flex", "space-between"],
          content.title + "-row-" + i
        );
        for (const item in content.content[row]) {
          const skillBlock = content.content[row][item]; // Question. Same error here again. Functioning code.
          this.children[skillBlock.skill] = new ContentElement(
            "h3",
            this.children["row" + i].node,
            ["skill-element"],
            skillBlock.skill + "-element",
            skillBlock.skill
          );
        }
        i++;
      }
    }
  }