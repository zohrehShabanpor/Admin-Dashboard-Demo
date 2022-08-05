import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { colors } from "_/constants";
import { Plus as PlusIcon } from "_/assets/images";

import TextInput from "../form/TextInput";

export const TextField = withStyle(
  TextInput,
  styled("div")`
    & .container {
      padding: 8px 8px;
    }
  `
);

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    width: 100% !important;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center; 
  column-gap: 20px;
  padding: 16px 20px 0;
  margin: 0 0 15px;
  position: relative;
  

  & svg {
    margin: 0 5px;
    & path {
        fill: #ffffff; 
      },
  },
  
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap:4px;

  color: ${colors.Platinum100};

  font-weight: 500;
  font-size: 16px;

  & svg {
    width:18px;
    height:18px;
    & path {
        
        fill: ${colors.Sunray100}!important;
      },
    },
`;

export const Plus = withStyle(
  PlusIcon,
  styled("div")`
    cursor: pointer;
    justify-self: right;
    position: absolute;
    right: 10px;

    @media (max-width: 576px) {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px 20px 0 0 !important;
    }
  `
);
