import './scss/app.scss'
import {Header} from "./component/Header/Header";
import {MainPage} from "./pages/MainPage";
import {Cart} from "./pages/Cart";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path={'/'}>
                    <MainPage/>
                </Route>
                <Route exact path={'/cart'}>
                    <Cart/>
                </Route>
            </div>
        </div>
    );
}

export default App;
