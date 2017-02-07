import * as React from "react";
import { ListItem } from "./ListItem";

export class List extends React.Component<{items: Array<any>}, undefined> {
    render() {
        const listItems = this.props.items.map((item, index) => {
            return <ListItem key={index} value={item} />;
        });
        return <ul>{listItems}</ul>;
    }
}