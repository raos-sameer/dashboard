import React from "react";
import { Accordion, Progress, Button } from "semantic-ui-react";
import ResultSetDisplay from "./ResultSetDisplay";
const level1Panels = [
  {
    key: "panel-ba",
    title: "Customer Id: XYZ456",
    content: "Level 1B Contents",
  },
];

const Level1Content = (
  <div>
    <Progress percent={50} warning>
      In Progress
    </Progress>
    <ResultSetDisplay></ResultSetDisplay>
  </div>
);

const rootPanels = [
  {
    key: "panel-2",
    title: "Customer Id: XYZ789",
    content: { content: Level1Content },
  },
];

const Result = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
);

export default Result;
