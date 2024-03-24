import parse from "html-react-parser";

/* eslint-disable react/prop-types */
import styled from "styled-components";

import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

import { TitleBar } from "../assets/styles";
import "highlight.js/styles/atom-one-light.css";

const PreviewerBox = styled.div`
  width: 100%;
  @media (min-width: 850px) {
    width: 800px;
  }
`;
const PreviewContainer = styled.div`
  width: 100%;
  height: calc(auto - 2rem);
  padding: 2rem 1rem;
  background-color: var(--light-main-color);
  border: 1px solid var(--very-dark-main-color);
  box-shadow: 1px 1px 5px 2px var(--dark-main-color);
  line-height: 1.5;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > h1 {
    border-bottom: 2px solid var(--darker-main-color);
  }
  & > h2 {
    border-bottom: 1px solid var(--darker-main-color);
  }
  & > blockquote {
    border-left: 3px solid var(--darker-main-color);
    color: var(--darker-main-color);
    padding-left: 5px;
    margin-left: 25px;
  }
  & > p > code,
  & > code {
    background-color: white;
    padding: 3px;
    font-size: 0.9rem;
    font-weight: bold;
  }
  & > pre {
    background-color: white;
    line-height: 1.2;
    font-size: 0.9rem;
    font-weight: bold;
  }
  & > p > img {
    display: block;
    width: 90%;
    margin: 1rem auto 0;
  }
  & > table {
    width: auto;
    table-layout: auto;
    border: 2px solid var(--darker-main-color);
    border-collapse: collapse;
    text-align: center;
  }
  & > table > thead > tr > th,
  & > table > tbody > tr > td {
    border: 2px solid var(--darker-main-color);
    padding-left: 5px;
  }
  & > ul,
  & > ol,
  & > ul > li > ul,
  & > ol > li > ol,
  & > ul > li > ul > li > ul,
  & > ol > li > ol > li > ol,
  & > ul > li > ul > li > ul > li > ul,
  & > ol > li > ol > li > ol > li > ol {
    padding-left: 2.5rem;
  }
`;

const Previewer = ({
  text,
}) => {
  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  marked.use({ breaks: true });
  const styledText = text.replace(/\n```([\s\S]*?)\n```/g, (match, code) => {
    return `\n\`\`\`javascript${code}\n\`\`\``;
  });

  return (
    <>
        <PreviewerBox>
          <TitleBar>
            <p>Previewer</p>
          </TitleBar>
          <PreviewContainer id="preview">
            {parse(marked.parse(styledText))}
          </PreviewContainer>
        </PreviewerBox>
    </>
  );
};

export default Previewer;