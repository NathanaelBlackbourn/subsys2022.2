class Projects extends DOMElement {
  constructor() {
    super(
      "div",
      mainframe.elements.nav.children.navContainer.node,
      ["nav-column", "content-column"],
      "projects"
    );
    this.renderContent();
  }
  renderContent() {
    for (const project of projectsData) {
      this.children[this.camelCaseify(project.title)] = new ProjectBlock(
        project
      );
    }
  }

  private camelCaseify(name: string) {
    return (
      name
        .split("")
        .map((word) => {
          word[0].toUpperCase();
          return word;
        })
        .join("") + "Block"
    );
  }
}
