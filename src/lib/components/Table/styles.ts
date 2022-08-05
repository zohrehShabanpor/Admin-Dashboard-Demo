import styled from "@emotion/styled/macro";
import { colors } from "_/constants";
import { Props } from ".";

export const Container = styled.div`
  @media (max-width: 576px) {
    height: 400px !important;
    max-height: 400px;
  }
`;

export const Table = styled.table`
  color: white;
  background-color: ${colors.DarkGunmetal90};
  width: 100%;

  & th:first-of-type{
    border-radius:12px 0 0 12px;
  }

  & th:last-child{
    border-radius: 0 12px  12px 0;
  }

  & tr {
    font-size: 14px;

    
    & td {
      padding: 0;
      
      & *{
        &.avatar-container {
          width:28px!important;
          height:28px!important;
        }
      }
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.DarkGunmetal100};
        width: 100%;
        height: 50px;
        margin: 12px 0 0;
      }
      
    & .rowNum{
      display:flex;
      align-items:center;
      justify-content:center;
      color: ${colors.Platinum100};
      background-color: ${colors.Sunray40};
      border-radius:50%;
      font-size:10px;
      font-weight:400;
      width:22px;
      height:22px;
    }

      &:first-of-type{
        & .container{
          border-radius:12px 0 0 12px;
        }
      }

      &:last-child{
        & .container{
          border-radius:0 12px 12px 0;
        }
      }
    }

    & svg {
      & path {
        stroke: white; 
        fill: white; 
      },
    },
    
  }
  }

  @media (max-width: 576px) {
     overflow-x : scroll;
  },
  }
`;

export const TableHead = styled.thead``;

export const Message = styled.div`
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px 0;
`;

export const HeadContainer = styled.th`
  background-color: ${colors.DarkGunmetal100};
  text-align: center;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  top: 0;
`;

export const TableBody = styled.tbody`
  width: 100% !important;
  height: 100% !important;
`;

export const TableRow = styled.tr`
  height: 40px !important;
`;

export const StyledTable = styled.div<Props>`
  overflow-x: hidden !important;
  overflow-y: ${(props) =>
    props?.bodyData?.length === 0 ? `hidden!important` : `scroll`};
  background-color: ${colors.DarkGunmetal90};

  &::-webkit-scrollbar {
    display: none !important;
  }

  @media (max-width: 576px) {
    overflow-x: scroll !important;
    ::-webkit-scrollbar {
      display: none !important;
    }
  }
`;

export const StyledPaginationButton = styled.div`
  outline: none;
  border: none;
  & > svg {
    width: 18px;
    height: 18px;
    fill: ${colors.Sunray100} !important;
    cursor: pointer;
  }
  &.disabled > svg {
    fill: ${colors.Sunray60} !important;
    cursor: default;
  }
  border-radius: 20px;
  padding: 5px;
  margin: 4px;
`;

export const PageNumberWrapper = styled.div`
  color: ${colors.Platinum60}!important;
  font-size: 13px;
  & * {
    display: inline-block;
    color: ${colors.Platinum60}!important;
  }
`;

export const RawPerPageSelect = styled.select`
  height: 37px;
  border: none;
  border-radius: 5px;
  color: ${colors.Platinum60};
  font-size: 16px;
  background-color: ${colors.DarkGunmetal90};
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  max-width: 25px;
  text-align: end;
  box-shadow: none;
  -moz-box-shadow: none;
  outline: none;
  border: none;
  background: transparent;
  -webkit-box-shadow: none;
`;

export const StyledPaginationWrapper = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  user-select: none;
  display: flex;
  justify-content: center;
`;
