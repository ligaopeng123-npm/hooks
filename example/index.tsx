import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";
import TestUseClock from "./components/TestUseClock";
import TestUsePoller from "./components/TestUsePoller";
import TestUseEasing from "./components/TestUseEasing";
import TestUseResize from "./components/TestUseResize";
import TestUseScale from "./components/TestUseScale";
import TestUseFetch from "./components/TestUseFetch";
import TestUseWorker from "./components/TestUseWorker";

const App = () => {
    return (
        <React.Fragment>
            <Router basename={`/`}>
                <div className={`card`}>
                    <Link to="/useClock">useClock</Link>
                    <Link to="/usePoller">usePoller</Link>
                    <Link to="/useEasing">useEasing</Link>
                    <Link to="/useResize">useResize</Link>
                    <Link to="/useScale">useScale</Link>
                    <Link to="/useFetch">useFetch</Link>
                    <Link to="/useWorker">useWorker</Link>
                </div>
                <Switch>
                    <Route path="/useClock">
                        <TestUseClock/>
                    </Route>
                    <Route path="/usePoller">
                        <TestUsePoller/>
                    </Route>
                    <Route path="/useEasing">
                        <TestUseEasing/>
                    </Route>
                    <Route path="/useResize">
                        <TestUseResize/>
                    </Route>
                    <Route path="/useScale">
                        <TestUseScale/>
                    </Route>
                    <Route path="/useFetch">
                        <TestUseFetch/>
                    </Route>
                    <Route path="/useWorker">
                        <TestUseWorker/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
