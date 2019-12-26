import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as taskAction from "../../store/modules/task/actions";
import { Container } from "./style";
import List from "../list/index";

class Index extends Component {
  state = {
    titleKanban: ["Todo", "Doing", "Testing", "Done", "Backlog"]
  };
  async componentDidMount() {
    //const { getAllTasks } = this.props;
    // getAllTasks();
  }

  render() {
    const { tasks } = this.props;
    const { titleKanban } = this.state;
    return (
      <Container>
        {titleKanban.map(title => (
          <List key={title} title={title} task={tasks} />
        ))}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(taskAction, dispatch);
export default connect(null, mapDispatchToProps)(Index);
