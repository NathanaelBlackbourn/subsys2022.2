interface AboutContent {
  lang: string;
  introBlock: {
    name: string;
    introText: string;
  };
  pitchBlock: {
    title: string;
    pitch: string;
  };
  skillsBlocks: SkillsBlocks;
  experienceBlocks: ExperienceBlocks;
}

interface IntroBlock {
  name: string;
  introText: string;
}

interface SkillsBlocks {
  languagesSection: SkillsSection;
  skillsSection: SkillsSection;
  studySoonSection: SkillsSection;
}

interface SkillsSection {
  title: string;
  content: SkillContent;
}

interface SkillContent {
  [key: string]: SkillColumn;
}

interface SkillColumn {
  [key: string]: Skill;
}

interface Skill {
  skill: string;
  level?: number | string;
}

interface ExperienceBlocks {
  educationBlock: ExperienceSection;
}

interface ExperienceSection {
  title: string;
  content: Experience[];
}

interface Experience {
  organisation: string;
  roll: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
}

const CVData: AboutContent = {
  lang: "eng",
  introBlock: {
    name: "NATHANAEL<br>BACKBOURN",
    introText: "FRONT END DEVELOPER LIVING IN GOTHENBURG, SWEDEN",
  },
  pitchBlock: {
    title: "I AM",
    pitch:
      "A visually oriented person who likes to think systematically, to build and to collaborate. I work rigorously and holistically. I'm from Britain and have lived in Sweden since 2020.",
  },
  skillsBlocks: {
    languagesSection: {
      title: "I SPEAK",
      content: {
        col1: {
          lang1: {
            skill: "English",
            level: "native",
          },
          lang2: {
            skill: "Swedish",
            level: "fluent",
          },
          lang3: {
            skill: "Spanish",
            level: "fluent",
          },
        },
      },
    },
    skillsSection: {
      title: "I WORK WITH",
      content: {
        col1: {
          skillBlock1: {
            skill: "HTML",
            level: 80,
          },
          skillBlock2: {
            skill: "CSS",
            level: 80,
          },
          skillBlock3: {
            skill: "SASS",
            level: 40,
          },
        },
        col2: {
          skillBlock1: {
            skill: "JavaScript",
            level: 60,
          },
          skillBlock2: {
            skill: "TypeScript",
            level: 40,
          },
        },
        col3: {
          skillBlock1: {
            skill: "React",
            level: 30,
          },
          skillBlock2: {
            skill: "Lit",
            level: 20,
          },
        },
        col4: {
          skillBlock1: {
            skill: "Adobe",
            level: 50,
          },
          skillBlock2: {
            skill: "Figma",
            level: 40,
          },
        },
      },
    },
    studySoonSection: {
      title: "SOON I WILL STUDY",
      content: {
        col1: {
          skill1: {
            skill: "Node",
          },
          skill2: {
            skill: "Express",
          },
          skill3: {
            skill: "REST-APIs",
          },
        },
        col2: {
          skill1: {
            skill: "MongoDB",
          },
          skill2: {
            skill: "Mongoose",
          },
          skill3: {
            skill: "Socket.IO",
          },
        },
      },
    },
  },
  experienceBlocks: {
    educationBlock: {
      title: "MY STUDIES",
      content: [
        {
          organisation: "Medieinstitutet",
          roll: "Front End Developer",
          startMonth: "09",
          startYear: "2022",
          endMonth: "05",
          endYear: "2024",
          description:
            "An in-depth vocational course designed to turn us into fully competent front end developers.",
        },
        {
          organisation: "Falmouth University",
          roll: "Graphic design BA Hons",
          startMonth: "09",
          startYear: "2011",
          endMonth: "07",
          endYear: "2014",
          description:
            "A degree highly focused on design process and conceptual thinking. At Falmouth I learned about typography, layout, printing techniques, web design, experience design, project management and much more. The pinnacle of my studies was collaborating on the design and production of all visual material for the final year fashion show in 2014.",
        },
      ],
    },
  },
};
