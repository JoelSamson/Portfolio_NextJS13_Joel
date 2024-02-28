import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const Experiences: React.FC = () => {
    return (
        <Wrapper id="experience">
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Experiences" side="left" />
                </SlideUp>
                <Items>
                    <TimeLine />
                    <SlideUp>
                        <Item>
                        <Image
                                src="images/istari.png"
                                alt="Istari"
                            ></Image>
                            <DotPrimary>
                                <DotCore />
                            </DotPrimary>
                            <Connector />
                            <Info>
                                <MobileImage
                                    src="images/istari.png"
                                    alt="Istari"
                                ></MobileImage>
                                <Time>June 2023 - Aug 2023</Time>
                                <Company>Istari Digital</Company>
                                <Role>Software Engineer Intern</Role>
                                <Description>
                                    • Crafted reusable modular components, driving a 20% decrease in feature implementation time and boosting frontend<br></br><br></br>
                                    • Architected RESTful APIs, boosting backend by 30%, reducing response time by 15%, enhancing scalability<br></br><br></br>
                                    • Conducted comprehensive unit testing and achieved a 95% code coverage, effectively reducing post-release bugs by 30%<br></br><br></br>
                                    • Led API documentation, cutting 25% of dev time and enhancing project clarity with clear, concise communication<br></br><br></br>
                                    • Formulated TypeScript migration strategy, converting .jsx files to .ts, enhancing codebase maintainability and scalability<br></br><br></br>
                                    • Integrated ChatGPT API into bots, automating repetitive daily tasks, optimizing workflow efficiency<br></br><br></br>
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/george-mason-university.jpg"
                                alt="gmu"
                            ></Image>
                            <Connector />
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore />
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/george-mason-university.jpg"
                                            alt="gmu"
                                        ></MobileImage>
                                        <Time>Aug 2022 - Present</Time>
                                        <Company>George Mason University</Company>
                                        <Role>Graduate Teaching Assistant</Role>
                                        <Description>
                                        
                                        • Orchestrated and monitored student skill development through weekly check-ins, assessments, and keen observations, resulting in remarkable progress and achievement<br></br><br></br>
                                • Managed over 100 assignments and contributed to bi-weekly course materials across two sections, significantly improving course efficiency and ensuring a seamless learning experience<br></br><br></br>
                                • Delivered comprehensive instruction to students on the latest emerging technologies, simultaneously enhancing personal skills and aligning the course syllabus with dynamic industry trends for a more relevant and forward-thinking curriculum<br></br><br></br>
                                • Guided 100+ students in fundamental CS concepts, enhancing their ability to write efficient, maintainable code by 15%<br></br><br></br>
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            
                        </Infos>
                    </Item>
                    
                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/nexus8.jpeg"
                                alt="nexus8"
                            ></Image>
                            <Connector />
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore />
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/nexus8.jpeg"
                                            alt="nexus8"
                                        ></MobileImage>
                                        <Time>Dec 2023 - July 2023</Time>
                                        <Company>Nexus 8 International</Company>
                                        <Role>Software Engineering Intern</Role>
                                        <Description>
                                        • Orchestrated a website makeover by incorporating cutting-edge design elements and features, resulting in a remarkable 25% surge in website traffic<br></br><br></br>
                                        • Spearheaded a comprehensive overhaul of an antiquated website, enhancing both speed and functionality and introducing innovative features for an improved user experience<br></br><br></br>
                                        • Pioneered weekly project briefings, fostering alignment among teams on objectives and promoting a collaborative work environment, thereby enhancing overall project efficiency<br></br>
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            
                        </Infos>
                    </Item>
                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/freelance.png"
                                alt="quality"
                            ></Image>
                            <Connector />
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore />
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/freelance.png"
                                            alt="quality"
                                        ></MobileImage>
                                        <Time>Jan 2020 - Dec 2021</Time>
                                        <Company>Freelance Developer</Company>
                                        <Role>Web Developer</Role>
                                        <Description>
                                        • Contributed to student grievance, university, and examination portals, portfolios, and University Outreach websites<br></br><br></br>
• Enhanced website performance by 30% through full-stack development of responsive interfaces, meeting set standards<br></br><br></br>
• Performed comprehensive UAT sessions, achieving a 95% stakeholder satisfaction rate and ensuring smooth deployment<br></br><br></br>
• Leveraged agile methodologies to adapt to changing project requirements and maintain flexibility throughout the SDL<br></br><br></br>
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                        </Infos>
                    </Item>
                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/quality.jpeg"
                                alt="quality"
                            ></Image>
                            <Connector />
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore />
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/quality.jpeg"
                                            alt="quality"
                                        ></MobileImage>
                                        <Time>Dec 2019 - Jan 2020</Time>
                                        <Company>Quality Theorem</Company>
                                        <Role>Web Developer Intern</Role>
                                        <Description>
                                        • Achieved a 70% acceleration in exam systems by leading collaborative efforts to develop a cutting-edge, multi-functional examination website<br></br><br></br>
                                        • Enhanced user experience and system efficiency by designing responsive web interfaces in adherence to company standards, resulting in a 30% increase in speed and performance<br></br>
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                        </Infos>
                    </Item>
                </Items>
            </MaxWidthWrapper>
        </Wrapper>
    );
};

