import * as React from "react";

 


export class TodoItem extends React.Component {
    render() {
        return (
            <li>
            <span style={{color:this.props.color}}>{this.props.name}</span>
                
                <button onClick={() => this.props.onRemove()}>x</button>
            </li>
        );
    }
}