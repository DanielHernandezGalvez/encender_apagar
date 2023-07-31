import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const ContainerContact = styled.div`
  padding: 50px;
  /* background-color: #e6e6e6; */
 /* margin-top: -50%; */
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;

const ContainerForm = styled.div`
  max-width: 700px;
  border-radius: 20px;
  box-shadow: 0 0 12px rgb(0 0 0 / 16%);
  padding: 30px;
  margin: 0 auto;
  background-color: #e6e6e6;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
`;

const Form = styled.form`
  box-sizing: border-box;
`;

const InputForm = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #4c5268;
  background-color: transparent;
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  color: #4c5268;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  color: #4c5268;
  border: 2px solid #4c5268;
  background-color: transparent;
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

const Button = styled.button`
  color: #e6e6e6;
  background-color: #e3b041;
  padding: 10px 40px;
  border-radius: 20px;
  border: none;
  margin: 15px 0;
  font-weight: 700;
  cursor: pointer;
  width: 150px;
  text-transform: uppercase;

  &:hover {
    background-color: #25c27d;
    transform: scale(1.05);
    color: #1a1a1a;
  }
`;

const TextSucces = styled.p`
  color: #25c27d;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;
const TextError = styled.p`
  color: #ff0000;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;
const Contacto = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emptyInputs, setEmptyInputs] = useState(false);
  const [succesMessage, setSuccesMessage] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);

  const form = useRef();

  const onSubmit = (e) => {
    // evitar que se recargue
    e.preventDefault();

    // validar
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === ""
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccesMessage(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        );
    }
  };

  return (
    <ContainerContact>
      <Title>Contactn me</Title>

      <ContainerForm>
        {succesMessage ? (
          <TextSucces>Enviado correctamente</TextSucces>
        ) : (
          <Form onSubmit={onSubmit} ref={form}>
            <InputForm
              placeholder="Nombre"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <InputForm
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <TextArea
              placeholder="Escribe tu mensaje"
              rows="6"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        )}
        {emptyInputs && <TextError>Campos incompletos</TextError>}
        {errorSendForm && (
          <TextError>Error de envío, intentar más tarde</TextError>
        )}
      </ContainerForm>
    </ContainerContact>
  );
};

export default Contacto;
