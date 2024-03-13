import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainComponent } from "../MainComponent/MainComponent";

function AppWrapperComponent () {
    return(
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}

export {AppWrapperComponent}