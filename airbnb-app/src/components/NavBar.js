import navLogo from "../components/images/airbnb-logo.png";

const NavBar = () => {
  return (
    <nav>
      <figure className={"nav-bg"}>
        <img src={navLogo} alt={"Logo for airbnb clone app."} />
      </figure>
    </nav>
  );
};
export default NavBar;
