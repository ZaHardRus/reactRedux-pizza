import './scss/app.scss'
import {Header} from "./component/Header/Header";
import {MainPage} from "./pages/MainPage";
import {Cart} from "./pages/Cart";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path={'/'}>
                        <MainPage/>
                    </Route>
                    <Route exact path={'/cart'}>
                        <Cart/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
