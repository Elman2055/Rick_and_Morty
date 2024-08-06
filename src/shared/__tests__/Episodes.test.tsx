import { render } from "@testing-library/react";
import { Episodes } from "@/entities/episodes";
import { useGetEpisodesQuery } from "@/shared/services/RickAndMortyApi";
import { ListPage } from "@/shared/ui";
import { PaginationPage } from "@/shared/ui";

import "../ui/list";

jest.mock("../services/RickAndMortyApi", () => ({
  useGetEpisodesQuery: jest.fn(),
}));

jest.mock("../ui/list", () => ({
  ListPage: jest.fn(() => <div></div>),
}));

jest.mock("../ui/pagination", () => ({
  PaginationPage: jest.fn(() => <div></div>),
}));

describe("Episodes", () => {
  const mockData = {
    results: [
      { id: 1, name: "Episode 1" },
      { id: 2, name: "Episode 2" },
    ],
  };

  beforeEach(() => {
    (useGetEpisodesQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("passes the correct data to ListPage", () => {
    render(<Episodes />);

    expect(ListPage).toHaveBeenCalledWith(
      expect.objectContaining({
        list: mockData.results,
        route: "episodes",
        title: "Air date:",
      }),
      {}
    );
  });

  it("passes the correct count to PaginationPage", () => {
    render(<Episodes />);

    expect(PaginationPage).toHaveBeenCalledWith(
      expect.objectContaining({
        count: 3,
        onChange: expect.any(Function),
      }),
      {}
    );
  });
});
