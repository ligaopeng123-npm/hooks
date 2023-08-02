import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useAntdTableSelection } from "../src";

const App = () => {
    return (
        <useAntdTableSelection/>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
