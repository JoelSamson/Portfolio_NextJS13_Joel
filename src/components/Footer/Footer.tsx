import styled from "styled-components";
import styles from './Footer.module.css'
import classNames from "classnames";

export interface IProps {
    delegated?: any;
}

const Footer = ({ ...delegated }) => {
    return (
        <Wrapper>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerPolicy="no-referrer" />

            <div className="container">
                <div className={styles.socials}>
                    <a className={classNames(styles.instagram_icon, 'instagram_icon')} href="https://www.instagram.com/joelsamsonxd/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className={classNames(styles.github_icon, 'github_icon')} href="https://github.com/JoelSamson">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className={classNames(styles.codepen_icon, 'codepen_icon')} href="https://codepen.io/DragneelXD2000">
                        <i className="fab fa-codepen"></i>
                    </a>
                    <a className={classNames(styles.linkedin_icon, 'linkedin_icon')} href="https://www.linkedin.com/in/joelsamson/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className={classNames(styles.medium_icon, 'medium_icon')} href="https://medium.com/@joelsamson2014">
                        <i className="fab fa-medium"></i>
                    </a>
                </div>
            </div>
	
            Designed and Developed by <strong> Joel Samson</strong>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.primary};
    padding: 16px;
    text-align: center;
    font-size: calc(14 / 16 * 1rem);
`;




export default Footer;
