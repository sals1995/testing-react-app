import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter/Counter";
import { beforeEach, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  beforeEach(()=>{
     render(<Counter />)
  })
  it("should be rendered", () => {
   

    //access dom

    expect(screen.getByRole("heading")).toHaveTextContent(0)
    let btnTags=screen.getAllByRole("button")
    expect(btnTags).toHaveLength(3)
  });
  it("should increase state after clicking btn +",async ()=>{
    
    //access btn +
    let btnInc=screen.getByRole("button",{name:"Increment"}) //or // screen.getByText("+")
    //fire click
   await userEvent.click(btnInc)
   await userEvent.click(btnInc)
   await userEvent.click(btnInc)
    //assert h1 ===> ++
    expect(screen.getByRole("heading")).toHaveTextContent(3)

  })
});
