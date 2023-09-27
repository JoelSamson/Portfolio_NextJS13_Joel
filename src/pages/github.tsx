export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://github.com/JoelSamson",
            permanent: false,
        },
    };
};

const GithubRedirect = () => null;

export default GithubRedirect;
