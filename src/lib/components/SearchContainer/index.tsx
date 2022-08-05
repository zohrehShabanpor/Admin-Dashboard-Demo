import React, { useEffect, useState } from "react";
import { memo } from "_/utilities/memo";
import { Search as SearchIcon } from "_/assets/images";
import {
  Title,
  Container,
  TextField,
  SearchInputWrapper,
  Plus,
} from "./styles";

export enum headerJustify {
  spaceBetween,
  start,
  end,
}

interface Props {
  className?: string;
  headerItemsPlacement?: headerJustify;
  title: string;
  plusModalTarget?: string;
  value?: number;
  icon: React.ReactElement;
  hasSearch?: boolean;
  hasPlus?: boolean;
  getSearch?: { (query: string): void };
}

function Search({
  children,
  className,
  title,
  value,
  plusModalTarget,
  headerItemsPlacement = headerJustify.start,
  hasSearch = true,
  hasPlus = false,
  icon,
  getSearch = () => {},
}: React.PropsWithChildren<Props>): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      getSearch(searchTerm);
    }, 250);

    return () => {
      clearInterval(timeoutID);
    };
  }, [searchTerm]);

  return (
    <Container
      style={
        headerItemsPlacement === headerJustify.start
          ? { justifyContent: `start` }
          : headerItemsPlacement === headerJustify.spaceBetween
          ? { justifyContent: `space-between` }
          : { justifyContent: `end` }
      }
      className={className}
    >
      <Title>
        {icon}
        {title}
        {value ? ` : ${value}` : null}
      </Title>
      {children ||
        (hasSearch ? (
          <SearchInputWrapper>
            <TextField
              value={searchTerm}
              hint="Search"
              Icon={SearchIcon}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </SearchInputWrapper>
        ) : null)}

      {hasPlus ? (
        <Plus data-bs-toggle="modal" data-bs-target={`#${plusModalTarget}`} />
      ) : null}
    </Container>
  );
}

export default memo(Search);
