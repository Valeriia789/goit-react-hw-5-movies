export const theme = {
  colors: {
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)',
    backgroundMain: 'hsl(230, 20%, 25%)',
    highlight: 'hsl(260, 20%, 40%)',
    purple: 'hsl(290, 100%, 80%)',
    muted: 'hsla(230, 20%, 0%, 20%)',

    secondary: 'rgb(211,211,211)',
    primary: 'rgb(187,153,255)',
    primaryOpacity: 'rgba(187,153,255,0.5)',
    blue: 'rgb(102, 153, 204)',
    blueOpacity: 'rgba(102,153,204,0.5)',
  },

  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  shadows: {
    text: '1px 1px 2px black, 1px 1px 2px black',
    textSecondary: '1px 1px 1px lightgrey, 1px 1px 1px lightgrey',
    light: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    pink: ' 1px 1px 40px 10px rgba(187,153,255,0.5);',
    blue: '1px 1px 40px 10px rgba(102,153,204,0.8);',
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
};
