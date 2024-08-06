import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {CharactersCards} from "@/shared/ui";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe("CharactersCards", () => {
  const characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      image: "https://example.com/rick.png",
    },
    {
      id: 2,
      name: "Morty Smith",
      image: "https://example.com/morty.png",
    },
  ];

  it("renders characters correctly", () => {
    render(<CharactersCards characters={characters} />);
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
  });

  it("navigates to character page on click", () => {
    render(<CharactersCards characters={characters} />);
    fireEvent.click(screen.getByText(/Rick Sanchez/i));
    expect(mockPush).toHaveBeenCalledWith("/character/1");
  });
});
