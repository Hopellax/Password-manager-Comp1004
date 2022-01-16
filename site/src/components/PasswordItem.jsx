import React from "react";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";

function PasswordItem({ data, index, updateRow, isAdd }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(data);
  const [showPassword, setShowPassword] = React.useState(true);

  function handleChange(e, name) {
    setFormData((x) => {
      let newData = { ...x };
      newData[name] = e.target.value;
      return newData;
    });
  }

  async function copyToClipboard(name) {
    await navigator.clipboard.writeText(formData[name]);
  }

  function save(e) {
    e.preventDefault();
    updateRow(formData, index);
    setModalOpen(false);
  }

  function deleteItem(e) {
    e.preventDefault();
    setModalOpen(false);
    updateRow(null, index);
  }

  if (isAdd) {
    return (
      <Paper className="center pointer paper" key={`password-list-${index}`}>
        <div className="flex-col" style={{ justifyContent: "space-between" }}>
          <div className="flex-row">
            <AddCircleOutlineIcon style={{ margin: "auto" }} />
          </div>
          <p>Add New</p>
        </div>
      </Paper>
    );
  }
  return (
    <>
      <div onClick={() => setModalOpen(true)}>
        <Paper className="center pointer paper">
          <h1>{data.sitename}</h1>
        </Paper>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Paper
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
          }}
        >
          <form className="create-new-form create-new-form--center">
            <p>Site Name:</p>
            <TextField
              id="site-name"
              variant="outlined"
              value={formData.sitename}
              onChange={(e) => handleChange(e, "sitename")}
              style={{ width: "100%" }}
            />
            <p>Site URL: </p>
            <TextField
              id="site-url"
              variant="outlined"
              value={formData.siteurl}
              onChange={(e) => handleChange(e, "siteurl")}
              style={{ width: "100%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        window.open(formData.siteurl, "_blank").focus();
                      }}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <p>Username: </p>
            <TextField
              id="username"
              variant="outlined"
              value={formData.username}
              onChange={(e) => handleChange(e, "username")}
              style={{ width: "100%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => copyToClipboard("username")}>
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <p>Password: </p>
            <TextField
              id="password"
              variant="outlined"
              type={showPassword ? "password" : ""}
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              style={{ width: "100%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((x) => !x)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                    <IconButton onClick={() => copyToClipboard("password")}>
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div></div>
            <ButtonGroup>
              <Button color="warning" variant="outlined" onClick={deleteItem}>
                <DeleteIcon /> DELETE
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => setModalOpen(false)}
              >
                CLOSE
              </Button>
              <Button
                color="success"
                variant="outlined"
                type="submit"
                onClick={save}
              >
                SAVE
              </Button>
            </ButtonGroup>
          </form>
        </Paper>
      </Modal>
    </>
  );
}

export default PasswordItem;
