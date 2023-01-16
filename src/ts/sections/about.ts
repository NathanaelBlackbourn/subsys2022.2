interface CVIntroContent {
  name: string;
  title: string;
  sliderText: string;
}

class AboutContentBlock extends DOMElement {
  constructor(parent: HTMLElement, id: string) {
    // Question. Can I put appendChildren() here event though it takes an argument of a different type each time?
    super("div", parent, ["about-block", "flex"], id);
  }
}

class AboutIntro extends DOMElement {
  constructor(parent: HTMLElement, content: CVIntroContent) {
    super("div", parent, [], "cv-intro");
    this.appendChildren(content);
  }
  appendChildren(content: CVIntroContent) {
    this.children.name = new ContentElement(
      "h1",
      this.node,
      [],
      "about-intro-name",
      content.name
    );
    this.children.title = new ContentElement(
      "h1",
      this.node,
      [],
      "about-intro-title",
      content.title
    );
    this.children.text = new ContentElement(
      "p",
      this.node,
      [],
      "about-intro-text",
      content.sliderText
    );
  }
}



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

  constructor(parent: HTMLElement, id: string, content: AboutSkillsContent) {
    super(parent, id);
    this.blockName = content.title.toLowerCase();
    this.appendChildren(content);
  }

  appendChildren(content: AboutSkillsContent) {
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
    for (const row in content.content) {
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
