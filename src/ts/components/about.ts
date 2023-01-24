/// <reference path="dom-element.ts"/>

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

