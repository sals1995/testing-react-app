import { afterAll, beforeAll, describe, expect, it } from "vitest";
import server from "../mocks/server";
import { render, screen, waitFor } from "@testing-library/react";
import JokeFetcher from "../components/Joke/Joke";

describe("Joke component",()=>{
    beforeAll(()=>{
        server.listen()
    })
    afterAll(()=>{
        server.close()
    })
    it("should render correctly",async ()=>{
        
        render(<JokeFetcher />)

        expect(screen.getByRole("heading")).toHaveTextContent(/loading/i)
        
        //expect(await screen.findByRole("heading") ).toHaveTextContent(/funny joke/)
       await waitFor(()=>{
            expect(screen.getByRole("heading")).toHaveTextContent(/funny joke/)
        })

    })
   
})