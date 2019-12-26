import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/header/Index";

function App() {
  return (
    <>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <GlobalStyle />
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </DndProvider>
      </Provider>
    </>
  );
}

export default App;
