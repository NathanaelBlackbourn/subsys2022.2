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
    for (const block in this.content.skillsBlocks) {
      const thisBlock = this.content.skillsBlocks[block];
      this.children[block] = new AboutSkillsBlock(
        this.node,
        thisBlock.title.toLowerCase() + "-block",
        thisBlock
      );
    }
    for (const block in this.content.experienceBlocks) {
      const thisBlock = this.content.experienceBlocks[block];
      this.children[block] = new AboutExperienceBlock(
        this.node,
        thisBlock.title + "-block",
        thisBlock
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

