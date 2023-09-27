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
                                • Engineered and developed website components, elevating product versatility and boosting user satisfaction by 15%<br></br><br></br>
• Implemented vital APIs, optimizing website performance and accelerating load times by 25%<br></br><br></br>
• Executed rigorous unit testing, resulting in a 98% reliability rate for project components<br></br>
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
                                        
                                        • Coordinate student skill development with weekly check-ins, assessments, and observations, yielding exceptional results<br></br><br></br>
• Manage 100+ assignments and bi-weekly course material contributions across two sections, enhancing course efficiency<br></br><br></br>
• Instruct students in emerging technologies, enhancing my skills while aligning the syllabus with industry trends<br></br>
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
                                        • Transformed website interface through modern design elements and features, leading to a 25% increase in traffic<br></br><br></br>
• Revamped outdated website, improving speed and seamless functionality, while introducing new features<br></br><br></br>
• Facilitated weekly project briefings to align teams on objectives and promote collaboration<br></br>
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
                                        • Collaborated to produce a multi-functional examination website, driving a 70% acceleration in exam systems<br></br><br></br>
• Developed responsive web designs, aligning with company standards and increasing speed and performance by 30%<br></br><br></br>
• Mentored and led a team of 5 interns to efficiently complete 50 weekly tasks<br></br>
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
