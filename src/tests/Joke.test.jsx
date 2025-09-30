import { render, screen, waitFor } from "@testing-library/react";
import JokeFetcher from "../components/Joke/Joke";
import { beforeAll, expect } from "vitest";
import server from "../mocks/handlers";

describe("Joke component", () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => server.close());
  it("should be rendered with joke response", async () => {
    render(<JokeFetcher />);

    expect(screen.getByRole("heading")).toHaveTextContent(/loading/i);

    //1
    // expect(await screen.findByRole("heading")).toHaveTextContent(/fake joke/i)
    //2
   await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent(/fake joke/i);
    });
  });
});
