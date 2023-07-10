import Helmet from "react-helmet";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Manga Mogul</title>
    </Helmet>
  );
};

export default HelmetTitle;
