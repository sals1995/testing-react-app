import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Button component",()=>{
    it("should render correctly",()=>{
        render(<Button>click me</Button>)

        expect( screen.getByRole("button") ).toBeInTheDocument()
        expect(screen.getByRole("button")).toHaveTextContent("click me")
    })
    it("should render correctly",async ()=>{
        //spy
        let handleClick=vi.fn()
        render(<Button onClick={handleClick}>click me</Button>)
        let btn= screen.getByRole("button") 
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveTextContent("click me")
        expect(handleClick).not.toHaveBeenCalled()

        //click
       await userEvent.click(btn)
        //called or not
        expect(handleClick).toHaveBeenCalled()
    })
})