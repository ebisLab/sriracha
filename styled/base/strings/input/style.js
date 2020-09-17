import { css } from "styled-components";
import { cursorStyle, boxShadow, hoverShadow } from "../../../maps";

export default css`
  color: ${(props) => (props.color ? props.color : "auto")};
  background: ${(props) => (props.bg ? props.bg : "auto")};
  border: ${(props) =>
    props.border ? props.border : `0.2rem inset ${props.theme.gray6}`};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${props.theme.gray3}`};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "auto")};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${cursorStyle};
  }

  &:focus {
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${props.theme.blue1}`};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "auto")};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${cursorStyle};
  }
`;
