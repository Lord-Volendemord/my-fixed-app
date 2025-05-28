import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Aystex kara ylni dzer footery</p>
      </footer>
    </>
  );
}

export default Layout;
