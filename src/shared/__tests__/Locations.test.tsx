import { render } from "@testing-library/react";
import { Locations } from "@/entities/locations";
import { useGetLocationsQuery } from "@/shared/services/RickAndMortyApi";
import { ListPage } from "@/shared/ui";
import { PaginationPage } from "@/shared/ui";

jest.mock("../services/RickAndMortyApi", () => ({
  useGetLocationsQuery: jest.fn(),
}));

jest.mock("../ui/list", () => ({
  ListPage: jest.fn(() => <div></div>),
}));

jest.mock("../ui/pagination", () => ({
  PaginationPage: jest.fn(() => <div></div>),
}));

describe("Locations", () => {
  const mockData = {
    results: [
      { id: 1, name: "Location 1" },
      { id: 2, name: "Location 2" },
    ],
  };

  beforeEach(() => {
    (useGetLocationsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("passes the correct data to ListPage", () => {
    render(<Locations />);

    expect(ListPage).toHaveBeenCalledWith(
      expect.objectContaining({
        list: mockData.results,
        route: "locations",
        title: "Type:",
      }),
      {}
    );
  });

  it("passes the correct count to PaginationPage", () => {
    render(<Locations />);

    expect(PaginationPage).toHaveBeenCalledWith(
      expect.objectContaining({
        count: 7,
        onChange: expect.any(Function),
      }),
      {}
    );
  });
});
