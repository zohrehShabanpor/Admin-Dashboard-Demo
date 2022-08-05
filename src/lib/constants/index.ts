import { Theme } from "@emotion/react/macro";
import {
  HomeModule,
  AnalyticsModule,
  ResourceModule,
  SettingsModule,
  LogoutModule,
} from "_/assets/images";
import darkStyle from "_/themes/dark-style.json";
import lightStyle from "_/themes/light-style.json";

interface Color {
  name: string;
  colors: {
    name?: string;
    value: string;
  }[];
}

interface Style {
  colors: Color[];
}

export const colors = {
  DarkGunmetal100: "#202229",
  DarkGunmetal90: "#2A2C33",
  DarkGunmetal85: "#3D3F45",
  DarkGunmetal80: "#48494F",
  DarkGunmetal60: "#6E6F74",
  Sunray100: "#E2B04C",
  Sunray60: "#95783E",
  Sunray40: "#6D5A37",
  Sunray20: "#473E30",
  Platinum100: "#ffffff",
  Platinum80: "#D2D3D4",
  Platinum60: "#A6A7A9",
  CoralRed100: "#FF3B30",
};

function parseStyle(style: Style): Theme {
  const parsedStyle: Record<string, any> = { colors: {} };

  for (const colorSet of style.colors) {
    parsedStyle.colors[colorSet.name] = Object.fromEntries(
      colorSet.colors.map(({ name, value }) => [name || value, value])
    );
  }

  return {
    colors: {
      backgroundColor: parsedStyle.colors.Primary.BackgroundColor,
      black: parsedStyle.colors.Primary.Black,
      buttonBackground: parsedStyle.colors.Primary.ButtonBackground,
      buttonText: parsedStyle.colors.Primary.ButtonText,
      error: parsedStyle.colors.Primary.error,
      grayedButtonBackground: parsedStyle.colors.Primary.GrayedButtonBackground,
      grayedButtonHover: parsedStyle.colors.Primary.GrayedButtonHover,
      grayedButtonText: parsedStyle.colors.Primary.GrayedButtonText,
      headerBackground: parsedStyle.colors.Primary.HeaderBackground,
      inputBackground: parsedStyle.colors.Primary.InputBackground,
      inputBorder: parsedStyle.colors.Primary.InputBorder,
      inputText: parsedStyle.colors.Primary.InputText,
      sidebar: parsedStyle.colors.Primary.Sidebar,
      toggleBackground: parsedStyle.colors.Primary.ToggleBackground,
      white: parsedStyle.colors.Primary.White,
    },
  };
}

export const THEMES = {
  dark: parseStyle(darkStyle.list),
  light: parseStyle(lightStyle.list),
};

export const MODULES = [
  { Icon: HomeModule, module: "home", text: "Home" },
  { Icon: AnalyticsModule, module: "analytics", text: "Analytics" },
  { Icon: ResourceModule, module: "resource", text: "Resource" },
  { Icon: SettingsModule, module: "settings", text: "Settings" },
  { Icon: LogoutModule, module: "logout", text: "Log Out" },
].map((entry) => ({ ...entry, id: entry.module }));

export const TOKEN = localStorage.getItem("token");
