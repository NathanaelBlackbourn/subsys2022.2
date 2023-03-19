class PitchBlock extends DOMElement {
  constructor(content: AboutContent, parent: HTMLElement) {
    super("div", parent, ["about-block"], "");
    this.appendChildren(content);
  }

  private appendChildren({pitchBlock}: AboutContent) {
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

    this.children.title = new DOMElement(
      "h1",
      this.children.part1.node,
      [],
      "",
      pitchBlock.title
    );

    this.children.pitch = new DOMElement(
      "p",
      this.children.part2.node,
      [],
      "",
      pitchBlock.pitch
    );
  }
}
