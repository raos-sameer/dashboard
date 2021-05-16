import React from "react";
import { Table } from "semantic-ui-react";

const tableData = [
  { name: "Payment", age: "In progress", gender: "Export" },
  { name: "FI", age: "Completed", gender: "Import" },
  { name: "Activity", age: "Failed", gender: "Export" },
  { name: "Payment", age: "Completed", gender: "Import" },
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
        data: state.data,
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

export default function ResultSetDisplay() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;
  return (
    <Table
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
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Domain
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "age" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "age" })}
          >
            Status
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "gender" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "gender" })}
          >
            Operation
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
    </Table>
  );
}
