module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '685px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        ctaRed: 'hsl(356, 100%, 66%)',
        ctaRedHover: 'hsl(355, 100%, 74%)',
        headings: 'hsl(208, 49%, 24%)',
        footerText: 'hsl(240, 2%, 79%)',
        bodyText: 'hsl(207, 13%, 34%)',
        footerBackground: 'hsl(240, 10%, 16%)',
      },
      borderRadius: {
        'large': '70px',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-mob': "url('/images/bg-pattern-intro-mobile.svg')",
        'hero-pattern-desktop': "url('/images/bg-pattern-intro-desktop.svg')",
      },
      maxWidth: {
        'xxl': '1920px',
      }
    },
  },
  plugins: [],
}