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
      ["project-block"],
      project.title.split(" ").join("-") + "-block"
    );
    this.data = project;
    this.blockName = this.data.title.split(" ").join("-");
    this.appendChildren();
    this.addListener();
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
      ["block-part-2"],
      this.blockName + "-part-2"
    );
    this.children.title = new DOMElement(
      "h1",
      this.children.part1.node,
      ["project-title"],
      this.blockName + "-title",
      this.data.title
    );
    this.children.seeProject = new DOMElement(
      "p",
      this.children.part1.node,
      ["see-project", "link"],
      this.blockName + "-see"
    );
    this.children.seeProjectText = new DOMElement(
      "span",
      this.children.seeProject.node,
      [],
      "",
      "See project"
    );
    this.children.seeProjectArrows = new DOMElement(
      "div",
      this.children.seeProject.node,
      [],
      "",
      arrowSVG
    );
    this.children.imageContainer = new DOMElement(
      "div",
      this.children.part2.node,
      ["image-container"],
      this.blockName + "-image",
      undefined,
      {style: `background-image: url(${this.data.image})`}
    );
    this.children.description = new DOMElement(
      "p",
      this.children.part2.node,
      ["project-description"],
      this.blockName + "-description",
      this.data.description
    );
  }
  public addListener() {
    if (this.data.openSesame) {
      const handler = () => {
        this.data.openSesame!(this);
        this.node.removeEventListener("click", handler);
      };
      this.node.addEventListener("click", handler);
    } else {
      this.node.addEventListener("click", () => {
        mainframe.openProject(this.data.url);
      });
    }
  }
}
