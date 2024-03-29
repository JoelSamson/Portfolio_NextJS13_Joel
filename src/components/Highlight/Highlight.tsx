import styled from "styled-components";

export interface IProps {
    delegated?: any;
}

const Highlight: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight:bold;
`;

export default Highlight;
