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
      this.children.head = new DOMElement(
        "div",
        this.node,
        ["skills-head", "flex"],
        content.title + "-head"
      );
      this.children.title = new ContentElement(
        "h2",
        this.children.head.node,
        ["about-block-title"],
        content.title + "-title",
        content.title
      );

      /**
       * Rows
       */
      let i = 1;
      let row: keyof SkillsContent
      for (row in content.content) {
        this.children["row" + i] = new DOMElement(
          "div",
          this.node,
          ["skill-row", "flex", "space-between"],
          content.title + "-row-" + i
        );
        
        /**
         * Items on rows
         */
        for (const item in content.content[row]) {
          const skillBlock = content.content[row][item];
          this.children[skillBlock.skill] = new ContentElement(
            "h3",
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