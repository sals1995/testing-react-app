import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";


describe("Button component",()=>{
    it("should be rendered",()=>{
        //render
        render( <Button > click me </Button>)
        //access dom
        let btn=screen.getByRole("button")
        //assert rendering (dom)
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveTextContent("click me")
    })
    it("should call click handler after clicking btn",async ()=>{
       let clickHandler= vi.fn() //mock + spy
        render(<Button onClick={clickHandler}>try to click</Button>)

        //access btn
        let btn =screen.getByRole("button")
        //assert rendered in dom
        expect(btn).toBeInTheDocument()
        //fire click event
       await userEvent.click(btn)
        //assert handler called 
        expect(clickHandler).toHaveBeenCalled()
    })
})