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
            Hello! I'm Joel Samson, a <Highlight>Web Developer and Marketing Manager at National Water Service </Highlight>with expertise in web technologies, analytics, and automation. I have developed a strong foundation in software engineering, cloud computing, and full-stack development through my Master&apos;s in Computer Science at George Mason University and hands-on industry experience.
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
       Throughout my career, I've led website redesigns, optimized SEO strategies, and implemented AI-driven automation. My experience at National Water Service, The Salvation Army, and Nexus 8 International has equipped me with expertise in React, NodeJS, WordPress, Google Analytics, and HubSpot, enabling me to drive impactful digital solutions.

I thrive in dynamic, collaborative environments where I can leverage my technical expertise to enhance user experience, website performance, and business growth. Whether it's developing high-performance web applications, managing multi-platform marketing strategies, or integrating AI-powered chatbots, I focus on delivering innovative and effective solutions.
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
