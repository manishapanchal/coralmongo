import React, { useState } from "react";
import axios from "axios";
import ScreenLoader from "./ScreenLoader";
import {
  Form,
  Input,
  Title,
  Label,
  Button,
  FormGroup,
  FormContainer,
} from "./Style.style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [loading, setLoding] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      setLoding(true);
      e.preventDefault();
      const data = { email, password };
      // console.log("data = ", data);
      const res = await axios.post(
        "https://coralmango.com/api/react-test-auth",
        data
      );
      // console.log("res = ", res);
      setLoding(false);
      if (res?.data?.success) {
        console.log(res?.data?.authToken);
        localStorage.setItem("accessToken", res?.data?.authToken);
        navigate("/users");
      } else {
        alert("Invalid credentials");
      }
    } catch (e) {
      setLoding(false);
      console.log("error = ", e?.response);
      alert(e?.response?.data?.message);
    }
  };

  return (
    <FormContainer>
      {loading && <ScreenLoader />}
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='username'>Email: </Label>
          <Input
            type='email'
            id='username'
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password: </Label>
          <Input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button isLogin type='submit'>
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
