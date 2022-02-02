import React from "react";
import Slider from '@mui/material/Slider';
import { Button, IconButton, InputAdornment, OutlinedInput, Paper, Snackbar, TextField } from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";

function Page(props) {
  const [length, setLength] = React.useState(20);
  const [Numberofpasswords, setNumberofpasswords] = React.useState(1);
  const [passwords, setPasswords] = React.useState();
  const [showToast, setShowToast] = React.useState(false);

  function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*@",
      Password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      Password += charset.charAt(Math.floor(Math.random() * n));
    }
    return Password;
  }

  async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
    setShowToast(true);
  }

  return (
    <Paper>
      <form onSubmit={function (e) {
        e.preventDefault()
        let newPasswords = [];
        for (let i = 0; i < Numberofpasswords; i++) {
          newPasswords.push(generatePassword());
        }
        setPasswords(newPasswords);

      }}>
        <h2>Password length: {length}</h2>
        <Slider value={length} onChange={(e) => setLength(Number(e.target.value))} aria-label="Default" valueLabelDisplay="auto" max={35} min={8} />
        <h2>Number of passwords to create: {Numberofpasswords}</h2>
        <Slider value={Numberofpasswords} onChange={(e) => setNumberofpasswords(Number(e.target.value))} aria-label="Default" valueLabelDisplay="auto" max={8} min={1} />
        <div style={{ margin: "2em", display: "grid", gridTemplateColumns: "1fr 1fr", placeItems: "center", rowGap: "1em" }}>
          {passwords && passwords.map(password => (
            <OutlinedInput
              value={password}
              style={{ width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="copy to clipboard"
                    onClick={() => copyToClipboard(password)}
                    edge="end"
                  >
                    <ContentCopy />
                  </IconButton>
                </InputAdornment>
              }
            />
          ))}
        </div>
        <Button variant="contained" type="submit">Generate password</Button>
      </form>
      <Snackbar
        open={showToast}
        autoHideDuration={6000}
        onClose={() => setShowToast(false)}
        message="Copied to clipboard"
        action={null}
      />
    </Paper>
  )
}

export default Page;