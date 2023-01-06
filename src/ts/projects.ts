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
      ["project-block", "alternate", "flex"],
      "project-" + i
    );
    this.projNum = i;
    this.blockName = "project-" + i;
    this.init(i);
  }
  async init(i: number) {
    this.content = await this.getContent(i);
    this.addChildren();
    this.getImage(i);
    this.listener(i);
  }
  async getContent(i: number) {
    return await fetch("../work/" + i + "/project-info.json").then((response) =>
      response.json()
    );
  }
  addChildren() {
    this.children.part1 = new ProjectChild(
      "div",
      this.node,
      ["project-part"],
      this.blockName + "-part-1",
      false
    );
    this.children.part2 = new ProjectChild(
      "div",
      this.node,
      ["project-part"],
      this.blockName + "-part-2",
      false
    );
    this.children.part1.head = new ProjectChild(
      "div",
      document.getElementById(this.blockName + "-part-1"),
      ["project-head", "flex", "space-between"],
      this.blockName + "-head",
      false
    );
    this.children.part1.head.date = new ProjectChild(
      "span",
      document.getElementById(this.blockName + "-head"),
      ["project-date"],
      this.blockName + "-date",
      this.content.date
    );
    this.children.part1.head.title = new ProjectChild(
      "span",
      document.getElementById(this.blockName + "-head"),
      ["project-title"],
      this.blockName + "-title",
      this.content.title
    );
    this.children.part1.seeProject = new ProjectChild(
      "span",
      document.getElementById(this.blockName + "-head"),
      ["see-project"],
      this.blockName + "-see",
      "see project"
    );
    this.children.part1.imageContainer = new ProjectChild(
      "div",
      document.getElementById(this.blockName + "-part-1"),
      ["image-container"],
      this.blockName + "-image",
      false
    );
    this.children.part1.description = new ProjectChild(
      "p",
      document.getElementById(this.blockName + "-part-1"),
      ["project-description"],
      this.blockName + "-description",
      this.content.description
    );
    console.log(this.children);
  }
  getImage(i: number) {
    this.children.part1.imageContainer.node.style.backgroundImage = "url(../work/" + i + "/thumbnail.png)";
  }
  listener(i: number) {
    this.node.addEventListener("click", () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.src = "../work/" + i + "/index.html";
      }
      mainframe.toggleHeader();
    });
  }
}

class ProjectChild extends DOMElement {
  constructor(
    type: string,
    parent: HTMLElement | null,
    classList: string[],
    id: string,
    content: any
  ) {
    super(type, parent, classList, id);
    if (content) {
      this.node.innerHTML = content;
    }
  }
}
