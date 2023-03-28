import styled from 'styled-components';
import { getRandomHexColor } from 'components/RandomColor';

export const Container = styled.section`
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #09487c;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80px;
  height: 80px;
  background-color: ${getRandomHexColor};
  color: #ffffff;
  /* border: 1px solid white; */
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
