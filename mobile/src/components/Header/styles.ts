import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View<CustomThemeProps>`
  width: 100%;
  padding: ${props => props.theme.units.margin.xlg}px
    ${props => props.theme.units.margin.md}px
    ${props => props.theme.units.margin.md}px;

  background: ${props => props.theme.colors.primary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackArrowButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Title = styled.Text<CustomThemeProps>`
  text-align: center;
  overflow: hidden;
  font-family: ${props => props.theme.fonts.Poppins.semiBold};
  color: ${props => props.theme.colors.secondaryLight};
  font-size: ${props => props.theme.units.fontSize.sm}px;
  width: 80%;
`;

export const EmptySpace = styled.View`
  flex: 1;
`;
