/// <reference path="../base-classes/dom-element.ts"/>

class About extends DOMElement {
  content: AboutContent;
  constructor() {
    super(
      "div",
      mainframe.elements.nav.children.navContainer.node,
      ["nav-column", "content-column", "flex"],
      "about"
    );
    this.content = CVData;
    this.appendChildren();
  }

  private appendChildren() {
    this.children.intro = new AboutIntro(this.node, this.content.introBlock);
    this.children.pitchBlock = new PitchBlock(this.content, this.node);
    let skillKey: keyof SkillsBlocks;
    for (skillKey in this.content.skillsBlocks) {
      const block = this.content.skillsBlocks[skillKey];
      this.children[block.title] = new AboutSkillsBlock(
        this.node,
        block.title.toLowerCase() + "-block",
        block
      );
    }
    let expKey: keyof ExperienceBlocks;
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
