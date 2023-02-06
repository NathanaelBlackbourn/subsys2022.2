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
    skills: string
    level: string
  }
  
  interface Skill {
    skill: string
    level: number
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

  interface ExperienceBlocks {
      educationBlock: ExperienceSection;
      experienceBlock: ExperienceSection;
  }

  interface ExperienceSection {
    title: string
    content: Experience[]
  }