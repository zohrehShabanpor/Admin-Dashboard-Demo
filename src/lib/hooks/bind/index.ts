import {useEffect, useRef} from 'react';


export default function useBind({
  value1,
  value2,
  setter1,
  setter2,
  dependencies1 = [],
  dependencies2 = [],
  dependencies = [],
}: {
  value1: string | undefined;
  value2: string | undefined;
  setter1: (value: string | undefined, initialization: boolean) => boolean;
  setter2: (value: string | undefined, initialization: boolean) => boolean;
  dependencies1?: ReadonlyArray<any>;
  dependencies2?: ReadonlyArray<any>;
  dependencies?: ReadonlyArray<any>;
}): void {
  const isInitializing = useRef(true);

  const desiredValue1 = useRef<string | undefined | null>(null);
  const desiredValue2 = useRef<string | undefined | null>(null);

  setImmediate(() => {
    desiredValue1.current = null;
    desiredValue2.current = null;
  });

  useEffect(() => {
    isInitializing.current = true;
  }, dependencies);

  useEffect(() => {
    if (desiredValue2.current !== null && desiredValue2.current !== value2) {
      return;
    }
    if (value2 && value2 !== value1) {
      if (setter1(value2, isInitializing.current)) {
        desiredValue1.current = value2;
      }
    }
    else if (!value2 && value1) {
      if (setter1(undefined, isInitializing.current)) {
        desiredValue1.current = value2;
      }
    }
  }, [value2, ...dependencies1]);

  useEffect(() => {
    if (desiredValue1.current !== null && desiredValue1.current !== value1) {
      return;
    }
    if (value1 && value1 !== value2) {
      if (setter2(value1, isInitializing.current)) {
        desiredValue2.current = value1;
      }
    }
    else if (!value1 && value2) {
      if (setter2(undefined, isInitializing.current)) {
        desiredValue2.current = value1;
      }
    }
  }, [value1, ...dependencies2]);

  useEffect(() => {
    if (value1 === value2 && isInitializing.current) {
      isInitializing.current = false;
    }
  }, [value1, value2]);
}
