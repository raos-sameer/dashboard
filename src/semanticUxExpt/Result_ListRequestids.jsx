import React from "react";
import { Accordion, Progress, Button } from "semantic-ui-react";
import ResultSetDisplay from "./ResultSetDisplay";
const level1Panels = [
  {
    key: "panel-1a",
    title: "Customer Id: XYZ123",
  },
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
    <Button color="green" size="small">
      Customer Id: XYZ123
    </Button>
    <Button color="red" size="small">
      Customer Id: XYZ456
    </Button>
    <Button color="orange" size="small">
      Customer Id: XYZ789
    </Button>
  </div>
);

const level2Panels = [
  { key: "panel-2a", title: "Level 2A", content: "Level 2A Contents" },
  { key: "panel-2b", title: "Level 2B", content: "Level 2B Contents" },
];

const Level2Content = (
  <div>
    Welcome to level 2{/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
);

const rootPanels = [
  {
    key: "panel-1",
    title: "Request Id: ABC123",
    content: { content: Level1Content },
  },
  {
    key: "panel-2",
    title: "Request Id: ABC456",
    content: { content: Level2Content },
  },
];

const Result = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
);

export default Result;
