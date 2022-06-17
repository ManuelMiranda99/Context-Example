import { act, renderHook } from "@testing-library/react";
import { useContarState } from "./useContarState";

describe("useContarState", () => {
  it("should begin value with value 0", () => {
    const { result } = renderHook(() => useContarState());

    expect(result.current.value).toBe(0);
  });

  it("should begin with value 2 when 2 is passed as param", () => {
    const { result } = renderHook(() => useContarState(2));

    expect(result.current.value).toBe(2);
  });

  it("should increment value by 1", () => {
    const { result } = renderHook(() => useContarState());

    act(() => {
      result.current.handleCount();
    });

    expect(result.current.value).toBe(1);
  });
});
