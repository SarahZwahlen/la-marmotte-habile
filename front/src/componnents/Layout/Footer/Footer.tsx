import octocat from "../../../assets/github-icon-logo-black-and-white.png";

const Footer = () => {
  return (
    <footer>
      <h2>La Marmotte Habile</h2>
      <a href="https://github.com/SarahZwahlen">
        Site réalisé par Sarah Zwahlen
        <img src={octocat} />
      </a>
      <p>Tous droits réservés - 2023</p>
    </footer>
  );
};

export default Footer;
