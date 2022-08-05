import React, { useState } from "react";
import { memo } from "_/utilities/memo";
import {
  Container,
  Container2,
  Container3,
  TextField,
  BtnLogin,
  Alert,
  StyledHome,
  LogoContainer,
  InputsWrapper,
  StyledForm,
} from "./styles";
import { Login, capexLogo } from "_/assets/images";

interface Props {
  className?: string;
}
enum AlertTexts {
  none,
  validate = "Please Fill Out The Field",
  account = "Account Not Found",
  access = "Access Denied",
}

function SignInComponent({ className }: Props): React.ReactElement {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alertUsernameText, setAlertUsernameText] = useState(AlertTexts.none);
  const [alertPasswordText, setAlertPasswordText] = useState(AlertTexts.none);
  const [alertText, setAlertText] = useState(AlertTexts.none);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedUserName = userName.trimStart().trimEnd();
    if (!password || !trimmedUserName) {
      if (!password) setAlertPasswordText(AlertTexts.validate);
      else setAlertPasswordText(AlertTexts.none);
      if (!trimmedUserName) setAlertUsernameText(AlertTexts.validate);
      else setAlertUsernameText(AlertTexts.none);

      return;
    } else {
      setAlertPasswordText(AlertTexts.none);
      setAlertUsernameText(AlertTexts.none);
      localStorage.setItem("username", userName);
      window.location.reload();
    }
  };

  return (
    <Container>
      <Container2>
        <span>CAPEX</span>
        <p>a destination for traders</p>
        <img src={Login || ""} alt="" />
      </Container2>
      <Container3>
        <img className="back" src={Login || ""} alt="" />
        <StyledForm onSubmit={handleLogin}>
          <LogoContainer>
            <img alt="Capex" src={capexLogo} />
            <span>
              Login to Your Account
              {alertText ? <Alert>{alertText}</Alert> : null}
            </span>
          </LogoContainer>
          <InputsWrapper>
            <TextField
              alertMode={alertUsernameText !== AlertTexts.none}
              alertMessage={alertUsernameText}
              activeBorderColor="1px solid #ffffff"
              label="Username"
              hint="Enter your username"
              id="usernameTxt"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <TextField
              alertMode={alertPasswordText !== AlertTexts.none}
              alertMessage={alertPasswordText}
              activeBorderColor="1px solid #ffffff"
              label="Password"
              id="passwordTxt"
              hint="Enter your password"
              value={password}
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <BtnLogin type="submit" className="px-5 mt-5">
              Login
            </BtnLogin>
          </InputsWrapper>
        </StyledForm>
      </Container3>
    </Container>
  );
}

export default memo(SignInComponent, StyledHome);
