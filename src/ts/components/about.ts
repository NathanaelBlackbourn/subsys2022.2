/// <reference path="dom-element.ts"/>

class About extends DOMElement {
  content: AboutContent;
  constructor(aboutContent: AboutContent) {
    super(
      "div",
      mainframe.elements.nav.children.navContainer.node,
      ["nav-column", "content-column"],
      "about"
    );
    this.content = aboutContent;
    this.appendChildren();
  }

  private appendChildren() {
    this.children.intro = new AboutIntro(
      this.node,
      this.content.introBlock
    );
    let skillKey: keyof SkillsBlocks
    for (skillKey in this.content.skillsBlocks) {
      const block = this.content.skillsBlocks[skillKey]
      this.children[block.title] = new AboutSkillsBlock(
        this.node,
        block.title.toLowerCase() + "-block",
        block
      );
    }
    let expKey: keyof ExperienceBlocks
    for (expKey in this.content.experienceBlocks) {
      const block = this.content.experienceBlocks[expKey];
      this.children[block.title] = new AboutExperienceBlock(
        this.node,
        block.title + "-block",
        block
      );
    }
  }
}

interface CVIntroContent {
  name: string;
  title: string;
  sliderText: string;
}

class AboutContentBlock extends DOMElement {
  constructor(parent: HTMLElement, id: string) {
    super("div", parent, ["about-block", "flex"], id);
  }
}

class AboutIntro extends DOMElement {
  constructor(parent: HTMLElement, content: IntroBlock) {
    super("div", parent, [], "cv-intro");
    this.appendChildren(content);
  }
  appendChildren(content: IntroBlock) {
    this.children.name = new ContentElement(
      "h1",
      this.node,
      [],
      "about-intro-name",
      content.name
    );
    this.children.text = new ContentElement(
      "p",
      this.node,
      [],
      "about-intro-text",
      content.sliderText
    );
    this.children.title = new ContentElement(
      "h1",
      this.node,
      [],
      "about-intro-title",
      content.title
    );
  }
}

