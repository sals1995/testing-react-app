import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button"
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";


describe("Button Component",()=>{
    it("should be rendered",()=>{
        render(<Button> click me </Button>)

        //access tag from dom
       let btn= screen.getByRole("button")
        expect( btn ).toBeInTheDocument()
        expect( btn ).toHaveTextContent("click me")
    })
    it("should call handler function when fire click event",async ()=>{
        let handlerClick= vi.fn()//mock+spy
        render(<Button onClick={handlerClick} >click</Button>)

        expect(handlerClick).not.toHaveBeenCalled()
        //access btn
       let btn= screen.getByRole("button")
        //fire click btn
       await userEvent.click(btn)

        expect(handlerClick).toHaveBeenCalled()
    })
})