import navLogo from "../images/airbnb-logo.png";

const NavBar = () => {
  return (
    <nav className={"nav-bg"}>
      <figure>
        <img src={navLogo} alt={"Logo for airbnb clone app."} />
      </figure>
    </nav>
  );
};
export default NavBar;
