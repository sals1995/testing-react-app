import { render, screen, waitFor } from "@testing-library/react";
import JokeFetcher from "../components/Joke/Joke";
import { beforeAll, expect } from "vitest";
import server from "../mocks/server";

describe("Joke component", () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())
  it("should be rendered", async () => {
    render(<JokeFetcher />);

    expect(screen.getByRole("heading")).toHaveTextContent(/loading/i);

    //expect( await screen.findByRole("heading")).toHaveTextContent(/fake joke/)
    //or 

    await waitFor(()=>{
        expect(screen.getByRole("heading")).toHaveTextContent(/fake joke/)

    })


  });
});
