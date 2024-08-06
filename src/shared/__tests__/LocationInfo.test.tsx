import { render, screen } from "@testing-library/react";
import {LocationsInfo} from "@/entities/locations";
import { RickAndMortyService } from "@/shared/services";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

jest.mock('../services', () => ({
  RickAndMortyService: {
    getSelectedListCharacters: jest.fn(),
  },
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("LocationsInfo", () => {
  const mockLocations = {
    id: 1,
    name: "Test Location",
    residents: ["url1", "url2"],
  };

  beforeEach(() => {
    (
      RickAndMortyService.getSelectedListCharacters as jest.Mock
    ).mockResolvedValueOnce({
      id: 1,
      name: "Character 1",
      image: "https://example.com/character1.png",
      species: "Human",
      gender: "Male",
      status: "Alive",
      origin: { name: "Earth" },
      location: { name: "Earth" },
    });
  });

  it("renders selected list and characters after loading", async () => {
    render(<LocationsInfo locations={mockLocations} />);

    expect(await screen.findByText("Test Location")).toBeInTheDocument();
  });
});
