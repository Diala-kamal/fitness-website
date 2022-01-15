import React from "react";
import { Button } from "react-bootstrap";

const Btn = (props) => {
  return (
    <div>
      <Button variant="primary" size="lg">
        {props.text}
      </Button>
    </div>
  );
};

export default Btn;
