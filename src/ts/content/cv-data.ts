interface AboutContent {
  lang: string;
  introBlock: IntroBlock;
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
}

interface SkillsSection {
  title: string;
  content: LangContent | SkillContent;
}

interface LangContent {
  row1: LangRow;
}

interface LangRow {
  lang1: Language;
  lang2: Language;
  lang3: Language;
}

interface SkillContent {
  row1: SkillRow;
  row2: SkillRow;
  row3: SkillRow;
  row4: SkillRow;
}

interface SkillRow {
  skillBlock1: Skill;
  skillBlock2: Skill;
  skillBlock3?: Skill;
}

interface Language {
  skill: string;
  level: string;
}

interface Skill {
  skill: string;
  level: number;
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
    introText: "I AM A FRONT END DEVELOPER<br>LIVING IN GOTHENBURG, SWEDEN",
  },
  skillsBlocks: {
    languagesSection: {
      title: "I SPEAK",
      content: {
        row1: {
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
        row1: {
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
        row2: {
          skillBlock1: {
            skill: "JavaScript",
            level: 60,
          },
          skillBlock2: {
            skill: "TypeScript",
            level: 40,
          },
        },
        row3: {
          skillBlock1: {
            skill: "React",
            level: 30,
          },
          skillBlock2: {
            skill: "Lit",
            level: 20,
          },
        },
        row4: {
          skillBlock1: {
            skill: "Adobe Creative Suite",
            level: 50,
          },
          skillBlock2: {
            skill: "Figma",
            level: 40,
          },
        },
      },
    },
  },
  experienceBlocks: {
    educationBlock: {
      title: "EDUCATION",
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