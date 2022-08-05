import React from "react";
import { useLocation } from "react-router-dom";
import { memo } from "_/utilities/memo";
import {
  Title,
  SubTitle,
  SubTitleWrapper,
  SubTitleItem,
  MenuIconContainer,
} from "./styles";

interface Props {
  title: { content: string; url?: string };
  subTitleItem: { subTitle: string; icon: JSX.Element; url?: string }[];
}

function MenuItem({ title, subTitleItem }: Props): React.ReactElement {
  const location = useLocation();

  return (
    <>
      <Title href={title.url}>{title.content}</Title>
      <SubTitleWrapper>
        {subTitleItem.map((item, index) => {
          return (
            <SubTitleItem
              onClick={() => {
                if (item.subTitle.toLowerCase() === "log out") {
                  localStorage.removeItem("token");
                  localStorage.removeItem("username");
                  localStorage.removeItem("role");
                  window.location.reload();
                }
              }}
              className={location.pathname === item.url ? "active" : ""}
              href={item.url}
            >
              <MenuIconContainer>{item.icon}</MenuIconContainer>
              <SubTitle>{item.subTitle}</SubTitle>
            </SubTitleItem>
          );
        })}
      </SubTitleWrapper>
    </>
  );
}

export default memo(MenuItem);
