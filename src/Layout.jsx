import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import def from "ajv/dist/vocabularies/discriminator";


function Layout(){
    return(
        <>
        <Header />

        <Outlet />

        <footer>
            <p>Aystex kara ylni dzer footery</p>
        </footer>
        </>
    )
}

export default Layout