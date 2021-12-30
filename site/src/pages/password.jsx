import { Box, Button, Modal, Paper, TextField } from "@mui/material";
import React from "react";
import PasswordItem from "../components/PasswordItem";

function Password(props) {
	const [data, setData] = React.useState([]);
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const [formData, setFormData] = React.useState({});
	// This function will only run once on load

	React.useEffect(() => {
		const rawData = window.localStorage.getItem("Bean");
		if (rawData) {
			let json = JSON.parse(rawData);
			setData(json);
		}
	}, []);

	// This function  will run every time data is changed
	React.useEffect(() => {
		// if data isn't null | undefined, save it
		if (data) {
			let jsonString = JSON.stringify(data);
			window.localStorage.setItem("Bean", jsonString);
		}
	}, [data]);

	function updateRow(data, index) {
		setData(x => {
			x[index] = data;
			return [...x];
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		setData([...data, formData]);
		setModalIsOpen(false);
		setFormData({});
	}

	function handleChange(name, e) {
		formData[name] = e.target.value;
		setFormData({ ...formData });
	};

	return (
		<div className="grid--4col">
			<div onClick={() => setModalIsOpen(true)}>
				<PasswordItem isAdd />
			</div>
			{data.map((row, index) => <PasswordItem data={row} index={index} updateRow={updateRow} />)}
			<Modal
				open={modalIsOpen}
				onClose={() => setModalIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Paper style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
				}}>
					<h2>Add a New Site</h2>
					<form onSubmit={handleSubmit} className="create-new-form">
						<TextField onChange={(e) => handleChange("sitename", e)} color="secondary" id="sitename" label="Site Name" variant="outlined" style={{ gridColumn: "span 2" }} />
						<TextField onChange={(e) => handleChange("username", e)} color="secondary" id="username" label="Username" variant="outlined" />
						<div></div>
						<TextField onChange={(e) => handleChange("password", e)} color="secondary" id="password" label="Password" variant="outlined" type="password" />
						<div></div>
						<div></div>
						<Button color="secondary" variant="outlined" type="submit" >Submit</Button>
					</form>
				</Paper>
			</Modal>
		</div>
	)
}

export default Password;