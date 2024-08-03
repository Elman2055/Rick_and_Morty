import Link from "next/link";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <header>
        <Link href={"/"}>
          <h2>Rick & Morty</h2>
        </Link>
        <nav className="headerNavigation">
          <Link href={"/episodes"}>
            <h4>Episodes</h4>
          </Link>
          <Link href={"/locations"}>
            <h4>Locations</h4>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