export const Role = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: calc(14 / 16 * 1rem);
    margin-bottom: 8px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(16 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(18 / 16 * 1rem);
    }
`;

const Items = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 64px;

    ${QUERIES.tabletAndUp} {
        gap: 80px;
    }
`;

const SlideUpFirm = styled(SlideUp)`
    flex-shrink: 0;
`;

const Item = styled.div`
    display: flex;
    align-items: top;
    position: relative;
`;

const TimeLine = styled.div`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.text.light};

    left: 24px;

    ${QUERIES.tabletAndUp} {
        left: 264px;
    }

    ${QUERIES.desktopAndUp} {
        left: 296px;
    }
`;

const DotPrimary = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid ${({ theme }) => theme.colors.text.light};
    outline: 1px ${({ theme }) => theme.colors.text.light} solid;
    outline-offset: 8px;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;

    margin: 8px;
    margin-top: 32px;
    margin-right: 24px;

    ${QUERIES.tabletAndUp} {
        margin: 84px 48px;
    }

    ${QUERIES.desktopAndUp} {
        margin: 84px 80px;
    }
`;

const DotSecondary = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;

    margin: 8px;
    margin-top: 32px;
    margin-right: 24px;

    ${QUERIES.tabletAndUp} {
        margin: auto 48px;
    }

    ${QUERIES.desktopAndUp} {
        margin: auto 80px;
    }
`;

const Connector = styled.div`
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 32px;
    left: 32px;
    top: 48px;

    ${QUERIES.tabletAndUp} {
        top: 100px;
        left: 200px;
        width: 64px;
    }

    ${QUERIES.desktopAndUp} {
        width: 96px;
    }
`;

const Bullet = styled.div`
    display: flex;
    align-items: top;
    position: relative;
`;

const DotCore = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 32px;

    ${QUERIES.tabletAndUp} {
        gap: 40px;
    }
`;

const Info = styled.div``;

const Time = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.light};
    text-transform: uppercase;
    font-size: calc(12 / 16 * 1rem);
`;

const Description = styled.p`
    font-weight: 400;
    max-width: 650px;
`;

export const Company = styled.h4`
    font-size: calc(21 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        font-size: calc(24 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(28 / 16 * 1rem);
    }
`;

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 64px;

    ${QUERIES.tabletAndUp} {
        padding: 64px 64px;
    }

    ${QUERIES.desktopAndUp} {
        gap: 32px;
    }
`;

const Image = styled.img`
    display: none;

    ${QUERIES.tabletAndUp} {
        display: initial;
    }

    height: 200px;
    width: 200px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const MobileImage = styled.img`
    display: initial;

    ${QUERIES.tabletAndUp} {
        display: none;
    }

    height: 100px;
    width: 100px;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled(SectionTitle)``;
export default Experiences;
