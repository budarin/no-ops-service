const noop = (): void => {};

export const noOpsService = new Proxy(
  {},
  {
    get: (): (() => void) => noop,
  }
);
