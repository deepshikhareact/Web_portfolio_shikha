import { useContext } from "react";
import "../Styles/Header.scss";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../themeContext";

const Header = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  const tabsItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#links" },
  ];

  const themeButtons = [
    { value: "skyblue", color: "var(--blue-primary)" },
    { value: "green", color: "var(--green-primary)" },
    { value: "orange", color: "var(--orange-primary)" },
  ];
  const filteredThemeButtons = () => {
    return themeButtons.filter((item) => {
      return themeColor !== item.value;
    });
  };

  const newArr = filteredThemeButtons();

  const toggleTheme = (color) => {
    setThemeColor(color);
  };

  return (
    <header className="Header2">
      <div className="logo">
        <svg id="wing" width="40" height="40" viewBox="0 0 540 540" fill="none">
          <path
            id="path"
            d="M200 100 L200 400 C200 450 250 450 250 400 L250 150 C250 100 300 100 300 150 L300 400 C300 450 350 450 350 400 L350 100"
            fill="#D9D9D9"
          />
          {/* <path
            id="path"
            d="M28.7151 487.645C73.445 475.717 59.033 166.608 9.9999 95.9999C-40 24 134 96 134 96C134 96 140.293 489.748 134 488C129.684 486.801 57.8966 487.247 28.7151 487.645C27.8331 487.88 26.9281 488 26 488C10.9233 488 15.3519 487.828 28.7151 487.645Z"
            fill="#D9D9D9"
          /> */}
        </svg>
        <div className="themeBtn">
          <button>Theme</button>
          {newArr.map((item, index) => {
            if (themeColor === item.value) return;
            return (
              <p
                key={index}
                style={{ backgroundColor: item.color }}
                onClick={() => toggleTheme(item.value)}
              ></p>
            );
          })}
        </div>
      </div>
      <div className="navigations">
        {tabsItems.map((val, ind) => {
          return (
            <a href={val.link} aria-label={val.name} key={ind}>
              {val.name}
            </a>
          );
        })}
        <a
          href={"Deep_Shikha_Full_Stack.pdf"}
          aria-label="download deepshikha resume"
          className="resume"
        >
          Download Resume
        </a>
      </div>
      <Sidebar toggleTheme={toggleTheme} themeButtons={newArr} />
    </header>
  );
};

export default Header;
