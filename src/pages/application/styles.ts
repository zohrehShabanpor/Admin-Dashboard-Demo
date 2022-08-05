import styled from "@emotion/styled/macro";
import { css, SerializedStyles, Theme } from "@emotion/react/macro";
import color from "color";
import { colors } from "_/constants";

export function globalStyles(theme: Theme): SerializedStyles {
  return css`
    @font-face {
      font-style: normal;
      font-weight: 400;
      font-family: "Kalameh";
      src: local("Kalameh"),
        url("${process.env
            .PUBLIC_URL}/fonts/Kalameh/Kalameh(FaNum)-Regular.ttf")
          format("truetype");
    }
    @font-face {
      font-style: normal;
      font-weight: 700;
      font-family: "Kalameh";
      src: local("Kalameh"),
        url("${process.env.PUBLIC_URL}/fonts/Kalameh/Kalameh(FaNum)-Bold.ttf")
          format("truetype");
    }

    @font-face {
      font-style: normal;
      font-weight: 100;
      font-family: "Roboto";
      src: local("Roboto"),
        url("${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Thin.ttf")
          format("truetype");
    }

    @font-face {
      font-style: normal;
      font-weight: 300;
      font-family: "Roboto";
      src: local("Roboto"),
        url("${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Light.ttf")
          format("truetype");
    }

    @font-face {
      font-style: normal;
      font-weight: 400;
      font-family: "Roboto";
      src: local("Roboto"),
        url("${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Regular.ttf")
          format("truetype");
    }

    @font-face {
      font-style: normal;
      font-weight: 500;
      font-family: "Roboto";
      src: local("Roboto"),
        url("${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Medium.ttf")
          format("truetype");
    }

    @font-face {
      font-style: normal;
      font-weight: 700;
      font-family: "Roboto";
      src: local("Roboto"),
        url("${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Bold.ttf")
          format("truetype");
    }

    html {
      box-sizing: border-box;
      height: 100%;
      min-height: 0;
    }

    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }

    *,
    table {
      font-family: "Roboto", "Kalameh" !important;
      font-weight: 400;
    }

    body {
      height: 100%;
      margin: 0;
      font-family: "Roboto", "Kalameh" !important;
      font-weight: 400;
    }

    #root {
      height: 100%;
      background-color: ${theme.colors.black};
    }

    ::-webkit-scrollbar {
      width: 7px;
      background: transparent;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: transparent;
    }

    ::-webkit-scrollbar-track-piece:start {
      background: transparent;
    }

    ::-webkit-scrollbar-track-piece:end {
      background: transparent;
    }

    * {
      scrollbar-width: thin !important;
      scrollbar-color: #907330 #262f37;
    }

    *:hover::-webkit-scrollbar-thumb {
      background-color: ${color(theme.colors.buttonBackground)
        .fade(0.5)
        .string()};
    }

    *:hover::-webkit-scrollbar-track {
      background-color: ${color(theme.colors.buttonText).fade(0.44).string()};
    }

    ::selection {
      background-color: ${colors.Sunray100};
      color: ${colors.DarkGunmetal90};
    }
  `;
}

export const NavigationBarWrapper = styled.div`
  grid-area: navigation;
  background-color: ${colors.DarkGunmetal100};
  overflow-y: overlay;
  padding-top: 10px;
`;

export const Content = styled.main`
  grid-area: content;
  display: flex;

  background-color: ${colors.DarkGunmetal100};
  @media (max-width: 576px) {
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none !important;
    }
  }
  @media (min-width: 576px) {
    min-width: 0;
    min-height: 0;
  }
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "navigation content";
  grid-template-columns: 200px auto;
  grid-template-rows: 70px auto;
  height: 100%;

  @media (max-width: 576px) {
    grid-template-areas:
      "header header"
      "content content";
    display: flex;
    flex-direction: column;
  }
`;

export const OfflinePage = styled.div`
  color: ${colors.Platinum100};
  background-color: ${colors.DarkGunmetal100};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
