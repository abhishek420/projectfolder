import React from "react";
import ReactDOM from "react-dom"
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="App" onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                {this.state.value}
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);