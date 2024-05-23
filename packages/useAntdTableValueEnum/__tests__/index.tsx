import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useAntdTableValueEnum } from "../src";

const App = () => {
    return (
        <useAntdTableValueEnum/>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
