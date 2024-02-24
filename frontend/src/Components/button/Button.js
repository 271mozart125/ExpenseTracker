import React from "react";
import styled from "styled-components";

function Button({ name, icon, onClick, bg, bp, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bp,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4sec ease-in-out;
`;

export default Button;
