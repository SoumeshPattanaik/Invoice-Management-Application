import { Button } from '@mui/material'
import React from 'react'


function Predict(props) {
  return (
    <div>
      <Button
        disabled={!props.currentRow}
        variant="contained"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        size="medium"
      >
        Predict
      </Button>
    </div>
  );

 }

 export default Predict;