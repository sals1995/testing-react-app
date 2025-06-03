import { render, screen } from "@testing-library/react"
import Heroes from "../components/Heroes/Heroes"
import { expect } from "vitest"

describe("Heroes component",()=>{
    it("should render with no hero",()=>{
        render(<Heroes />)

        expect(screen.getByText(/no hero/i)).toBeInTheDocument()
        expect(screen.queryByRole("list")).not.toBeInTheDocument()
    })
    it("should render with heroes",()=>{
        let mockHeroes=[
            {id:1,name:"superman",strength:10},
            {id:2,name:"batman",strength:100},
        ]
        render(<Heroes heroes={mockHeroes} />)

        expect(screen.getByRole("list")).toBeInTheDocument()
        let liTags=screen.getAllByRole("listitem")
        expect(liTags).toHaveLength(2)
        for (let index = 0; index < liTags.length; index++) {
            expect(liTags[index]).toHaveTextContent(mockHeroes[index].name)
            
        }
    })
})