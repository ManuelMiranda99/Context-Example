import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button tests", () => {
  it("should render a button with its props", () => {
    render(<Button text="TEST" onClick={jest.fn()} />);
    expect(screen.getByRole("button", { name: "TEST" })).toBeInTheDocument();
  });

  it("should call onClick prop when click on button", async () => {
    const onClick = jest.fn();

    render(<Button text="TEST" onClick={onClick} />);

    const testButton = screen.getByRole("button", { name: "TEST" });

    await userEvent.click(testButton);

    expect(onClick).toHaveBeenCalled();
  });
});
