import { render, screen, waitFor } from "@testing-library/react";
import JokeFetcher from "../components/Joke/Joke";
import { afterAll, beforeAll } from "vitest";
import server from "../mocks/server";

describe("Joke component", () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  
  it("render with response", async () => {
    render(<JokeFetcher />);

    expect(screen.getByRole("heading")).toHaveTextContent(/loading/i);
    //    await waitFor(()=>{
    //         expect(screen.getByRole("heading")).toHaveTextContent(/funny joke/i)

    //     })
    //or
    let h1 = await screen.findByRole("heading");
    expect(h1).toHaveTextContent(/funny joke/i);
  });
 
});
