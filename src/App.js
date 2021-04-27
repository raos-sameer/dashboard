import React, { useState, useEffect } from "react";
import AppMenu from "./common/Appmenu";
import Paper from "@material-ui/core/Paper";
import {
  SortingState,
  IntegratedSorting,
  FilteringState,
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  TableFilterRow,
  TableColumnResizing,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import { Bar, Pie } from "react-chartjs-2";
import { generateRows } from "./data";
import "./App.css";
const App = () => {
  const [columns] = useState([
    { name: "requestId", title: "Request Id" },
    { name: "customerId", title: "Customer Id" },
    { name: "activity", title: "Activity" },
    { name: "domain", title: "Domain" },
    { name: "requestIdStatus", title: "Request Id Status" },
    { name: "timestamp", title: "Timestamp" },
    { name: "action", title: "Action" },
  ]);

  const [rows] = useState(generateRows({ length: 8 }));
  const [sorting, setSorting] = useState([
    { columnName: "requestId", direction: "asc" },
  ]);
  const status = ["Success", "In progress", "Failed"];
  const [columnWidths, setColumnWidths] = useState([
    { columnName: "requestId", width: 150 },
    { columnName: "customerId", width: 150 },
    { columnName: "activity", width: 100 },
    { columnName: "domain", width: 200 },
    { columnName: "requestIdStatus", width: 200 },
    { columnName: "timestamp", width: 200 },
    { columnName: "action", width: 200 },
  ]);
  const [filteringColumnExtensions] = useState([
    {
      columnName: "timestamps",
      predicate: (value, filter, row) => {
        console.log(value, filter, row);
        // filter date
      },
    },
  ]);
  const [searchValue, setSearchState] = useState("");
  var entirePieData = rows.map((item) => item.requestIdStatus);
  var entireData = [];
  for (var i = 0; i < status.length; ++i) {
    entireData.push(entirePieData.filter((x) => x === status[i]).length);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <AppMenu></AppMenu>
      <h1>Data Migration Dashboard</h1>
      <div style={{ width: "70%" }}>
        <div
          style={{
            marginLeft: "260px",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            height: "200px",
          }}
        >
          <Pie
            data={{
              labels: ["Success", "In Progress", "Failed"],
              datasets: [
                {
                  data: entireData,
                  backgroundColor: ["green", "orange", "red"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Status of Current Data Migration",
                },
              },
            }}
          ></Pie>
          <Bar
            data={{
              labels: [
                "Identity",
                "Risk",
                "Payments",
                "FI",
                "Data Migration",
                "Customer Migration",
              ],
              datasets: [
                {
                  label: "Domains -  remaining %",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "blue",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: "blue",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Status of Entire Data Migration",
                },
              },
            }}
          ></Bar>
        </div>
      </div>
      <br />
      <hr />
      <div style={{ width: "90%" }}>
        <h2>Current Data migration details</h2>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <SortingState sorting={sorting} onSortingChange={setSorting} />
            <SearchState value={searchValue} onValueChange={setSearchState} />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
            <IntegratedSorting />
            <PagingState defaultCurrentPage={0} pageSize={5} />
            <IntegratedPaging />
            <Table />
            <TableColumnResizing
              columnWidths={columnWidths}
              onColumnWidthsChange={setColumnWidths}
            />
            <TableHeaderRow showSortingControls />
            <Toolbar />
            <SearchPanel />
            <TableFilterRow />
            <PagingPanel />
          </Grid>
        </Paper>
      </div>
    </div>
  );
};
export default App;
