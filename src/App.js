import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }

    state = {
        count: 0,
    };

    Add = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };

    Minus = () => {
        this.setState((current) => ({ count: current.count - 1 }));
    };

    componentDidMount() {
        console.log("component redered");
    }

    componentDidUpdate() {
        console.log("I just updated");
    }

    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }

    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.Add}>Add</button>
                <button onClick={this.Minus}>Minus</button>
            </div>
        );
    }
}

export default App;
