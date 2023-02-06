   class MenuColumn extends DOMElement {
    private parentNode: navContainer;
        constructor(parent: HTMLElement, parentNode: navContainer) {
          super("div", parent, ["nav-column"], "menu-column");
          this.parentNode = parentNode;
          this.appendChildren();
        }

        appendChildren() {
          this.children.projectsButton = new Button(
            this.node,
            [],
            "projects-button",
            "PROJECTS",
            this.openProjects.bind(this),
          );
          this.children.aboutButton = new Button(
            this.node,
            [],
            "about-button",
            "ABOUT",
            this.openAbout.bind(this),
          );
        }

        private openProjects() {
            if (this.parentNode.children.hasOwnProperty("about")){
            this.parentNode.children.about.removeMe();
            }
            this.parentNode.children.about = new Projects();
        }

        private async openAbout() {
            if (this.parentNode.children.hasOwnProperty("projects")){
            this.parentNode.children.projects.removeMe();
            }
            let aboutContent = await this.getAboutContent();
            this.parentNode.children.about = new About(aboutContent);
        }

        private async getAboutContent(): Promise<AboutContent> {
            return fetch("./cv/content.json").then((response) =>
            response.json()
          );
        }
    
}