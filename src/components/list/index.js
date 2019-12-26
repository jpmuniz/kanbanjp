import React from "react";

import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";
import Card from "../card/index";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function List({ tasks, title }) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
        <Link to="Form">
          <MdAdd size={24} color="fff" />
        </Link>
      </header>
      <ul>
        {tasks.map(task =>
          task.message.title.toUpperCase() === title.toUpperCase() ? (
            <Card task={task} key={String(Math.random())} />
          ) : (
            ""
          )
        )}
      </ul>
    </Container>
  );
}

export default connect(state => ({
  tasks: state.task
}))(List);
