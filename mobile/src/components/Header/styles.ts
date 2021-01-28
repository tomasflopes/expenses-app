import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View<CustomThemeProps>`
  padding: ${props => props.theme.units.margin.md}px;
  background: ${props => props.theme.colors.primary};
  padding-top: ${props => props.theme.units.margin.xlg}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.semiBold};
  color: ${props => props.theme.colors.secondaryLight};
  font-size: ${props => props.theme.units.fontSize.sm}px;
`;
