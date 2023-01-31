import Material from "./Material";
import Labor from "./Labor";
import Home from "./Home";
import { useAppContext } from "../context/AppProvider";

const NavBar = () => {
  const [app, setApp] = useAppContext();
  const page = app.page;
  const updateCurrent = (e) => {
    switch (e.target.id) {
      case "home":
        return setApp({ ...app, page: "home" });
      case "material":
        return setApp({ ...app, page: "material" });
      case "labor":
        return setApp({ ...app, page: "labor" });
      default:
        return page;
    }
  };

  const updatePage = (page) => {
    const ret =
      page === "home" ? (
        <Home />
      ) : page === "material" ? (
        <Material />
      ) : page === "labor" ? (
        <Labor />
      ) : (
        "error"
      );
    return ret;
  };

  return (
    <div>
      <nav className=" bg-gray-50 dark:bg-gray-700 ">
        <ul className="flex flex-row items-stretch space-x-1 text-sm font-medium">
          <li className=" block">
            <button
              className="p-3 hover:bg-slate-500 hover:text-base text-gray-900 dark:text-white hover:underline"
              type="button"
              id="home"
              onClick={updateCurrent}
            >
              Home
            </button>
          </li>
          <li className="block">
            <button
              className=" hover:bg-slate-500 p-3 hover:text-base text-gray-900 dark:text-white hover:underline"
              type="button"
              id="material"
              onClick={updateCurrent}
            >
              Material
            </button>
          </li>
          <li className="block">
            <button
              className="hover:bg-slate-500 p-3 hover:text-base text-gray-900 dark:text-white hover:underline"
              type="button"
              id="labor"
              onClick={updateCurrent}
            >
              Labor
            </button>
          </li>
        </ul>
      </nav>

      <div>
        <label>{updatePage(page)}</label>
      </div>
    </div>
  );
};
export default NavBar;
