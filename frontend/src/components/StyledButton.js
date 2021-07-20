import React from "react";
import test from "../api/connect";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

export default function StyledButton() {
  const handleClick = async () => {
    try {
      const response = await test();
      alert(response.data.info);
    } catch {
      alert("Connect failed");
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Connect Backend
      </Button>
    </div>
  );
}
