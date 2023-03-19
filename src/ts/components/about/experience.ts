class AboutExperienceBlock extends DOMElement {
  constructor(parent: HTMLElement, id: string, content: ExperienceSection) {
    super("div", parent, ["about-block", "space-between"], id);
    this.appendChildren(content);
  }

  appendChildren(content: ExperienceSection) {
    // Block parts
    this.children.part1 = new DOMElement(
      "div",
      this.node,
      ["about-block-part-1"],
      ""
    );
    this.children.part2 = new DOMElement(
      "div",
      this.node,
      ["about-block-part-2"],
      ""
    );

    // Experience section titles.
    this.children.title = new DOMElement(
      "h1",
      this.children.part1.node,
      ["about-block-title"],
      content.title + "-title",
      content.title
    );

    // Block container
    for (const block of content.content) {
      this.children.experienceSubBlock = new DOMElement(
        "div",
        this.children.part2.node,
        ["experience-sub-block"],
        ""
      );

      this.children.organisation = new DOMElement(
        "h1",
        this.children.experienceSubBlock.node,
        ["about-organisation"],
        block.organisation,
        block.organisation
      );
      this.children.roll = new DOMElement(
        "h1",
        this.children.experienceSubBlock.node,
        ["about-course"],
        block.roll,
        block.roll
      );
      this.children.dateBlock = new DOMElement(
        "div",
        this.children.experienceSubBlock.node,
        ["experience-date-block", "flex", "space-between"],
        null
      );

      this.children.startDate = new DOMElement(
        "h1",
        this.children.dateBlock.node,
        ["experience-start-date"],
        content.title + "-date",
        block.startMonth + "/<br>" + block.startYear
      );

      this.children.to = new DOMElement(
        "div",
        this.children.dateBlock.node,
        ["to"],
        block.organisation + "-to",
        "to"
      );

      this.children.endDate = new DOMElement(
        "h1",
        this.children.dateBlock.node,
        ["experience-end-date"],
        null,
        block.endMonth + this.slashOrNoSlash(block.endYear) + block.endYear
      );

      this.children.description = new DOMElement(
        "p",
        this.children.experienceSubBlock.node,
        ["experience-description"],
        null,
        block.description
      );
    }
  }

  private slashOrNoSlash(endYear: string) {
    let shroedingersSlash: string = "/<br>";
    if (endYear === "now") {
      shroedingersSlash = "<br>";
    }
    return shroedingersSlash;
  }
}
