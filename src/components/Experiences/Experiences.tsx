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
                                src="images/nationalwaterservice.png"
                                alt="nationalwaterservice"
                            ></Image>
                            <DotPrimary>
                                <DotCore />
                            </DotPrimary>
                            <Connector />
                            <Info>
                                <MobileImage
                                    src="images/nationalwaterservice.png"
                                    alt="nationalwaterservice"
                                ></MobileImage>
                                <Time>Sep 2024 - Present</Time>
                                <Company>National Water Service</Company>
                                <Role>Web Developer/Marketing Manager</Role>
                                <Description>  

• Managed and updated WordPress content and administered plugin integrations, optimizing site functionality and
user experience
• Implemented multi-platform marketing strategies across various social platforms and CRMs, including
HubSpot email marketing, increasing customer engagement by 5%
• Administered security improvements on WordPress using Cloudflare and other tools, reducing vulnerabilities
and enhancing overall website protection by 50%
• Optimized website SEO using Google Analytics, Search Console, and HubSpot, increasing organic search traffic by 3%
• Developed comprehensive brand guidelines to ensure consistent branding across all platforms, utilizing Canva
and Photoshop for visual elements
• Created detailed company analytics reports using Google Analytics and HubSpot, providing insights for
data-driven marketing decisions and performance tracking to make a shift in sales decisions
• Managed Google Ads, Google Tag Manager, and social media platforms, creating daily content that
contributed to increased brand visibility and a measurable boost in sales
• Utilized business logic to integrate an AI-powered chatbot, training it to answer customer inquiries on all
business-related topics, improving response time and customer engagement.
• Managing <a href="nationalwaterservice.com">nationalwaterservice.com(redesigning)</a> & <a href="nationalplumbingandmechanical.com">nationalplumbingandmechanical.com(Completed)</a>
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <TimeLine />
                    <TimeLine />
                    <SlideUp>
                        <Item>
                        <Image
                                src="images/Salvation.png"
                                alt="Salvation"
                            ></Image>
                            <DotPrimary>
                                <DotCore />
                            </DotPrimary>
                            <Connector />
                            <Info>
                                <MobileImage
                                    src="images/Salvation.png"
                                    alt="Salvation"
                                ></MobileImage>
                                <Time>May 2024 - Sep 2024</Time>
                                <Company>The Salvation Army</Company>
                                <Role>Web Developer Intern</Role>
                                <Description>  
• Utilized HTML, CSS, and JavaScript to update and enhance content sections and layouts based on wireframes for salvationarmyusa.org<br></br><br></br>
• Deployed national campaign assets and additional site content, improving the website's user experience and engagement<br></br><br></br>
• Conducted thorough audits of site performance and user experience across internal sites, implementing findings to enhance overall usability<br></br><br></br>
• Collaborated with the Web Manager to identify new strategies and areas of improvement for national web development efforts<br></br><br></br>
• Assisted in the creation and optimization of digital assets using Photoshop and other photo editing software, ensuring adherence to organizational style guides<br></br><br></br>
• Developed and published engaging content on the national website, boosting site traffic and user interaction<br></br><br></br>
• Provided technical support and user assistance to salvationarmyusa.org and sub-site visitors, ensuring a seamless online experience<br></br><br></br>
• Attended webmaster field calls and website vendor calls, contributing valuable insights and solutions<br></br><br></br>
• Worked closely with the Web Manager and other team members to design and optimize both internal and external-facing websites<br></br><br></br>
• Demonstrated strong interpersonal and communication skills in a collaborative, fast-paced environment<br></br><br></br>
• Managed multiple projects and deadlines efficiently, delivering high-quality work under minimal supervision<br></br>
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <TimeLine />
                    
                    <SlideUp>
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
                                        <Time>Jan 2023 - May 2024</Time>
                                        <Company>Nexus 8 International</Company>
                                        <Role>Software Engineering Intern</Role>
                                        <Description>
                                        • Remodeled website with latest design practices resulting in 25% increase in traffic and improved user experience<br></br><br></br>
• Executed performance optimizations, slashing page load time by 40% using Caching, CDNS, image/code optimizations<br></br><br></br>
• Conceptualized wireframe-driven UI/UX enhancements, adjusting website usability and navigation for better experience<br></br>
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            
                        </Infos>
                    </Item>
                    </SlideUp>
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
                                • Implemented reusable modular components, lowering development time by 20% boosting project completion<br></br><br></br>
• Architected RESTful APIs, boosting backend throughput by 30% using a load balancer, also enhanced scalability<br></br><br></br>
• Conducted comprehensive unit testing and achieved a 95% code coverage, effectively reducing post-release bugs by 30%<br></br><br></br>
• Led API documentation, cutting 25% of dev time and enhancing project clarity with clear, concise communication<br></br><br></br>
• Formulated TypeScript migration strategy, converting .jsx files to .ts, enhancing codebase maintainability and scalability<br></br><br></br>
• Integrated ChatGPT API into bots, automating repetitive daily tasks, optimizing workflow efficiency<br></br>
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
                                        <Time>Aug 2022 - Dec 2023</Time>
                                        <Company>George Mason University</Company>
                                        <Role>Graduate Teaching Assistant</Role>
                                        <Description>
                                        
                                        • Guided 100+ students in fundamental CS concepts, enhancing their ability to write efficient, maintainable code by 15%<br></br><br></br>
• Delivered comprehensive instruction to students on the latest emerging technologies, simultaneously enhancing technicalskills and aligning the course syllabus with industry trends for a more relevant and forward-thinking curriculum<br></br>

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
• Boosted page load time by 25% through performance audits, eliminated render-blocking resources, and used lazy loading<br></br><br></br>
• Performed comprehensive UAT sessions, achieving a 95% stakeholder satisfaction rate and ensuring smooth deployment<br></br><br></br>
• Leveraged agile methodologies to adapt to changing project requirements and maintain flexibility throughout the SDLC<br></br>
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
