import Button from "@/components/Button/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH, QUERIES } from "breakpoints";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
    theme: "dark" | "light";
}

const About: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    theme,
    ...delegated
}) => {
    const downloadResume = () => {
        window.open("/files/resume.pdf", "_blank");
    };

    const aboutUrl =
        theme === "light" ? "images/Joel-light.png" : "images/Joel.png";
    const aboutUrlSmall =
        theme === "light"
            ? "images/Joel-light.png"
            : "images/Joel.png";

    return (
        <Wrapper {...delegated} id="about">
            <AboutMe>
    <SlideUp>
        <SectionTitle label={"About Me"} side={"left"} />
    </SlideUp>
    <SlideUp>
        <Description>

        Hello! I'm Joel, a passionate software developer with 2 years of experience spanning various domains. I recently completed my <Highlight>Master&apos;s in Computer Science at George Mason University</Highlight>, where I honed my skills in programming and collaborated on diverse projects. 
        </Description>
    </SlideUp>
    <SlideUp>
        <Description>
            <Highlight>&quot;How big would you dream, if you knew you couldn&apos;t fail?&quot;
-Robert Schuller</Highlight>
        </Description>
    </SlideUp>
    <SlideUp>
        <Description>
        I am deeply enthusiastic about software engineering and computer science, thriving in collaborative environments where innovation and creativity flourish. My internship experiences, including at <Highlight>Istari Digital and Nexus 8 International</Highlight>, have equipped me with hands-on experience in web development, utilizing technologies such as React, NodeJS, and TypeScript. I am particularly interested in roles related to <Highlight>software development, cloud computing, and full-stack development</Highlight>, where I can leverage my expertise to drive impactful solutions.
        </Description>
    </SlideUp>
    <SlideUp>
        <Download onClick={downloadResume}>
            Download Resume
        </Download>
    </SlideUp>
</AboutMe>

            <Picture>
                <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl} />
                <Source
                    media={MIN_WIDTH.tablet}
                    srcSet="images/Joel.png"
                />
                <Image src={aboutUrl} alt="Joel Samson" />
            </Picture>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    padding: 32px;
    padding-bottom: 0px;
    row-gap: 80px;
    grid-template-areas:
        "aboutme"
        "picture";

    ${QUERIES.tabletAndUp} {
        grid-template-areas: "picture aboutme";
        grid-template-columns: 1fr 1fr;
        column-gap: 0px;
        padding: 64px;
    }

    ${QUERIES.desktopAndUp} {
        column-gap: 80px;
        padding-bottom: 0px;
    }
`;

const AboutMe = styled.div`
    grid-area: aboutme;
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${QUERIES.tabletAndUp} {
        justify-self: start;
        max-width: min(400px, 100%);
    }
`;

const Description = styled.p`
    font-weight: 400;
`;

const Picture = styled.picture`
    grid-area: picture;
    justify-self: center;
    width: 300px;

    ${QUERIES.tabletAndUp} {
        width: min(50vw, 250px);
    }

    ${QUERIES.desktopAndUp} {
        justify-self: end;
        width: min(50vw, 500px);
    }
`;

const Source = styled.source``;

const Image = styled.img`
margin-bottom:50px`;

const Download = styled(Button)`
    align-self: start;
    margin-top: 32px;
`;


export default About;