import { render, screen } from "@testing-library/react";
import { beforeEach } from "vitest";
import Counter from "../components/Counter/Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component",()=>{
    beforeEach(()=>{
        render(<Counter />)
    })
    it("should be rendered",()=>{
        

       let btnTags= screen.getAllByRole("button")
       expect(btnTags).toHaveLength(3)
    //    expect(screen.getByRole("heading")).toHaveTextContent(0)
    expect(screen.getByText(0)).toBeInTheDocument()
    })
    it("should increase count after click btn +",async ()=>{
        
        //access btn +
      let btnInc=  screen.getByRole("button",{name:"Increment"}) // screen.getByText("+")
        //fire click
       await userEvent.click(btnInc)
       await userEvent.click(btnInc)
       await userEvent.click(btnInc)
        //assert count +1
        expect(screen.getByRole("heading")).toHaveTextContent(3)
    })


})