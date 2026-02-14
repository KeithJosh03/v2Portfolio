import { skills, SkillsListProps } from './skills';

export const getSkills = async (): Promise<SkillsListProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skills);
    }, 800); 
  });
};