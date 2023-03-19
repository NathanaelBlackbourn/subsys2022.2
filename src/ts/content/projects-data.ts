interface projectData {
  title: string;
  description: string;
  image: string;
  url: string;
  openSesame?: (block: ProjectBlock) => void;
  replaceListener?: (block: ProjectBlock) => void;
}

const projectsData: projectData[] = [
  {
    title: "FOOD FINDER",
    description:
      "A React app which makes recipe suggestions based on the ingredients in the user's pantry. Built in collaboration with other students at Medieinstitutet.",
    image: "./work/food-finder/thumbnail.png",
    url: "https://papaya-lamington-fca010.netlify.app/",
  },
  {
    title: "FROSTBITE FRENZY",
    description:
      "A two player game built with Typescript and p5 using OOP. The players compete against each other in a maze to collect as many keys as possible in a limited time. Players must try to avoid the monsters navigating the maze randomly and can collect 'powerups' for advantages in gameplay. This project was carried out in collaboration with other students at Medieinstitutet.",
    image: "./work/frostbite-frenzy/thumbnail.png",
    url: "./work/frostbite-frenzy/index.html",
    openSesame(block: ProjectBlock) {
      // Show text "This game requires a keyboard to play. Link continue." Over image element?
      const alertBox = new DOMElement(
        "div",
        block.children.imageContainer.node,
        [],
        "alert-box"
      );
      const alertMessage = new DOMElement(
        "p",
        alertBox.node,
        [],
        "alert-message",
        "This game requires a keyboard to play. "
      );
      const clickContinue = new DOMElement(
        "span",
        alertMessage.node,
        ["link"],
        "click-continue"
      );
      const continueText = new DOMElement(
        "span",
        clickContinue.node,
        [],
        "",
        "Continue"
      );
      const continueArrow = new DOMElement(
        "div",
        clickContinue.node,
        [],
        "",
        arrowSVG
      );
      clickContinue.node.addEventListener(
        "click",
        (e) => {
          mainframe.openProject("./work/frostbite-frenzy/index.html");
          alertBox.removeMe();
          e.stopPropagation();
          block.addListener();
        },
        {
          once: true,
        }
      );
      // Cross to exit?
    },
  },
  {
    title: "THE CRATER",
    description:
      "Response to a brief at Medieinstitutet. A text based game played by typing commands into an text input field. This was an exercise in vanilla JavaScript.",
    image: "./work/the-crater/thumbnail.png",
    url: "./work/the-crater/index.html",
  },
  {
    title: "WEBSITE MODERNISATION",
    description:
      "An exercise in responsive web development at Medieinstitutet made in colaboration with Leon Björklund. A modernisation of the design and functionality of Craigslist.",
    image: "./work/website-modernisation/thumbnail.png",
    url: "./work/website-modernisation/index.html",
  },
  {
    title: "WEBSITE RECREATION",
    description:
      "Response to a brief at Medieinstitutet. Recreate a website as closely as possible. This was the first project we carried out on the course.",
    image: "./work/website-recreation/thumbnail.png",
    url: "./work/website-recreation/index.html",
  },
];
