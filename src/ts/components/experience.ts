class AboutExperienceBlock extends DOMElement {
    constructor(
      parent: HTMLElement,
      id: string,
      content: ExperienceSection
    ) {
      super("div", parent, ["experience-section", "space-between"], id);
      this.appendChildren(content);
    }
  
    appendChildren(content: ExperienceSection) {

      // Experience section titles.
      this.children.title = new ContentElement(
        "h2",
        this.node,
        ['about-block-title'],
        content.title + "-title",
        content.title
      )

      // Block container
      for (const block of content.content) {
        this.children.container = new AboutContentBlock (
          this.node,
          block.organisation + " block"
        )

        // Header row
        this.children.head = new DOMElement(
          "div",
          this.children.container.node,
          ["flex", "space-between"],
          content.title + "-head"
        );
        this.children.organisation = new ContentElement(
          "h3",
          this.children.head.node,
          ["about-organisation", "about-h3"],
          block.organisation,
          block.organisation
        );
        this.children.roll = new ContentElement(
          "h3",
          this.children.head.node,
          ["about-course", "about-h3"],
          block.roll,
          block.roll
        );
        this.children.dateBlock = new DOMElement(
          "div",
          this.children.container.node,
          ["experience-date-block", "flex", "space-between"],
          null
        );
        this.children.startDate = new ContentElement(
          "h3",
          this.children.dateBlock.node,
          ["experience-start-date", "about-h3"],
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
          "h3",
          this.children.dateBlock.node,
          ["experience-end-date", "about-h3"],
          null,
          block.endMonth + this.slashOrNoSlash(block.endYear) + block.endYear
        );
        this.children.description = new ContentElement(
          "p",
          this.children.container.node,
          ["experience-description"],
          null,
          block.description
        );
      }
    }

    private slashOrNoSlash(endYear: string) {
      let shroedingersSlash: string = "/<br>"
      if (endYear === "now") {
        shroedingersSlash = "<br>"
      }
      return shroedingersSlash;
    }
  }
  