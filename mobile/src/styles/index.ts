import constants, { ConstantsType } from './constants';
import units, { UnitsType } from './units';
import fonts, { FontsType } from './fonts';
import { dark, light } from './colors';

interface Types {
  constants: ConstantsType;
  units: UnitsType;
  fonts: FontsType;
  colors: typeof light;
}

export default { constants, units, fonts, colors: light } as Types; //TODO: Implement theme switching
