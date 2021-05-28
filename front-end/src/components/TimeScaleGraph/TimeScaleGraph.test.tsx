import React from "react";
import { render } from "@testing-library/react";
import TimeScaleGraph from './TimeScaleGraph';

test("renders without crashing", () => {
  const { baseElement } = render(<TimeScaleGraph />);
  expect(baseElement).toBeDefined();
});
