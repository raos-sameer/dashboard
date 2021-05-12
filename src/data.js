import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
export const downloadButtonOptions = (
  <ButtonGroup
    size="small"
    color="primary"
    aria-label="large outlined primary button group"
  >
    <Button>PDF</Button>
    <Button>CSV</Button>
    <Button>Text</Button>
  </ButtonGroup>
);
export function generateRows() {
  const data = [
    {
      ID: "1",
      requestId: "ABC123",
      activity: "Export",
      domain: "Identity",
      customerId: "XYZ123",
      customerIdStatus: "Failed",
      domainStatus: "50%",
      timestamp: "2021-03-10T12:29:40+05:30",
      action: <Button color="primary">Resume</Button>,
    },
    {
      ID: "2",
      requestId: "ABC123",
      activity: "Export",
      domain: "Activity",
      customerId: "XYZ456",
      customerIdStatus: "In progress",
      domainStatus: "30%",
      timestamp: "2021-04-10T12:29:40+05:30",
      action: "None",
    },
    {
      ID: "3",
      requestId: "ABC123",
      activity: "Import",
      domain: "Payments",
      customerId: "XYZ456",
      customerIdStatus: "Completed",
      domainStatus: "26%",
      timestamp: "2021-03-15T12:29:40+05:30",
      action: downloadButtonOptions,
    },
    {
      ID: "4",
      requestId: "ABC123",
      activity: "Import",
      domain: "FI",
      customerId: "XYZ890",
      customerIdStatus: "In progress",
      domainStatus: "12%",
      timestamp: "2021-01-13T12:29:40+05:30",
      action: "None",
    },
    {
      ID: "5",
      requestId: "ABC123",
      activity: "Import",
      domain: "Identity",
      customerId: "XYZ123",
      customerIdStatus: "In progress",
      domainStatus: "87%",
      timestamp: "2021-03-30T12:29:40+05:30",
      action: "None",
    },
    {
      ID: "6",
      requestId: "DEF345",
      activity: "Export",
      domain: "Activity",
      customerId: "LMN456",
      customerIdStatus: "Completed",
      domainStatus: "66%",
      timestamp: "2020-12-10T12:29:40+05:30",
      action: downloadButtonOptions,
    },
    {
      ID: "7",
      requestId: "IJK442",
      activity: "Import",
      domain: "Activity",
      customerId: "XYZ123",
      customerIdStatus: "In progress",
      domainStatus: "43%",
      timestamp: "2021-04-22T12:29:40+05:30",
      action: "None",
    },
    {
      ID: "8",
      requestId: "IJK332",
      activity: "Export",
      domain: "Activity",
      customerId: "RET242",
      customerIdStatus: "Completed",
      domainStatus: "55%",
      timestamp: "2021-04-12T12:29:40+05:30",
      action: downloadButtonOptions,
    },
  ];

  return data;
}
