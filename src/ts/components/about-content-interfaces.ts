interface AboutContent {
    lang: string
    introBlock: IntroBlock
    skillsBlocks: SkillsBlocks
    experienceBlocks: ExperienceBlocks
  }
  
  interface IntroBlock {
    name: string
    title: string
    sliderText: string
  }

interface SkillsBlocks {
    languagesSection: SkillsSection
    skillsSection: SkillsSection
}

interface SkillsSection {
    title: string
    content: SkillsContent
}

interface SkillsContent {
    row: {
        [key: string]: Language | Skill
    }
}

  interface Language {
    skill: string
    level: string
  }
  
  interface Skill {
    skill: string
    level: number
  }

  interface ExperienceBlocks {
      educationBlock: ExperienceSection;
      experienceBlock: ExperienceSection;
  }

  interface ExperienceSection {
    title: string
    content: Experience[]
  }

  interface Experience {
    organisation: string
    roll: string
    startMonth: string
    startYear: string
    endMonth: string
    endYear: string
    description: string
  }