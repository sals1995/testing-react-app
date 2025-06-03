import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "../components/Counter/Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component",()=>{
    it("should render correctly",()=>{
        render(<Counter />)

        expect( screen.getAllByRole("button") ).toHaveLength(3)
        // expect( screen.getByRole('heading') ).toHaveTextContent(0)
        expect(screen.getByText(0)).toBeInTheDocument()
    })
    it("should update count value after clicking btn",async ()=>{
        render(<Counter />)

        //access btn +
        let btn= screen.getByRole("button",{name:"Increment"}) //screen.getByText("+")
        //click btn
       await userEvent.click(btn)
       await userEvent.click(btn)
       await userEvent.click(btn)
        //assert count 1
        expect(screen.getByRole("heading")).toHaveTextContent(3)

        let btn2= screen.getByRole("button",{name:"Decrement"})
        await userEvent.click(btn2)
        expect(screen.getByRole("heading")).toHaveTextContent(2)
    })
})