interface projectInfo {
  date: string;
  title: string;
  description: string;
}

/** The block of elements which forms each project's card */
class ProjectBlock extends DOMElement {
  blockName: string;
  data: projectData;
  constructor(project: projectData) {
    super(
      "div",
      document.getElementById("projects"),
      ["project-block", "flex"],
      project.title.split(" ").join("-") + "-block"
    );
    this.data = project;
    this.blockName = this.data.title.split(" ").join("-");
    this.init();
  }
  async init() {
    this.appendChildren();
    this.listener();
  }
  appendChildren() {
    // Alternating block parts.
    this.children.part1 = new DOMElement(
      "div",
      this.node,
      ["block-part-1"],
      this.blockName + "-part1"
    );
    this.children.part2 = new DOMElement(
      "div",
      this.node,
      ["block-oart-2"],
      this.blockName + "-part-2"
    );
    this.children.head = new DOMElement(
      "div",
      this.children.part1.node,
      ["project-head", "flex", "space-between"],
      this.blockName + "-head"
    );
    this.children.title = new DOMElement(
      "span",
      this.children.head.node,
      ["project-title"],
      this.blockName + "-title",
      this.data.title
    );
    this.children.seeProject = new DOMElement(
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
      this.blockName + "-image",
      undefined,
      {style: `background-image: url(${this.data.image})`}
    );
    this.children.description = new DOMElement(
      "p",
      this.children.part1.node,
      ["project-description"],
      this.blockName + "-description",
      this.data.description
    );
  }
  listener() {
    this.node.addEventListener("click", () => {
      if (this.data.openSesame) {
        this.data.openSesame();
      } else {
        mainframe.openProject(this.data.url);
      }
    });
  }
}
