import { render, screen } from "@testing-library/react";
import {EpisodesInfo} from "@/entities/episodes";
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

describe("EpisodesInfo", () => {
  const mockEpisode = {
    id: 1,
    name: "Test Episode",
    characters: ["url1", "url2"],
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
    render(<EpisodesInfo episode={mockEpisode} />);

    expect(await screen.findByText("Test Episode")).toBeInTheDocument();
  });
});
