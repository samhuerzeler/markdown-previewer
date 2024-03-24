import { useState } from "react";
import styled from "styled-components";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { initialText } from "./text-md";

import "./App.css";

const AppDiv = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;
`;

const App = () => {
  const [text, setText] = useState(initialText);

  return (
    <main>
      <AppDiv>
        <Editor text={text} setText={setText} />
        <Previewer text={text} />
      </AppDiv>
    </main>
  );
};

export default App;