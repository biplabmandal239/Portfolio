import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/biplabmandal.png';
import { Bio } from '../../data/constants';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation';
import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Highlight,
  Img,
  ResumeButton,
  SubTitle,
  TextLoop,
  Title
} from './style';

const HeroSection = () => (
  <div id="about">
    <HeroContainer>
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer id="Left">
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Highlight>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true
                }}
              />
            </Highlight>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume} target="display">
            Check Resume
          </ResumeButton>
        </HeroLeftContainer>
        <HeroRightContainer id="Right">
          <Img src={HeroImg} alt="Biplab Mandal portrait" />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  </div>
);

export default HeroSection;
