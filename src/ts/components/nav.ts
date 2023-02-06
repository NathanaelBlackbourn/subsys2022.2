class Nav extends DOMElement{

  /**
   * Classes used to construct child components of the nav.
   */
  elements = {
    headerFooter: class headerFooter extends DOMElement {
      constructor(parent: HTMLHeadElement) {
        super("div", parent, ["flex", "space-between"], "header-footer");
        this.appendChildren();
      }
      appendChildren() {
        this.children.collapseButton = new Button(
          this.node,
          [],
          "collapse-button",
          "COLLAPSE",
          mainframe.toggleHeader,
        );
      }
    },
  };
  constructor(parent: HTMLBodyElement | null) {
    super("header", parent, [], "nav-frame");
    this.appendChildren();
    this.listeners();
  }
  appendChildren() {
    this.children.navContainer = new navContainer(this.node);
    this.children.headerFooter = new this.elements.headerFooter(this.node);
  }
  listeners() {}
}
