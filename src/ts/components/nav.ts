interface iNav {
  toggleHeader(): void;
}

class Nav extends DOMElement implements iNav {

  constructor(parent: HTMLBodyElement | null) {
    super("header", parent, [], "nav-frame");
    this.appendChildren();
  }

  private appendChildren() {
    this.children.navContainer = new navContainer(this.node);
    this.children.headerFooter = new HeaderFooter(this);
  }

  public toggleHeader() {
    this.node.classList.toggle("collapsed");
  }
}

class HeaderFooter extends DOMElement {
  private parentNode: Nav;
  constructor(parentNode: Nav) {
    super("div", parentNode.node, ["flex", "space-between"], "header-footer");
    this.parentNode = parentNode;
    this.appendChildren();
  }

  private appendChildren() {
    this.children.collapseButton = new Button(
      this.node,
      [],
      "collapse-button",
      "COLLAPSE",
      this.parentNode.toggleHeader.bind(this.parentNode)
    );
  }
}
