import { TitleBar } from "../assets/styles";
import styled from "styled-components";

const EditorBox = styled.div`
  width: 100%;
  @media (min-width: 850px) {
    width: 800px;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 8px 5px;
  background-color: var(--light-main-color);
  box-shadow: 1px 1px 5px 2px var(--dark-main-color);
  border: 1px solid var(--very-dark-main-color);
  outline: none;
  resize: vertical;
  overflow-y: auto;
  font-size: 14px;
`;

const Editor = ({
  text,
  setText,
}) => {
  const handleChange = (event) => setText(event.target.value);
  return (
    <div>
      <EditorBox>
        <TitleBar>
          <p>Editor</p>
        </TitleBar>
        <StyledTextArea id="editor" name="editor" value={text} onChange={handleChange} />
      </EditorBox>
    </div>
  );
};

export default Editor;