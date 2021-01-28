const generalProps = {
  fonts: {
    Poppins: {
      light: 'Poppins_300Light',
      regular: 'Poppins_400Regular',
      medium: 'Poppins_500Medium',
      semiBold: 'Poppins_600SemiBold',
      bold: 'Poppins_700Bold'
    },
    Archivo: {
      regular: 'Archivo_400Regular',
      bold: 'Archivo_700Bold'
    }
  },
  constants: {
    DEADZONE_HEIGHT: 235,
    AVATAR_WIDTH: 120,
    BUTTON_HEIGHT: 64,
    DOT_WIDTH: 4,
    PROFILE_CONTAINER_HEIGHT: 72,
    LOGO_WIDTH: 350,
    LOGO_HEIGHT: 320
  },
  units: {
    margin: {
      tiny: 4,
      xsm: 8,
      sm: 16,
      md: 24,
      lg: 32,
      xlg: 40,
      xxl: 80
    },
    borderRadius: {
      sm: 4,
      md: 8
    },
    fontSize: {
      xsm: 12,
      sm: 13,
      md: 14,
      input: 16,
      big: 18,
      header: 20,
      bigHeader: 22
    }
  }
};

export const dark = {
  ...generalProps,
  // TODO: Choose dark theme color palete
  colors: {
    primary: '#000',
    primaryLight: '#000',
    primaryDark: '#000',
    secondary: '#000',
    secondaryLight: '#000',
    secondaryDark: '#000',
    inputText: '#000',
    inputBackground: '#000',
    background: '#000',
    black: '#000',
    confirm: '#000',
    cancel: '#000',
    textBase: '#000',
    textHeaders: '#000',
    disabledInputBackground: '#000',
    avatarOverlay: '#000'
  }
};

export const light = {
  ...generalProps,
  colors: {
    primary: '#42A5F5',
    primaryLight: '#9BE7FF',
    primaryDark: '#0077C2',
    secondary: '#E0E0E0',
    secondaryLight: '#fff',
    secondaryDark: '#8D8D8D',
    inputText: '#636363',
    inputBackground: '#dfdfdf',
    background: '#F6F6FE',
    black: '#000',
    confirm: '#04D361',
    cancel: '#E33D3D',
    textBase: '#1C415F',
    textHeaders: '#122839',
    disabledInputBackground: '#F8F8FA',
    avatarOverlay: 'rgba(0, 119, 194, 0.65)'
  }
};

type Theme = {
  fonts: {
    Poppins: {
      light: 'Poppins_300Light';
      regular: 'Poppins_400Regular';
      medium: 'Poppins_500Medium';
      semiBold: 'Poppins_600SemiBold';
      bold: 'Poppins_700Bold';
    };
    Archivo: {
      regular: 'Archivo_400Regular';
      bold: 'Archivo_700Bold';
    };
  };
  constants: {
    DEADZONE_HEIGHT: 235;
    AVATAR_WIDTH: 120;
    BUTTON_HEIGHT: 64;
    DOT_WIDTH: 4;
    PROFILE_CONTAINER_HEIGHT: 72;
    LOGO_WIDTH: 350;
    LOGO_HEIGHT: 320;
  };
  units: {
    margin: {
      tiny: 4;
      xsm: 8;
      sm: 16;
      md: 24;
      lg: 32;
      xlg: 40;
      xxl: 80;
    };
    borderRadius: {
      sm: 4;
      md: 8;
    };
    fontSize: {
      xsm: 12;
      sm: 13;
      md: 14;
      input: 16;
      big: 18;
      header: 20;
      bigHeader: 22;
    };
  };

  colors: {
    background: typeof dark.colors.background | typeof light.colors.background;
    primary: typeof dark.colors.primary | typeof light.colors.primary;
    primaryLight:
      | typeof dark.colors.primaryLight
      | typeof light.colors.primaryLight;
    primaryDark:
      | typeof dark.colors.primaryDark
      | typeof light.colors.primaryDark;
    secondary: typeof dark.colors.secondary | typeof light.colors.secondary;
    secondaryLight:
      | typeof dark.colors.secondaryLight
      | typeof light.colors.secondaryLight;
    secondaryDark:
      | typeof dark.colors.secondaryDark
      | typeof light.colors.secondaryDark;
    inputText: typeof dark.colors.inputText | typeof light.colors.inputText;
    inputBackground:
      | typeof dark.colors.inputBackground
      | typeof light.colors.inputBackground;
    black: typeof dark.colors.black | typeof light.colors.black;
    confirm: typeof dark.colors.confirm | typeof light.colors.confirm;
    cancel: typeof dark.colors.cancel | typeof light.colors.cancel;
    textBase: typeof dark.colors.textBase | typeof light.colors.textBase;
    textHeaders:
      | typeof dark.colors.textHeaders
      | typeof light.colors.textHeaders;
    disabledInputBackground:
      | typeof dark.colors.disabledInputBackground
      | typeof light.colors.disabledInputBackground;
    avatarOverlay:
      | typeof light.colors.avatarOverlay
      | typeof light.colors.avatarOverlay;
  };
};

export interface CustomThemeProps {
  theme?: Theme;
}
