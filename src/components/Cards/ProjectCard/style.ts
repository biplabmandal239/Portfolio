import styled from 'styled-components';
import { media, radii, sharedShadows } from '../../../styles/theme';

export const Card = styled.button`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: ${radii.sm};
  box-shadow: ${sharedShadows.elevated};
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  border: 0;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${sharedShadows.elevatedHover};
    filter: brightness(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: ${radii.sm};
  box-shadow: ${sharedShadows.image};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => `${theme.primary}15`};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => `${theme.textSecondary}80`};

  ${media.tablet} {
    font-size: 10px;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => `${theme.textSecondary}99`};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${sharedShadows.soft};
  border: 3px solid ${({ theme }) => theme.card};
`;
