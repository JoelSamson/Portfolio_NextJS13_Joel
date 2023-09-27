import styled from "styled-components";
import dynamic from 'next/dynamic';
import { QUERIES } from "breakpoints";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
}

const MyMapIframe = ({ ...delegated }) => {
    return (
        <Wrapper>
            <SlideUp>
                    <ContraintedTitle label="I am currently in Fairfax attending GMU" side="left" />
            </SlideUp>
          <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=fairfax+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
        </Wrapper>
    );
};

const Wrapper = styled.div`
background-color: ${({ theme }) => theme.colors.background.dark};
padding: 32px 32px;
display: flex;
flex-direction: column;
gap: 32px;

${QUERIES.tabletAndUp} {
    padding: 64px 64px;
}
`;

export const ContraintedTitle = styled(SectionTitle)`
    width: 100%;
    margin-bottom: 32px;
    ${QUERIES.desktopAndUp} {
        max-width: 650px;
    }
`;

export default dynamic(()=>  Promise.resolve(MyMapIframe), {ssr: false,});
