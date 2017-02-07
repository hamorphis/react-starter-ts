import * as React from "react";
import * as ReactDOM from "react-dom";

import { List } from "./components/List";

const items = [1, "string", true, undefined, null, new Date()];

ReactDOM.render(
    <List items={items}/>,
    document.getElementById("example")
);