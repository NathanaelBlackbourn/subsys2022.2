   class MenuColumn extends DOMElement {
    private parentNode: navContainer;
    private activeColumn: string;
        constructor(parent: HTMLElement, parentNode: navContainer) {
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
            this.openColumn.bind(this, "projects"),
          );
          this.children.aboutButton = new Button(
            this.node,
            ["menu-button"],
            "about-button",
            "ABOUT",
            this.openColumn.bind(this, "about"),
          );
        }

        private async openColumn(target: string) {
          switch (this.activeColumn) {
            case target:
              const toggleMeOff = this.parentNode.children[target];
              toggleMeOff.node.classList.remove("section-open");
              toggleMeOff.removeMe();
              this.activeColumn = "none";
              break;
          
            default:
              for (const child in this.parentNode.children) {
                if (child != "menuColumn" && child != target) {
                  const prevColumn = this.parentNode.children[child];
                  for (const child in this.children) {
                    if (this.children[child] instanceof Button) {
                      this.children[child].node.classList.remove("section-open");
                    }
                  }
                  prevColumn.removeMe();
                }
              }
              switch (target) {
                case "projects":
                  this.parentNode.children.projects = new Projects();
                  document.getElementById("projects-button")?.classList.add("section-open");
                  break;
                  case "about":
                    const aboutContent = await this.getAboutContent();
                    this.parentNode.children.about = new About(aboutContent);
                    document.getElementById("about-button")?.classList.add("section-open");
                    break;
                    default:
                      break;
              }
              this.activeColumn = target;
              break;
          }
            }

        private async getAboutContent(): Promise<AboutContent> {
            return fetch("./cv/content.json").then((response) =>
            response.json()
          );
        }
    
}