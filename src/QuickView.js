import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { DefinedRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Paper from "@material-ui/core/Paper";
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  Toolbar,
  TableHeaderRow,
  TableColumnResizing,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import { generateRows } from "./data";

import { set } from "date-fns";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statuses = ["Success", "In Progress", "Failure"];

export default function QuickView() {
  const classes = useStyles();
  const [status, setStatus] = React.useState([]);
  const [showGrid, setShowGrid] = React.useState(false);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [columns] = useState([
    { name: "requestId", title: "Request Id" },
    { name: "customerId", title: "Customer Id" },
    { name: "activity", title: "Activity" },
    { name: "domain", title: "Domain" },
    { name: "requestIdStatus", title: "Request Id Status" },
    { name: "timestamp", title: "Timestamp" },
    { name: "action", title: "Action" },
  ]);
  const [columnWidths, setColumnWidths] = useState([
    { columnName: "requestId", width: 150 },
    { columnName: "customerId", width: 150 },
    { columnName: "activity", width: 100 },
    { columnName: "domain", width: 200 },
    { columnName: "requestIdStatus", width: 200 },
    { columnName: "timestamp", width: 200 },
    { columnName: "action", width: 200 },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));
  const [sorting, setSorting] = useState([
    { columnName: "requestId", direction: "asc" },
  ]);
  return (
    <div>
      <h1> Quick View Filter:</h1>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          height: "200px",
        }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={status}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {statuses.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={status.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div
          style={{
            marginLeft: "2%",
          }}
        >
          <DefinedRange
            onChange={(item) => setState([item.selection])}
            ranges={state}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button style={{ margin: "2%" }} onClick={() => setShowGrid(true)}>
          Show Details
        </button>
      </div>

      {showGrid && (
        <div style={{ width: "90%", marginTop: "10%" }}>
          <h2>Data migration details</h2>
          <Paper>
            <Grid rows={rows} columns={columns}>
              <SortingState sorting={sorting} onSortingChange={setSorting} />

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
              <PagingPanel />
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );
}
