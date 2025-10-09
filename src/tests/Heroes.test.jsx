import { render, screen } from "@testing-library/react";
import Heroes from "../components/Heroes/Heroes";
import { expect } from "vitest";

describe("Heroes component", () => {
  it("should be rendered without props", () => {
    render(<Heroes />);

    expect(screen.getByText(/no heroes/i)).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
  it("should be rendered with props", () => {
    let mockHeroes=[
        {id:100,name:"super man",strength:20},
        {id:111,name:"bat man",strength:17},
    ]
    render(<Heroes heroes={mockHeroes} />);

    expect(screen.queryByText(/no heroes/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("list")).toBeInTheDocument();
   let liTags= screen.queryAllByRole("listitem")
   expect(liTags).toHaveLength(2)
   expect(liTags[0].textContent).toMatch(/super man/)
  });
});
