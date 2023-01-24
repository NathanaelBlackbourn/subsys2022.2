interface ExperienceContentBlock {
    organisation: string;
    roll: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    description: string;
  }
  
  interface AboutExperienceContent {
    title: string;
    content: ExperienceContentBlock[];
  }
  
  class AboutExperienceBlock extends AboutContentBlock {
    constructor(
      parent: HTMLElement,
      id: string,
      content: AboutExperienceContent
    ) {
      super(parent, id);
      this.appendChildren(content);
    }
  
    appendChildren(content: AboutExperienceContent) {
      for (const block of content.content) {
        this.children.part1 = new DOMElement(
          "div",
          this.node,
          ["block-part"],
          null
        );
        this.children.part2 = new DOMElement(
          "div",
          this.node,
          ["block-part"],
          null
        );
        this.children.head = new DOMElement(
          "div",
          this.children.part1.node,
          ["about-head", "flex", "space-between"],
          content.title + "-head"
        );
        this.children.organisation = new ContentElement(
          "h2",
          this.children.head.node,
          ["about-organisation"],
          block.organisation,
          block.organisation
        );
        this.children.roll = new ContentElement(
          "h2",
          this.children.head.node,
          ["about-course"],
          block.roll,
          block.roll
        );
        this.children.dateBlock = new DOMElement(
          "div",
          this.children.part1.node,
          ["experience-date-block", "flex", "space-between"],
          null
        );
        this.children.startDate = new ContentElement(
          "h2",
          this.children.dateBlock.node,
          ["experience-start-date"],
          content.title + "-date",
          block.startMonth + "/<br>" + block.startYear
        );
        this.children.to = new ContentElement(
          "div",
          this.children.dateBlock.node,
          ["to"],
          block.organisation + "-to",
          "to"
        );
        this.children.endDate = new ContentElement(
          "h2",
          this.children.dateBlock.node,
          ["experience-end-date"],
          null,
          block.endMonth + "/<br>" + block.endYear
        );
        this.children.description = new ContentElement(
          "p",
          this.children.part1.node,
          ["experience-description"],
          null,
          block.description
        );
      }
    }
  }
  