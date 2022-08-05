import React from "react";

export default function entry(
  Component: React.ComponentType
): React.ComponentType {
  return (): React.ReactElement => {
    return <Component />;
  };
}
