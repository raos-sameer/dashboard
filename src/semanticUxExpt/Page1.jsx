import React, { useState } from "react";
import {
  Table,
  Label,
  Select,
  Checkbox,
  Tab,
  Input,
  Image,
  Form,
  Segment,
  Grid,
  Header,
  Message,
  Button,
  Menu,
} from "semantic-ui-react";
import SearchInputs from "./SearchInputs";
import Result from "./Result_ListRequestids";
import CustomerId from "./Result_CustomerId";
import { Height } from "devextreme-react/chart";

const tableData = [
  { name: "John", age: 15, gender: "Male" },
  { name: "Amber", age: 40, gender: "Female" },
  { name: "Leslie", age: 25, gender: "Other" },
  { name: "Ben", age: 70, gender: "Male" },
];
const panes = [
  {
    menuItem: "Tab 1",
    render: () => {
      return (
        <Tab.Pane style={{ marginTop: "2%" }} attached={true}>
          <SearchInputs></SearchInputs>
        </Tab.Pane>
      );
    },
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

function exampleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: state.data.sort([action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

export default function Page1() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;
  return (
    <div>
      <Message>
        <Menu size="large" fixed="top" inverted color="blue">
          <Menu.Item header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            PayPal
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
        </Menu>
        <div
          style={{
            margin: "3%",
            width: "90%",
          }}
        >
          <Grid columns={15} padded>
            <Grid.Column
              floated="right"
              color={"green"}
              textAlign="center"
              style={{ borderRadius: "50%" }}
            >
              {" "}
              Complete{" "}
            </Grid.Column>
            <Grid.Column
              floated="right"
              textAlign="center"
              style={{
                marginLeft: "3%",
                borderRadius: "50%",
              }}
              color={"orange"}
            >
              In Progress
            </Grid.Column>
            <Grid.Column
              floated="right"
              textAlign="center"
              style={{
                marginLeft: "3%",
                borderRadius: "50%",
              }}
              color={"red"}
            >
              Failed
            </Grid.Column>
          </Grid>
        </div>
        {/* <Tab
          style={{
            marginLeft: "3%",
            width: "90%",
          }}
          menu={{ secondary: true, pointing: true }}
          panes={panes}
        /> */}
        <div
          style={{
            marginTop: "3%",
            marginLeft: "3%",
            marginBottom: "3%",
            width: "90%",
          }}
        >
          <SearchInputs></SearchInputs>
        </div>
        <Header
          as="h5"
          block
          style={{
            marginLeft: "3%",
            marginTop: "1%",
            marginBottom: "2%",
            width: "90%",
          }}
        >
          You searched for: Request Id: ABC123, ABC456
        </Header>

        <Grid columns="equal" style={{ marginLeft: "2%", width: "90%" }}>
          <Grid.Row>
            <Grid.Column>
              <Table color={"blue"} sortable celled fixed>
                <Result></Result>
              </Table>
            </Grid.Column>
            <Grid.Column>
              <Table color={"blue"} sortable celled fixed>
                <CustomerId></CustomerId>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <Table
          color={"blue"}
          sortable
          celled
          fixed
          style={{ marginLeft: "3%", width: "90%" }}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "name" ? direction : null}
                onClick={() =>
                  dispatch({ type: "CHANGE_SORT", column: "name" })
                }
              >
                Request Id
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "age" ? direction : null}
                onClick={() => dispatch({ type: "CHANGE_SORT", column: "age" })}
              >
                Age
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "gender" ? direction : null}
                onClick={() =>
                  dispatch({ type: "CHANGE_SORT", column: "gender" })
                }
              >
                Gender
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({ age, gender, name }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{gender}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table> */}
      </Message>
    </div>
  );
}
