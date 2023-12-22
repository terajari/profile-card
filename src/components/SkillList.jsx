import React from 'react'
import Skill from './Skill';

const skills = [
    {
      skill: "HTML+CSS",
      level: "beginner",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "intermediate",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "beginner",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "beginner",
      color: "#60DAFB"
    },
    {
      skill: "Golang",
      level: "advanced",
      color: "#FF3B00"
    }
  ];

const SkillList = () => {
  return (
    <div className='skill-list'>
        {skills.map((skill) => (
            <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        ))}
    </div>
  )
}

export default SkillList