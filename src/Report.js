import React from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
const Report = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div>
      <h1>Report - Status</h1>
      <div>
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ margin: "2%" }}
          onClick={() => console.log("Download Clicked")}
        >
          Download
        </button>
        <button onClick={() => console.log("Send Email Clicked")}>
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Report;
