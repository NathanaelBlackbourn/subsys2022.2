interface Nav extends DOMElement {
  templates: { [key: string]: DOMElement }; // Question. How can I type this?
}

class Nav extends DOMElement {

  templates = {
    // Question. How can I type this?
    navContainer: class navContainer extends DOMElement {
      constructor(parent: HTMLElement) {
        super("div", parent, ["nav-container", "flex"], "nav-container");
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
          "projects"
        );
        this.children.aboutButton = new Button(
          this.node,
          [],
          "about-button",
          "ABOUT",
          this.buttonListener,
          "about"
        );
      }

      buttonListener(target: string) {
        // console.log(navContainer); Why doesn't this work? The object is inside navContainer.
        const targetElement =
          mainframe.elements.nav.children.navContainer.children[target];
        if (targetElement) {
          targetElement.removeMe();
        } else {
          const constructor = mainframe.elements.nav.templates[target]; // Question. Why do I get an error here? The code works and is copied from Stack Overflow.
          mainframe.elements.nav.children.navContainer.children[target] =
            new constructor();
        }
      }
    },

    projects: class Projects extends DOMElement {
      constructor() {
        super(
          "div",
          mainframe.elements.nav.children.navContainer.node,
          ["nav-column", "content-column"],
          "projects"
        ); // Annoying selector
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
        super(
          "div",
          mainframe.elements.nav.children.navContainer.node,
          ["nav-column", "content-column"],
          "about"
        );
        this.init();
      }
      async init() {
        await this.getContent();
        this.appendChildren();
      }
      async getContent() {
        this.content = await fetch("./cv/content.json").then((response) =>
          response.json()
        );
      }

      appendChildren() {
        this.children.intro = new AboutIntro(
          this.node,
          this.content.introBlock
        );
        for (const block in this.content.skillsBlocks) {
          const thisBlock = this.content.skillsBlocks[block];
          this.children[block] = new AboutSkillsBlock(
            this.node,
            thisBlock.title.toLowerCase() + "-block",
            thisBlock
          );
        }
        for (const block in this.content.experienceBlocks) {
          const thisBlock = this.content.experienceBlocks[block];
          this.children[block] = new AboutExperienceBlock(
            this.node,
            thisBlock.title + "-block",
            thisBlock
          );
        }
      }
    },
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
          null
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
    this.children.navContainer = new this.templates.navContainer(this.node);
    this.children.menuColumn = new this.templates.menu(
      this.children.navContainer.node
    );
    this.children.headerFooter = new this.templates.headerFooter(this.node);
  }
  listeners() {}
}
