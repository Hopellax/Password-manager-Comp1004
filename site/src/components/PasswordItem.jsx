import React from "react";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function PasswordItem({ data, index, updateRow, isAdd }) {
  if(isAdd) {
    return (
        <Paper className="center pointer">
          <div className="flexCol">
            <AddCircleOutlineIcon style={{margin: 'auto'}} />
            <p>Add New</p>
          </div>
        </Paper>
    )
  }
  return (
    <Paper>
      <h1>{data.sitename}</h1>
    </Paper>
  )
}

export default PasswordItem;