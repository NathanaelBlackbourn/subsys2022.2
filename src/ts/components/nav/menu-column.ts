/// <reference path="../base-classes/dom-element.ts" />

class MenuColumn extends DOMElement {
  private parentNode: NavContainer;
  private activeColumn: string;
  constructor(parent: HTMLElement, parentNode: NavContainer) {
    super("div", parent, ["nav-column"], "menu-column");
    this.parentNode = parentNode;
    this.activeColumn = "none";
    this.appendChildren();
  }

  private appendChildren() {
    // Buttons to open sections.
    this.children.projectsButton = new Button(
      this.node,
      ["menu-button"],
      "projects-button",
      "PROJECTS",
      this.openColumn.bind(this, "projects")
    );
    this.children.aboutButton = new Button(
      this.node,
      ["menu-button"],
      "about-button",
      "ABOUT",
      this.openColumn.bind(this, "about")
    );
  }

  private async openColumn(target: string) {
    for (const child in this.children) {
      if (this.children[child] instanceof Button) {
        this.children[child].node.classList.remove("section-open");
      }
    }
    switch (this.activeColumn) {
      case target:
        const toggleMeOff = this.parentNode.children[target];
        toggleMeOff.removeMe();
        this.activeColumn = "none";
        break;

      default:
        for (const child in this.parentNode.children) {
          if (child != "menuColumn" && child != target) {
            const prevColumn = this.parentNode.children[child];
            prevColumn.removeMe();
          }
        }
        switch (target) {
          case "projects":
            this.parentNode.children.projects = new Projects();
            document
              .getElementById("projects-button")
              ?.classList.add("section-open");
            break;
          case "about":
            this.parentNode.children.about = new About();
            document
              .getElementById("about-button")
              ?.classList.add("section-open");
            break;
          default:
            break;
        }
        this.activeColumn = target;
        break;
    }
  }
}
