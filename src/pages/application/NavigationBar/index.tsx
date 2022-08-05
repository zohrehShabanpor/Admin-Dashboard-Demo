import React from "react";
import { memo } from "_/utilities/memo";
import { breakPoints } from "_/utilities";
import { StyledNavigationBar, NavigationBarList } from "./styles";
import NavigationBarItem, {
  NavigationBarItem as NavigationBarItemType,
} from "./Item";

interface Props {
  className?: string;
  items: NavigationBarItemType[];
  activeItem: NavigationBarItemType;
}

function NavigationBarComponent({
  className,
  items,
  activeItem,
}: Props): React.ReactElement {
  return (
    <nav className={className}>
      <NavigationBarList>
        {items.map((item) => (
          <NavigationBarItem
            key={item.id}
            isActive={item === activeItem}
            item={item}
          />
        ))}
      </NavigationBarList>
    </nav>
  );
}

export default memo(NavigationBarComponent, StyledNavigationBar);
export type { NavigationBarItem } from "./Item";
