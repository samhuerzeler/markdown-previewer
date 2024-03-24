import styled from "styled-components";

export const TitleBar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(--main-color);
  padding: 5px 10px;
  border-top: 1px solid var(--very-dark-main-color);
  border-left: 1px solid var(--very-dark-main-color);
  border-right: 1px solid var(--very-dark-main-color);
  box-shadow: 1px 1px 5px 2px var(--dark-main-color);
  display: grid;
  align-items: center;
  grid-template-columns: 1rem 1fr 1rem;
  column-gap: 10px;
  position: relative;
  z-index: 2;
`;