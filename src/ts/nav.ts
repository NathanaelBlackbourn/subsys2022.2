interface Nav extends DOMElement{
  templates: any; // Question. How can I type this?
}

class Nav extends DOMElement{
  templates = {
    // Question. How can I type this?
    navContainer: class navContainer extends DOMElement {
      constructor(parent: HTMLElement) {
        super('div', parent, ['nav-container', 'flex'], 'nav-container')
      }
    },
    menu: class MenuColumn extends DOMElement {
      constructor(parent: HTMLDivElement) {
        super("div", parent, ["nav-column"], "menu-column");
        this.renderContent();
      }
      renderContent() {
        this.children.projectsButton = new Button(
          this.node,
          [],
          "projects-button",
          "PROJECTS",
          this.buttonListener,
          'projects'
        );
        this.children.aboutButton = new Button(
          this.node,
          [],
          "about-button",
          "ABOUT",
          this.buttonListener,
          'about'
        );
      }
      buttonListener(target: string){
        const contentColumns: HTMLCollection =
          document.getElementsByClassName("cotent-column");
        for (const item of contentColumns) {
          if (item.id !== target) {
            item.remove();
          }
        }
        const constructor = mainframe.elements.nav.templates[target]; // Question. Why do I get an error here? The code works and is copied from Stack Overflow.
        new constructor(document.getElementById("main-container"), target);
      }
    },
    projects: class Projects extends DOMElement {
      constructor() {
        super("div", mainframe.elements.nav.children.navContainer.node, ["nav-column", "content-column"], "projects"); // Annoying selector
        this.renderContent();
      }
      renderContent() {
        for (let i = 1; i <= 3; i++) {
          this.children["project" + i] = new ProjectBlock(i);
        }
      }
    },
    about: class About extends DOMElement {
      content!: object;
      constructor() {
        super("div", mainframe.elements.nav.node, ["nav-column", "content-column"], "about");
        this.renderContent();
        this.getContent();
      };
      async getContent() {

      };
      renderContent() {
        console.log("About is rendering");
      }
    },
    headerFooter: class headerFooter extends DOMElement {
      constructor(parent: HTMLHeadElement) {
        super('div', parent, ['flex', 'space-between'], 'header-footer');
        this.appendChildren();
      };
      appendChildren(){
        this.children.collapseButton = new Button(this.node, [], 'collapse-button', 'COLLAPSE', mainframe.toggleHeader, null);
      };
    }
  };
  constructor(parent: HTMLBodyElement | null) {
    super('header', parent, [], 'nav-frame');
    this.appendChildren();
    this.listeners();
  }
  appendChildren() {
    this.children.navContainer = new this.templates.navContainer(this.node);
    this.children.menuColumn = new this.templates.menu(this.children.navContainer.node);
    this.children.headerFooter = new this.templates.headerFooter(this.node);
  };
  listeners() {
  };
}