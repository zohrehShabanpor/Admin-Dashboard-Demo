import {StyledComponent} from '@emotion/styled';


export default function withStyle<T, U = object, V = object>(
  component: T,
  styledComponent: StyledComponent<U, V>,
): T & StyledComponent<U, V> {
  const typedWithComponent: <W, X, Y>(component: W) => W & StyledComponent<X, Y> = styledComponent.withComponent;

  return typedWithComponent(component);
}
