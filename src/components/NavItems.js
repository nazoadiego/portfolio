import { Link } from "react-router-dom";

const NavItems = () => {
  const toggleTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    <>
      <Link to="/portfolio-react">
        <h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
          Home
        </h2>
      </Link>

      <Link to="/about">
        <h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
          About
        </h2>
      </Link>

      <Link to="/projects">
        <h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
          Projects
        </h2>
      </Link>
      <button onClick={toggleTheme}>
        <h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
          DarkMode
        </h2>
      </button>
    </>
  );
};

export default NavItems;
