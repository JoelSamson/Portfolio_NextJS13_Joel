import GlobalStyles from "@/styles/globalStyles";
import ResetStyles from "@/styles/resetStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "theme";

export default function App({ Component, pageProps }: AppProps) {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<string>();

    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const activeTheme = theme === "light" ? LIGHT_THEME : DARK_THEME;

    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const scrollTop = ref.current?.scrollTop || 0;
        // only update if the scroll is more than 5px
        if (Math.abs(scrollTop - lastScrollTop) < 20) {
            return;
        }

        if (scrollTop > lastScrollTop) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    const debounce = (func: any, wait = 50, immediate = false) => {
        let timeout: any;
        return function () {
            // @ts-ignore
            let context = this,
                args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const [documentMounted, setDocumentMounted] = useState(false);
    // run after document mounted
    useEffect(() => {
        setDocumentMounted(true);
    }, []);

    if (documentMounted) {
        const body = document.querySelector("body");
        if (body) {
            body.style.backgroundColor = activeTheme.colors.background.regular;
            body.style.color = activeTheme.colors.text.regular;
        }
    }


    return (
        <div className="App" onScroll={debounce(handleScroll)} ref={ref}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="title"
                    property="og:title"
                    content="Joel Samson"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="I'm a full-stack engineer specializing in building highly accessible, human-centered applications for the web."
                />
                <meta
                    name="image"
                    property="og:image"
                    content="/images/joel.png"
                />
                <link rel="canonical" href="https://joelsamson.com" />
                <meta property="og:url" content="https://joelsamson.com" />
                <meta property="og:type" content="website" />

               
            </Head>

            <ThemeProvider theme={activeTheme}>
                {/* Basic OG tags */}
                <ResetStyles />
                <GlobalStyles />
                <Component
                    {...pageProps}
                    scrollDirection={scrollDirection}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
            </ThemeProvider>
        </div>
    );
}
