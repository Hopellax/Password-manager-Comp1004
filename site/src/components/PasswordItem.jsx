import React from "react";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Modal, TextField } from "@mui/material";

function PasswordItem({ data, index, updateRow, isAdd }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(data);
  console.log(data)
  if (isAdd) {
    return (
      <Paper className="center pointer paper">
        <div className="flex-col" style={{ justifyContent: "space-between" }}>
          <div className="flex-row">
            <AddCircleOutlineIcon style={{ margin: 'auto' }} />
          </div>
          <p>Add New</p>
        </div>
      </Paper>
    )
  }
  return (
    <>
      <div onClick={() => setModalOpen(true)}>
        <Paper className="center pointer paper">
          <h1>{data.sitename}</h1>
        </Paper>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Paper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
          }}
        >
          <form className="create-new-form create-new-form--center">
            <p>Site Name: </p>
            <TextField id="site-name" variant="outlined" value={formData.sitename} />
            <p>Username: </p>
            <TextField id="username" variant="outlined" value={formData.username} />
            <p>Password: </p>
            <TextField id="password" variant="outlined" type="password" value={formData.password} />
          </form>
        </Paper>
      </Modal>
    </>
  )
}

export default PasswordItem;