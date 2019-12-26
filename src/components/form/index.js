import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as taskAction from "../../store/modules/task/actions";
import { Form, SubmitButton } from "./style";
class Index extends Component {
  state = {
    title: "",
    description: "",
    validForm: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { addTask } = this.props;
    const { title, description } = this.state;
    if (description === "") {
      this.setState({
        validForm: true
      });
      return;
    }

    const task = {
      title,
      description
    };
    this.setState({
      title: "",
      description: "",
      validForm: false,
      showform: false
    });
    addTask(task);
    this.componentWillUnmount();
  };

  componentWillUnmount() {
    this.props.history.push("/");
  }

  render() {
    const { title, description, validForm } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Titulo da task"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            value={description}
            placeholder="Descrição da task"
            onChange={e => this.setState({ description: e.target.value })}
          />
          {validForm ? <p>Preencha todos os campos.</p> : ""}
          <SubmitButton> Submit </SubmitButton>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(taskAction, dispatch);
export default connect(null, mapDispatchToProps)(Index);
