// Font configuration using CSS variables with system fallbacks
// Google Fonts can be loaded via CSS link in production

export const inter = {
  variable: "--font-inter",
  className: "font-inter",
};

export const spaceGrotesk = {
  variable: "--font-display",
  className: "font-display",
};

export const playfair = {
  variable: "--font-serif",
  className: "font-serif",
};

// Font class string for html element
export const fontVariables = `${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`;
