import React from "react";
import Slider from '@mui/material/Slider';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, OutlinedInput, Paper, Snackbar, TextField } from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
function checkStrength(password) {
  var strength = 0
  if (!password) return 0;

  if (password.length < 6) {
    return 'Too short'
  }

  if (password.length > 7) strength += 1

  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

  if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1

  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

  if (strength < 2) {
    return 'Weak'
  } else if (strength == 2) {
    return 'Good'
  } else {
    return 'Strong'
  }
}
function Page(props) {
  const [length, setLength] = React.useState(20);
  const [Numberofpasswords, setNumberofpasswords] = React.useState(1);
  const [passwords, setPasswords] = React.useState();
  const [showToast, setShowToast] = React.useState(false);
  const [useSymbols, setUseSymbols] = React.useState(true)
  const [password, setPassword] = React.useState();

  function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    if (useSymbols) {
      charset += "!£$%^&*@"
    }
    var Password = "";
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
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", gap: "1em" }}>
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
          <h2></h2>
          <FormControlLabel control={<Checkbox checked={useSymbols} onChange={() => setUseSymbols(x => !x)} />} label="Include symbols?" />
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
      <Paper>
        <h2>Password Strength Indicator</h2>
        <h2></h2>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          color="secondary"
          label="Password"
          variant="outlined"
        />
        <p>{checkStrength(password)}</p>
        <p> Using our password strength indicator, you can check the strength of your passwords for maxium security! </p>
        {password && password.length > 8 ?

          <p>✔️ Length greater than 8 characters</p> :
          <p>❌ Length shorter than 8 characters</p>
        }
        {password && password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~])/) ?
          <p>✔️ Contains symbols</p> :
          <p>❌ Doesn't contain any symbols</p>
        }
        {password && password.match(/(.*[1,2,3,4,5,6,7,8,9,0])/) ?
          <p>✔️ Contains Numbers</p> :
          <p>❌ Doesn't contain any numbers</p>
        }
      </Paper>
    </div>
  )
}

export default Page;