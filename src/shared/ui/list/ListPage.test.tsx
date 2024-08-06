import { render, screen, fireEvent } from "@testing-library/react";
import ListPage from "./ListPage";
import { useRouter } from "next/navigation";

// Мокаем useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

describe("ListPage", () => {
  const mockList = [
    { id: 1, name: "Character 1", type: "Type 1", air_date: "2022-01-01" },
    { id: 2, name: "Character 2", type: "Type 2", air_date: "2022-01-02" },
  ];

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<ListPage list={[]} title="Title" route="/route" />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("displays list items correctly", () => {
    render(<ListPage list={mockList} title="Title" route="/route" />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockList.length);
    expect(screen.getByText("Character 1")).toBeInTheDocument();
    expect(screen.getByText("Character 2")).toBeInTheDocument();
  });

  it("navigates to the correct route on click", () => {
    render(<ListPage list={mockList} title="Title" route="/route" />);

    const item = screen.getByText("Character 1");
    fireEvent.click(item);

    expect(mockPush).toHaveBeenCalledWith("/route/1");
  });
});
