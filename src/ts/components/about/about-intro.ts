/// <reference path="../base-classes/dom-element.ts" />

class AboutIntro extends DOMElement {
  constructor(parent: HTMLElement, content: IntroBlock) {
    super("div", parent, ["about-block"], "cv-intro");
    this.appendChildren(content);
    this.addListeners();
  }
  appendChildren(content: IntroBlock) {
    // Block containers
    this.children.container1 = new DOMElement(
      "div",
      this.node,
      ["about-block"],
      ""
    );
    this.children.container2 = new DOMElement(
      "div",
      this.node,
      ["about-block"],
      "link-container"
    );
    this.children.nameBlock = new DOMElement(
      "div",
      this.children.container1.node,
      ["about-block-part-1"],
      "name-block"
    );
    this.children.captionBlock = new DOMElement(
      "div",
      this.children.container1.node,
      ["about-block-part-2"],
      "caption-block"
    );
    this.children.spacerBlock = new DOMElement(
      "div",
      this.children.container2.node,
      ["about-block-part-1"],
      ""
    );
    this.children.linkBlock = new DOMElement(
      "div",
      this.children.container2.node,
      ["about-block-part-2"],
      "link-block"
    );

    // Intro section text elements.
    this.children.name = new DOMElement(
      "h1",
      this.children.nameBlock.node,
      [],
      "about-intro-name",
      content.name
    );
    this.children.text = new DOMElement(
      "h1",
      this.children.captionBlock.node,
      [],
      "about-intro-text",
      content.introText
    );
    this.children.text = new DOMElement(
      "h2",
      this.children.linkBlock.node,
      [],
      "",
      "nathanaelblackbourn@gmail.com"
    );
    this.children.github = new Link(
      "p",
      this.children.linkBlock.node,
      "See my github",
      "github-link"
    );
  }

  private addListeners() {
    this.children.github.node.addEventListener("click", () => {
      window.open("https://github.com/nathanaelblackbourn", "_blank");
    });
  }
}
