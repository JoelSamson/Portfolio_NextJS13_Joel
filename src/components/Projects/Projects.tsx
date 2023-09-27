import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import Project from "../Project/Project";
import ProjectGrid from "../ProjectGrid";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const PROJECTS = [
    {
        name: "Grievance System",
        techs: ["React", "Javascript", "NodeJS", "HTML", "CSS", "Redux", "Firebase"],
        description:
            "Empower Voices, Resolve Concerns: Introducing our Grievance Handling Solution - a cutting-edge platform that streamlines communication and addresses grievances effectively.",
        github: "https://github.com/JoelSamson/GrievanceSystem2020",
        website: "https://grievsys2020.web.app/",
        imgSrc: "/images/grievance.webp",
        type: "Featured Project",
    },
    {
        name: "Covid 19 - Tracker",
        techs: ["HTML", "CSS", "NodeJS", "API"],
        description:
            "A Covid1-9 global statistics tracker with information, news, number of emergency spaces available in local hospitals and statistical data.",
        github: "https://github.com/JoelSamson/GrievanceSystem2020",
        website: "https://covid19-trackinfo.web.app/",
        imgSrc: "/images/covid.png",
        type: "Featured Project",
    },
    {
        name: "GMU Survey Page",
        techs: [
            "HTML", "CSS", "Javascript", "AWS for Hosting testing S3", "Netlify", "Bootstrap"
        ],
        description: "Overview:The George Mason University 2022 New Student Campus Visit Survey Page is a web-based application designed to collect valuable data and feedback from prospective and incoming students who visited the campus during the year 2022. This project aims to enhance the universitys understanding of the campus visit experience, improve future tours, and cater to the specific needs and preferences of new students.",
        github: "https://github.com/BhandarkarPawan/refriendo",
        website: "https://mason.gmu.edu/~jsamson6/survey.html",
        imgSrc: "/images/survey.png",
        type: "Side Project",
    },
    {
        name: "GMU Computer Science Department Page",
    techs: ["HTML", "CSS", "Javascript", "AWS for Hosting testing S3", "Netlify", "Bootstrap"],
    description:
        "The GMU Computer Science Department Website Replica project aims to create a fully functional and visually appealing webpage that closely mimics the George Mason University (GMU) Computer Science Department's official website. This project will leverage various JavaScript libraries, including jQuery, Bootstrap, and more, to enhance the user experience and replicate the functionality of the original website.",
    github: "https://github.com/BhandarkarPawan/product-preview-card-component",
    website:
        "https://bhandarkarpawan-product-preview-card-component.netlify.app/",
    imgSrc: "/images/gmu_page.jpeg",
    type: "Side Project",
    },
    {
        name: "Portfolio",
    techs: ["HTML", "CSS", "Javascript","NextJS","React","NodeJS","Typescript","Javascript"],
    description:
        "In today's digital age, a well-crafted online portfolio is crucial for showcasing your skills, projects, and achievements to potential clients and employers. This project aims to take my existing portfolio website, built using simple HTML, CSS, and JavaScript, to the next level by upgrading it to a modern, dynamic, and highly responsive web application using Next.js and TypeScript.",
    github: "https://github.com/BhandarkarPawan/product-preview-card-component",
    website:
        "https://bhandarkarpawan-product-preview-card-component.netlify.app/",
    imgSrc: "/images/portfolio.png",
    type: "Side Project",
    },
    {
        name: "Pokedex",
        techs: ["HTML", "CSS", "Javascript", "PokeAPI", "Netlify"],
        description:
            "The Pokémon Explorer Web Application is a dynamic and interactive web-based platform designed to display and retrieve data for Pokémon species stored in the PokeAPI. This project serves as a practical demonstration of API integration and JavaScript programming skills, making it an excellent learning experience for those looking to delve into web development and data manipulation.",
            github: "https://github.com/JoelSamson/Pokdex",
        website:
            "https://pokedex-simulator.netlify.app/",
        imgSrc: "/images/pokedex.webp",
        type: "Side Project",
    },
    {
        name: "E-commerce Simulation - C",
        techs: ["C","SQL", "MySQL API"],
        description:
            "The C-Based E-commerce Interface with Inventory Management and Billing System is a software program to mimic a online retail operations. This project aims to make a interface using the c terminal , allowing them to sell products, add and manage inventory, and generate bills while automatically applying a 6% tax rate.",
        github: "https://github.com/JoelSamson/E-commerce-System-C",
        website: "https://github.com/JoelSamson/E-commerce-System-C",
        imgSrc: "/images/e-commerce.png",
        type: "Side Project",
    },
    {
        name: "Naruto Quotes",
        techs: ["HTML", "CSS", "JavaScript"],
        description:
            "In my free time, I decided to embark on an exciting project - creating a dedicated webpage to showcase my favorite quotes from the iconic anime series, Naruto. This project aims to bring together my love for the series and my web development skills to create an engaging and interactive experience for fellow Naruto fans.",
        github: "https://github.com/JoelSamson/Naruto-Inspirational-Quotes",
        website: "https://naruto-inspirational-quotes.netlify.app/",
        imgSrc: "/images/naruto-quote.webp",
        type: "It's Something",
    },
];

const Projects: React.FC = () => {
    return (
        <Wrapper id="projects">
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Things I've Built" side="left" />
                </SlideUp>
                <Project project={PROJECTS[0]} side="left" />
            </MaxWidthWrapper>
            <Project project={PROJECTS[1]} side="right" />

            <ProjectGrid projects={PROJECTS.slice(2)} />
        </Wrapper>
    );
};

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

const Title = styled(SectionTitle)``;
export default Projects;
