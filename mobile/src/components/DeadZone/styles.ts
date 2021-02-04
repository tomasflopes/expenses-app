import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View<CustomThemeProps>`
  height: ${props => props.theme.constants.DEADZONE_HEIGHT}px;
  background: ${props => props.theme.colors.primary};
  align-items: center;
`;

export const LogoContainer = styled.View<CustomThemeProps>`
  align-items: flex-start;
  justify-content: center;
`;

export const Slogan = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.big}px;
  color: ${props => props.theme.colors.primaryLight};
  position: absolute;
  top: ${props => props.theme.constants.DEADZONE_HEIGHT - 64}px;
  left: 24%;
`;
