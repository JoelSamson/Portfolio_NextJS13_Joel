export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://www.linkedin.com/in/joelsamson/",
            permanent: false,
        },
    };
};

const LinkedinRedirect = () => null;

export default LinkedinRedirect;
