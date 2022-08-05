import '@emotion/react/macro';


declare module '@emotion/react/macro' {
  export interface Theme {
    colors: {
      backgroundColor: string;
      white: string;
      black: string;
      error: string;
      inputText: string;
      inputBackground: string;
      inputBorder: string;
      buttonBackground: string;
      buttonText: string;
      grayedButtonText: string;
      grayedButtonBackground: string;
      grayedButtonHover: string;
      sidebar: string;
      toggleBackground: string;
      headerBackground: string;
    }
  }
}
