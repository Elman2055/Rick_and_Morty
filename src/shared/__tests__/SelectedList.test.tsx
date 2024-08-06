import { render, screen } from "@testing-library/react";
import { SelectedList } from "@/shared/ui";
import { TListInfo } from "@/shared/types/types";

describe("SelectedList", () => {
  const mockSelectedList: TListInfo = {
    id: 1,
    name: "Sample Item",
    type: "Sample Type",
    air_date: "2023-01-01",
    dimension: "Sample Dimension",
  };

  it("renders correctly with air_date", () => {
    render(<SelectedList selectedList={mockSelectedList} />);

    expect(screen.getByText("Sample Item")).toBeInTheDocument();
    expect(screen.getByText("Air Date: 2023-01-01")).toBeInTheDocument();
  });

  it("renders correctly without air_date", () => {
    const itemWithoutAirDate = { ...mockSelectedList, air_date: undefined };

    render(<SelectedList selectedList={itemWithoutAirDate} />);

    expect(screen.getByText("Sample Item")).toBeInTheDocument();
    expect(screen.getByText("Type: Sample Type")).toBeInTheDocument();
    expect(screen.getByText("Dimension: Sample Dimension")).toBeInTheDocument();
  });
});
