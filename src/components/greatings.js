import React, {Component} from 'react';

class welcome extends Component{
    execute(value) {
        alert(value)
    }
    render(){
        return (
            <div>
                <h1>{this.props.cname} to our Site</h1>
                <button onClick = {this.execute.bind(this, "Click ok to exit")}>Go To</button>
            </div>
        )
    }
}

export default welcome