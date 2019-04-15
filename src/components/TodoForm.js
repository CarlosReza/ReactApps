import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            responsable: "",
            description: "",
            priority: "low"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }
    render() {
        return (
            <div className="card mt-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Título" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Descripción" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>Hight</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default TodoForm;