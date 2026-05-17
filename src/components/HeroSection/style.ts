import styled from 'styled-components';
import { gradients, layout, media, radii } from '../../styles/theme';

export const HeroContainer = styled.section`
  background: ${({ theme }) => theme.cardLight};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  ${media.desktop} {
    padding: 66px 16px;
  }

  ${media.mobile} {
    padding: 32px 16px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  inset: 50% auto auto 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  transform: translateX(-50%) translateY(-50%);

  ${media.desktop} {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${layout.maxContentWidth};

  ${media.desktop} {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  ${media.desktop} {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  gap: 12px;

  ${media.desktop} {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  ${media.mobile} {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  ${media.mobile} {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 68px;

  ${media.desktop} {
    text-align: center;
  }

  ${media.mobile} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 68px;

  ${media.desktop} {
    text-align: center;
  }

  ${media.mobile} {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.p`
  margin: 0 0 42px;
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => `${theme.textPrimary}95`};

  ${media.desktop} {
    text-align: center;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: ${radii.xl};
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: ${gradients.primary};
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
  }

  ${media.mobile} {
    padding: 12px 0;
    font-size: 18px;
  }
`;
