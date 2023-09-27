import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url("fonts/Plus Jakarta Sans Variable.woff2") format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


html{
	max-width: 100%;
    overflow: hidden;
	scroll-behavior: smooth !important;

	@media(prefers-reduced-motion){
		scroll-behavior: auto !important;
	}

    --color-sticky-top: hsl(54, 65%, 68%);	
	--color-sticky-content: hsl(54, 84%, 71%);	


    --color-dark-primary: hsl(240deg 50.59% 61.55%);
    --color-dark-primary-hover: hsl(240,13%,5%);
    --color-dark-text-regular: hsl(0,0%,100%);
    --color-dark-text-light: hsl(0,0%,100%);
    --color-dark-text-dark: hsl(240,13%,5%);
    --color-dark-background-regular: hsl(240,13%,11%);
    --color-dark-background-dark: hsl(240,13%,5%);
    --color-dark-background-blur: hsla(240,13%,11%,0.75);
    --color-dark-background-light: hsl(240,13%,15%);
    --color-footer: hsl(214deg 6.93% 3.69%);
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    
  

    --color--light-dark-primary: #046380; /* Dark Green primary color */
    --color--light-dark-primary-hover: rgba(4, 99, 128, 0.9); /* Dark Green primary color on hover */
    --color--light-dark-text-regular: hsl(0, 0%, 0%);
    --color--light-dark-text-light:  hsl(202, 20%, 60%);
    --color--light-dark-text-dark: hsl(202, 92%, 38%);
    --color--light-dark-background-regular: hsl(0, 0%, 100%);
    --color--light-dark-background-dark: hsl(202, 42%, 91%);
    --color--light-dark-background-blur: hsla(0, 0%, 100%, 0.75);
    --color--light-dark-background-light:  hsl(202, 42%, 100%);
    --color--light-footer: hsl(0, 0%, 88%);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}


body {
	font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
	"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 800;
	margin-left: auto;
    margin-right: auto;
	width: 100%;
    overflow: hidden;

}

.App {
    overflow: auto;
    overflow-x: hidden;
} 

`;

export default GlobalStyles;
