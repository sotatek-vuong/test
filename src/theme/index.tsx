import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';

// const defaultTheme = createTheme();

interface ThemeDesignColors {
  status: {
    green: React.CSSProperties['color'];
    red: React.CSSProperties['color'];
  };
  border: {
    '1': React.CSSProperties['color'];
  };
  bg: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
    '3': React.CSSProperties['color'];
  };
  content: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
    '3': React.CSSProperties['color'];
    '4': React.CSSProperties['color'];
  };
  icon: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
  };
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    custom: ThemeDesignColors;
  }
  interface ThemeOptions {
    custom: ThemeDesignColors;
  }
}

const custom: ThemeDesignColors = {
  status: {
    red: '#CE1717',
    green: '#10A342',
  },
  border: {
    '1': '#383C43',
  },
  bg: {
    '1': '#151515',
    '2': '#202020',
    '3': '#383C43',
  },
  content: {
    '1': '#ffffff',
    '2': '#999999',
    '3': '#4F4F4F',
    '4': '#151515',
  },
  icon: {
    '1': '#888888',
    '2': '#ffffff',
  },
};
const common = {
  black: '#141414',
  white: '#fff',
};

const theme = createTheme({
  custom,
  palette: {
    type: 'dark',
    background: {
      default: common.black,
    },
    /**
     * createTheme only requires main color
     * and it will automatically generate dark
     * and contrastText color for you
     */
    primary: {
      main: '#FFD610',
    },
    secondary: {
      main: '#7B61FF',
    },
    common,
    divider: custom.border[1],
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
  },
  shadows: Array(25).fill('none') as Shadows,
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiContainer: {
      maxWidth: 'lg',
      fixed: true,
    },
    MuiDialog: {
      maxWidth: 'sm',
      fullWidth: true,
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      size: 'small',
    },
    MuiToolbar: {
      disableGutters: true,
    },
    MuiLink: {
      underline: 'none',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },
    MuiButton: {
      root: {
        borderRadius: 24,
        textTransform: 'none',
        fontWeight: 'bold',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
    MuiChip: {
      label: {
        fontWeight: 'bold',
      },
    },
    MuiFormLabel: {
      asterisk: {
        color: custom.status.red,
      },
      root: {
        color: common.white,
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 16,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '24px 40px',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '8px 40px 40px',
      },
    },
  },
});

export default responsiveFontSizes(theme);
