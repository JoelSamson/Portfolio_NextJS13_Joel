import Button from "@/components/Button";
import { QUERIES } from "breakpoints";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Highlight from "../Highlight";
import Link from "../Link";


const Hero = () => {
    const scrollToContact = () => {
        const contact = document.getElementById("contact");
        contact!.scrollIntoView({ behavior: "smooth" });
    };
    const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const toRotate: string[] = ["Software Developer", "Web Developer", "Web Designer", "UI/UX Designer"];
  const period: number = 400;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i: number = loopNum % toRotate.length;
    let fullText: string = toRotate[i];
    let updatedText: string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return (
            <ContentWrapper>
    <Text>
        <Highlight>Hi, my name is</Highlight>
    </Text>
    <Name>Joel Samson.</Name>
    <SubText>- Web Developer & Marketing Manager</SubText>
    <h1>{`I am a`} 
        <SPAN className="txt-rotate" data-rotate='[ "Software Engineer", "Web Developer", "Full-Stack Developer", "AI & Automation Enthusiast" ]'>
            <SPAN className="wrap">{text}</SPAN>
        </SPAN>
    </h1>
    <Text>
        I’m a web developer and software engineer specializing in building scalable, high-performance web applications and integrating AI-driven solutions. I have developed a strong foundation in software engineering, cloud computing, and digital marketing through my work at <Highlight>National Water Service</Highlight> and <Highlight>The Salvation Army</Highlight>.  
        <br /><br />
        I earned my <Link
            href="https://www.gmu.edu"
            target="_blank"
            rel="noreferrer noopener"
        >
            <Highlight>Master’s degree in Computer Science</Highlight>
        </Link> from George Mason University and am always looking for innovative ways to optimize web platforms and enhance user experiences.
    </Text>
    <CallToAction onClick={scrollToContact}>
        Get In Touch
    </CallToAction>
</ContentWrapper>
    
    );
};

const ContentWrapper = styled.div`
    align-self: center;
    max-width: min-content;
    min-height: calc(100vh - 150px);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
    pointer-events: none;
`;

const Name = styled.h2`
    white-space: nowrap;
    font-size: calc(18 / 16 * 1rem);
    margin-bottom: -16px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(35 / 16 * 1rem);
        margin-bottom: -32px;
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(64 / 16 * 1rem);
        margin-bottom: -32px;
    }
`;

const SubText = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: calc(35 / 16 * 1rem);
    margin-bottom: 24px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(64 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(80 / 16 * 1rem);
    }
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.text.regular};
    font-weight: 400;
    margin-bottom: -4px;

    ${QUERIES.tabletAndUp} {
        margin-bottom: -8px;
    }
`;

const CallToAction = styled(Button)`
    margin-top: 32px;
    pointer-events: all;
`;

const SPAN = styled.span`
margin-top: 0px;
margin-bottom: 10px;
font-family: sans-serif;
font-size: 2rem;
background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;


export default Hero;
