import React, { useState } from "react";
import moment from "moment-timezone";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import DataGrid, {
  Column,
  Paging,
  Selection,
  Summary,
  GroupItem,
  SortByGroupSummaryInfo,
  SearchPanel,
} from "devextreme-react/data-grid";
import DatetimeRangePicker from "react-datetime-range-picker";
import { generateRows } from "./data";
import "./App.css";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const statuses = ["Success", "In Progress", "Failure"];
const Dashboard = () => {
  const [rows] = useState(generateRows({ length: 8 }));

  const [status, setStatus] = React.useState([]);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <div style={{ width: "90%" }}>
        <h2>CSTS Data migration details </h2>
        <div
          style={{
            textAlign: "left",
          }}
          className={classes.root}
        >
          <InputLabel>Search By:</InputLabel>

          <ButtonGroup
            style={{ marginBottom: "3%", textAlign: "right" }}
            size="small"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button>1h</Button>
            <Button>3h</Button>
            <Button>1d</Button>
            <Button>3d</Button>
            <Button>1w</Button>
            <DatetimeRangePicker />
          </ButtonGroup>

          <FormControl className={classes.formControl} style={{ width: "5%" }}>
            <InputLabel id="demo-mutiple-checkbox-label">Status</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={status}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {statuses.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={status.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ThemeProvider theme={theme}>
            <TextField
              label="Request Id"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              label="Customer Id"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
          </ThemeProvider>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Domain</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={10}>Identity</MenuItem>
              <MenuItem value={20}>FI</MenuItem>
              <MenuItem value={20}>Activity</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ marginLeft: "2%", height: "10%" }}
            size="small"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </div>
        <Paper>
          <ButtonGroup
            style={{ marginBottom: "3%", textAlign: "right" }}
            size="small"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button>Download Report</Button>
            <Button>Send Email</Button>
          </ButtonGroup>
          <React.Fragment>
            <DataGrid
              id="gridContainer"
              dataSource={rows}
              keyExpr="ID"
              showBorders={true}
            >
              <SearchPanel
                visible={true}
                width={240}
                placeholder="Search in result..."
              />
              <Paging defaultPageSize={10} />

              <Selection mode="single" />
              <Column
                dataField="requestId"
                caption="Request Id"
                groupIndex={0}
              />
              <Column dataField="customerId" width={160} groupIndex={1} />
              <Column dataField="activity" />
              <Column dataField="domain" caption="Domain" />
              <Column dataField="customerIdStatus" caption="Status" />
              <Column
                dataField="timestamp"
                alignment="right"
                dataType="date"
                format="dd/MM/yyyy hh:mm"
                caption="Last updated time"
              />

              <SortByGroupSummaryInfo summaryItem="customerIdStatus" />
            </DataGrid>
          </React.Fragment>
        </Paper>
      </div>
    </div>
  );
};
export default Dashboard;
