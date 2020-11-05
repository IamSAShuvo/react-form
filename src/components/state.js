import React, {Component} from 'react'

class store extends Component {
    constructor() {
        super();
        this.state = {
            name: "Salman Aziz Shuvo",
            age: "26",
            contacts: {
                email: "demo@gmail.com",
                cell: "0123456789",
                facebook: "facebook.com/someone"
            },
            count: 0
        }
    }
    changeValue() {
        this.setState({
            name: "Airin Akter",
            age: "19",
            contacts: {
                cell: "9876543210"
            }
        })
        alert("Changed");
    }
    // next() {
    //     this.setState({
    //         name:this.state.name[] + 1
    //     })
    // }
    increament() {
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.name}, {this.state.age}</h1>
                <h2>{this.state.contacts.cell}</h2>
                <button onClick = {() => this.changeValue()}>Change Value</button>
                {/* <button onClick = {() => this.next()}>Next</button> */}
                <h1>{this.state.count}</h1>
                <button onClick = {() => this.increament()}>increament</button>
            </div>
        )
    }
}

export default store