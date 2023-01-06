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
import TestUseDebounce from "./components/TestUseDebounce";
import TestUseThrottle from "./components/TestUseThrottle";
import TestUseZoom from "./components/TestUseZoom";
import TestUsePagination from "./components/TestUsePagination";
import TestUseVisibility from "./components/TestUseVisibility";
import TestUseBoolean from "./components/TestUseBoolean";
import TestUseReloadAfterStationary from "./components/TestUseReloadAfterStationary";
import TestUseThrottleAndMerge from "./components/TestUseThrottleAndMerge";


const App = () => {
    return (
        <React.Fragment>
            <Router basename={`/`}>
                <div className={`card`}>
                    <div className={`link`}>
                        <Link to="/useClock">useClock</Link>
                        <Link to="/usePoller">usePoller</Link>
                        <Link to="/useEasing">useEasing</Link>
                        <Link to="/useResize">useResize</Link>
                        <Link to="/useScale">useScale</Link>
                        <Link to="/useZoom">useZoom</Link>
                        <Link to="/useFetch">useFetch</Link>
                        <Link to="/useWorker">useWorker</Link>
                        <Link to="/useDebounce">useDebounce</Link>
                        <Link to="/useThrottle">useThrottle</Link>
                        <Link to="/useThrottleAndMerge">useThrottleAndMerge</Link>
                        <Link to="/usePagination">usePagination</Link>
                        <Link to="/useVisibility">useVisibility</Link>
                        <Link to="/useBoolean">useBoolean</Link>
                        <Link to="/useReloadAfterStationary">useReloadAfterStationary</Link>
                    </div>
                    <div className={'card-body'}>
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
                            <Route path="/useZoom">
                                <TestUseZoom/>
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
                            <Route path="/useDebounce">
                                <TestUseDebounce/>
                            </Route>
                            <Route path="/useThrottle">
                                <TestUseThrottle/>
                            </Route>
                            <Route path="/usePagination">
                                <TestUsePagination/>
                            </Route>
                            <Route path="/useVisibility">
                                <TestUseVisibility/>
                            </Route>
                            <Route path="/useBoolean">
                                <TestUseBoolean/>
                            </Route>
                            <Route path="/useReloadAfterStationary">
                                <TestUseReloadAfterStationary/>
                            </Route>
                            <Route path="/useThrottleAndMerge">
                                <TestUseThrottleAndMerge/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
