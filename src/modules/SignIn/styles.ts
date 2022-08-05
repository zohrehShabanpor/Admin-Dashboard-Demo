import styled from "@emotion/styled/macro";
import { TextInput, Button } from "_/components";
import { colors } from "_/constants";
import { withStyle } from "_/utilities";
export const MainColumn = styled.div``;

export const TextField = withStyle(
  TextInput,
  styled.div`
    width: 100%;
    .container {
      width: 100%;
      height: 45px;
      border: 1px solid ${colors.DarkGunmetal60};
      border-radius: 4px;
      padding: 3px 15px;
    }

    & button {
      & svg {
        width: 16px;
        height: 16px;
        & path {
          fill: ${colors.Platinum100};
        }
      }
    }

    & input {
      font-size: 14px;
      &:focus {
        color: ${colors.Platinum100};
        ::placeholder {
          color: ${colors.Platinum100};
        }
      }
      ::placeholder {
        font-size: 14px;
      }
    }

    @media (max-width: 576px) {
      .container {
        background-color: transparent;
        & input {
          background-color: transparent;
        }
      }
    }
  `
);

export const BtnLogin = withStyle(
  Button,
  styled.div`
    width: 100% !important;
    background: ${colors.Sunray100};
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
  `
);

export const Alert = styled.div`
  text-align: center;
  color: ${colors.CoralRed100};
  font-size: 14px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  & img {
    width: 80px;
  }
  & span {
    font-weight: 600;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  row-gap: 40px;
  & label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 14px;
    color: ${colors.Platinum60};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Container2 = styled.div`
  width: 50%;
  color: ${colors.Platinum100};

  & img {
    position: absolute;
    object-fit: cover;
    width: 50%;
    height: 100%;
    top: 0;
    z-index: 1;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(32, 34, 41, 0)),
      to(rgba(32, 34, 41, 0.4))
    );
  }

  & span {
    position: absolute;
    font-size: 64px;
    font-weight: 700;
    z-index: 10;
    left: 0;
    width: 50%;
    text-align: center;
    top: calc(50% - 120px);
    margin: 0;
    font-family: Kalameh !important;
  }

  & p {
    position: absolute;
    font-size: 32px;
    font-weight: 500;
    z-index: 10;
    left: 0;
    width: 50%;
    text-align: center;
    top: calc(50% - 30px);
    margin: 0;
    font-family: Kalameh !important;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Container3 = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  & .back {
    display: none;
  }
  @media (max-width: 576px) {
    width: 100% !important;
    padding: 0 10px;

    & .back {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      -webkit-mask-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(rgba(32, 34, 41, 0)),
        to(rgba(32, 34, 41, 0.4))
      );
      z-index: 3;
      top: 0;
      left: 0;
      opacity: 1 !important;
    }
    & * {
      z-index: 4;
      opacity: 0.9;
    }
  }
`;

export const Container4 = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  color: ${colors.Platinum60};
  width: 100%;
`;

export const StyledHome = styled.div``;
