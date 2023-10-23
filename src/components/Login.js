import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useChat } from "../context/ChatProvider";

const LoginContainer = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  width: 100%;

  & button {
    display: flex;
    padding: 10px 20px;
    border: none;
    border-radius: 60px;
    background: #003579;
    transition: 0.3s ease-in-out opacity, box-shadow;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  border: none;
  background: transparent;
  color: #424242;

  &::placeholder {
    color: #7b7b7b;
    font-size: 1em;
  }

  @media (max-width: 820px) {
    font-size: 0.7em;
  }
`;

const Login = () => {
  const inputRef = useRef(null);
  const { setUserName } = useChat();

  function handleSubmit(e) {
    e.preventDefault();

    setUserName(inputRef.current.value);
  }

  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "white",
          textAlign: "center",
          padding: "40px 25px",
          borderRadius: "10px",
        }}
      >
        <img width="125" src="./logo-ogtic.svg" />
        <div>
          <br />
          <h1 style={{ fontWeight: "500" }}>Bienvenido</h1>
          <br />
          <p style={{ fontWeight: "400", color: "#433E3E", fontSize: "16px" }}>
            ¡Bienvenido al Agente Virtual de Servicios Gubernamentales! Aquí, te
            proporcionaremos respuestas rápidas y precisas a tus preguntas sobre
            trámites, documentos, beneficios y más. Nuestra misión es hacer que
            tu interacción con el estado sea lo más sencilla posible.
            <br />
            <br />
            ¡Comienza a explorar los servicios gubernamentales de manera
            eficiente y sin complicaciones!
          </p>
          <br />
        </div>
        <LoginContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Introduzca un nombre de usuario"
            ref={inputRef}
          />

          <button>
            <AiOutlineArrowRight color="#fff" size="1.2em" />
          </button>
        </LoginContainer>
      </div>
    </div>
  );
};

export default Login;
