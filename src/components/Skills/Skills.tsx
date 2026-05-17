import { skills } from '../../data/constants';
import {
  Container,
  Description,
  SkillCard,
  SkillImage,
  SkillItem,
  SkillList,
  SkillsContainer,
  SkillTitle,
  Title,
  Wrapper
} from './style';

const Skills = () => (
  <Container id="skills">
    <Wrapper $maxWidth="1100px">
      <Title>Skills</Title>
      <Description>
        Here are some of my skills on which I have been working on for the past 2 years.
      </Description>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillCard key={skill.title}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((item) => (
                <SkillItem key={`${skill.title}-${item.name}`}>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Wrapper>
  </Container>
);

export default Skills;
