import React from "react";
import {
  Table,
  TextArea,
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

const statusOptions = [
  { key: "c", text: "Completed", value: "completed" },
  { key: "f", text: "Failed", value: "failed" },
  { key: "i", text: "In Progress", value: "inprogress" },
];
const domainOptions = [
  { key: "p", text: "Payment", value: "payment" },
  { key: "a", text: "Activity", value: "activity" },
  { key: "f", text: "FI", value: "fi" },
];
const timerange = [
  { text: "1h", value: "1h" },
  { text: "2h", value: "2h" },
  { text: "3h", value: "3h" },
  { text: "Customized Range", value: "customized" },
];

const handleChange = (e) => console.log("Sameer s");
export default function SearchInputs() {
  return (
    <div>
      <Grid.Row>
        <Grid.Column>
          <Header
            style={{ marginBottom: "2%", color: "blue" }}
            as="h1"
            dividing
          >
            CSTS Data Migration
          </Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header as="h3">Search by: </Header>
          <Message inverted color="blue">
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  multiple
                  label="Request Id"
                  placeholder="Request Id"
                />
                <Form.Field
                  control={Input}
                  label="Customer Id"
                  placeholder="Customer Id"
                />
                <Form.Field
                  control={Select}
                  label="Status"
                  options={statusOptions}
                  placeholder="None"
                  multiple
                />
                <Form.Field
                  control={Select}
                  label="Domain"
                  options={statusOptions}
                  placeholder="None"
                  multiple
                />
              </Form.Group>
              <Form.Group inline>
                <label>Time Range</label>
                <Form.Field
                  control={Select}
                  options={timerange}
                  placeholder="None"
                />
                <input disabled type="datetime-local"></input>
                <input type="datetime-local"></input>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <Button content="Submit" primary />
                </Form.Field>
                <Form.Field>
                  <Button type="submit">Reset</Button>
                </Form.Field>
              </Form.Group>
            </Form>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
}
