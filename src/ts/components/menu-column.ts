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
          this.children.projectsButton = new Button(
            this.node,
            [],
            "projects-button",
            "PROJECTS",
            this.openColumn.bind(this, "projects"), // Question. Is there a better way to refer the the parnet instance?
          );
          this.children.aboutButton = new Button(
            this.node,
            [],
            "about-button",
            "ABOUT",
            this.openColumn.bind(this, "about"),
          );
        }

        private async openColumn(target: string) {
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
                  break;
                  case "about":
                    const aboutContent = await this.getAboutContent();
                    this.parentNode.children.about = new About(aboutContent);
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