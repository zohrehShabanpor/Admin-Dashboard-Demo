import styled from "@emotion/styled/macro";
import { colors } from "_/constants";
import { Props } from ".";

export const Container = styled.div`
  flex-grow: 1;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.DarkGunmetal100};
`;

export const Table = styled.table`
  color: ${colors.Platinum100};
  width: 100%;

  & tr {
    font-size: 14px;
    height: 50px !important ;

    & td {
      padding: 0 0 0 20px;
      text-align: start;

      & * {
        &.avatar-container {
          width: 28px !important;
          height: 28px !important;
          background-color: ${colors.DarkGunmetal100}!important;
        }
      }
    }
  }
`;

export const TableHead = styled.thead`
  height: 50px;
`;

export const Message = styled.div`
  color: #ffffff;
  background-color: ${colors.DarkGunmetal100};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  padding: 20px 0;
`;

export const HeadContainer = styled.th`
  background-color: ${colors.Sunray20};
  text-align: start;
  font-size: 14px;
  font-weight: 700;
  top: 0;
  padding: 0 0 0 20px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: 40px !important;
`;

export const StyledPaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border: solid 2px #bcbcbc;
  border-radius: 4px;
  cursor: pointer;

  & > svg {
    width: 14px;
    height: 14px;
    fill: #bcbcbc;
  }
  &.disabled > svg {
    fill: #bdbdbd;
  }

  &.disabled {
    cursor: default;
  }
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
`;

export const RawPerPageSelect = styled.select`
  height: 37px;
  border: none;
  border-radius: 5px;
  color: ${colors.Platinum60};
  font-size: 16px;
  background-color: ${colors.DarkGunmetal100};
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 26px;
  height: 26px;
  text-align: center;
  box-shadow: none;
  -moz-box-shadow: none;
  outline: none;
  border: none;
  -webkit-box-shadow: none;
  color: ${colors.Platinum100} !important;
  background-color: ${colors.Sunray100};
  border-radius: 4px;
  font-size: 12px;
`;

export const LastPage = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.Sunray100};
  color: ${colors.Sunray100}!important;
  border-radius: 4px;
  font-size: 12px;
`;

export const StyledPaginationWrapper = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  user-select: none;
  display: flex;
  height: 40px;
  justify-content: center;
  background-color: ${colors.Sunray20};
  padding: 10px 0;
  border-radius: 0 0 4px 4px;
`;
