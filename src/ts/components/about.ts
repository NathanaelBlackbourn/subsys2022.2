/// <reference path="dom-element.ts"/>

class About extends DOMElement {
  content: AboutContent;
  constructor(aboutContent: AboutContent) {
    super(
      "div",
      mainframe.elements.nav.children.navContainer.node,
      ["nav-column", "content-column", "flex"],
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
    super("div", parent, ["about-block"], id);
  }
}

// Intro section at top of about
class AboutIntro extends DOMElement {
  constructor(parent: HTMLElement, content: IntroBlock) {
    super("div", parent, ["space-between"], "cv-intro");
    this.appendChildren(content);
  }
  appendChildren(content: IntroBlock) {

    // Block containers
    this.children.nameBlock = new DOMElement(
      "div",
      this.node,
      ["about-block"],
      "name-block"
    )
    this.children.captionBlock = new DOMElement(
      "div",
      this.node,
      ["about-block"],
      "caption-block"
    )

    // Intre section text elements.
    this.children.name = new DOMElement(
      "h1",
      this.children.nameBlock.node,
      [],
      "about-intro-name",
      content.name
    );
    this.children.text = new DOMElement(
      "p",
      this.children.captionBlock.node,
      [],
      "about-intro-text",
      content.introText
    );
  }
}

