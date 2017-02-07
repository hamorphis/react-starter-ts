import * as React from "react";

export class ListItem extends React.Component<{value: any}, undefined> {
    render() { 
        const value = this.props.value !== null && this.props.value !== undefined ? this.props.value.toString() : "";
        return <li>{value}</li>;
    }
}