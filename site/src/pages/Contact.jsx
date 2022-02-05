import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Snackbar, TextField } from "@mui/material";
import React from "react";

function Page(props) {
  const [selectValue, setSelectValue] = React.useState("");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSnackbarOpen(true)
    e.target.reset();
  }
  return (
    <Paper>
      <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1em" }} onSubmit={handleSubmit}>
        <FormControl fullWidth className="col-2">
          <InputLabel id="demo-simple-select-label">Please select what your query is about?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="Please select what your querys about"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <MenuItem value="Account">Account issues</MenuItem>
            <MenuItem value="Cancel">Cancel or pause my membership</MenuItem>
            <MenuItem value="General">General issue</MenuItem>
            <MenuItem value="Delete">Delete my account</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="row-2 col-2"
          required
          id="outlined-required"
          label="Please describe the issue"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="First name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Last name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Email address"
          defaultValue=""
        />
        <Button type="submit" variant="contained">Submit</Button>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Thankyou your query has been recieved we will aim to respond within 3 working days."
        />
      </form>
    </Paper>
  )
}

export default Page;