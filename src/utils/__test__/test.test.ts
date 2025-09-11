/// <reference types="vitest/globals" />

import { vi } from "vitest";

describe("Global vitest test", () => {
  it("should run with globals", () => {
    const spy = vi.fn();
    spy();
    expect(spy).toHaveBeenCalled();
  });
});
