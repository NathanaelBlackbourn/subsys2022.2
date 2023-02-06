class Projects extends DOMElement {
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
    }

interface projectInfo {
  date: string;
  title: string;
  description: string;
}

/** The block of elements which forms each project's card */
class ProjectBlock extends DOMElement {
  projNum: number;
  blockName: string;
  content!: projectInfo;
  constructor(i: number) {
    super(
      "div",
      document.getElementById("projects"),
      ["project-block", "flex"],
      "project-" + i
    );
    this.projNum = i;
    this.blockName = "project-" + i;
    this.init(i);
  }
  async init(i: number) {
    this.content = await this.getContent(i);
    this.appendChildren();
    this.getImage(i);
    this.listener(i);
  }
  async getContent(i: number) {
    return await fetch("./work/" + i + "/project-info.json").then((response) =>
      response.json()
    );
  }
  appendChildren() {
    this.children.part1 = new DOMElement(
      "div",
      this.node,
      ["block-part"],
      this.blockName + "-part-1"
    );
    this.children.part2 = new DOMElement(
      "div",
      this.node,
      ["block-part"],
      this.blockName + "-part-2"
    );
    this.children.head = new DOMElement(
      "div",
      this.children.part1.node,
      ["project-head", "flex", "space-between"],
      this.blockName + "-head"
    );
    this.children.date = new ContentElement(
      "span",
      this.children.head.node,
      ["project-date"],
      this.blockName + "-date",
      this.content.date
    );
    this.children.title = new ContentElement(
      "span",
      this.children.head.node,
      ["project-title"],
      this.blockName + "-title",
      this.content.title
    );
    this.children.seeProject = new ContentElement(
      "span",
      this.children.head.node,
      ["see-project"],
      this.blockName + "-see",
      "see project"
    );
    this.children.imageContainer = new DOMElement(
      "div",
      this.children.part1.node,
      ["image-container"],
      this.blockName + "-image"
    );
    this.children.description = new ContentElement(
      "p",
      this.children.part1.node,
      ["project-description"],
      this.blockName + "-description",
      this.content.description
    );
    console.log(this.children);
  }
  getImage(i: number) {
    this.children.imageContainer.node.style.backgroundImage = "url(./work/" + i + "/thumbnail.png)";
  }
  listener(i: number) {
    this.node.addEventListener("click", () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.src = "./work/" + i + "/index.html";
      }
      mainframe.toggleHeader();
    });
  }
}
