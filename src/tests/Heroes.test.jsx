import { render, screen } from "@testing-library/react"
import Heroes from "../components/Heroes/Heroes"
import { expect } from "vitest"

describe("Heroes component",()=>{
    it("should be rendered without props",()=>{
        render(<Heroes />)

        expect(screen.getByText(/no heroes/i)).toBeInTheDocument()
        expect(screen.queryByRole("list")).not.toBeInTheDocument()
    })
    it("should be rendered with props",()=>{
        let heroesMock=[
            {id:100,name:"super man",strength:20},
            {id:102,name:"bat man",strength:15},
        ]
        render(<Heroes heroes={heroesMock}/>)

        expect(screen.queryByText(/no heroes/i)).not.toBeInTheDocument()
        expect(screen.queryByRole("list")).toBeInTheDocument()

       let liTags= screen.queryAllByRole("listitem")
       expect(liTags).toHaveLength(2)
       expect(liTags[0]).toHaveTextContent(heroesMock[0].name)
    })
   
})
