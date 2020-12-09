import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Contact = ({ id, name, phone, remove }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Contact;
