import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { width } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { ClassNames } from "@emotion/react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Landing(props) {
    const [value, setValue] = React.useState(0);
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");

    const navigate = useNavigate();

    async function login() {
        const data = window.localStorage.getItem("Beanetta") || "[]";
        const users = JSON.parse(data);
        const found = users.find(x => x.email = email);
        if (found) {
            const result = (password, found.password)
            if (result) {
                props.updateUser(found);
                navigate("/Dashboard");
            }
            else {
                alert("Incorrect username or password");
            }
        } else {
            alert("Incorrect username or password");
        }
    }

    async function signup() {
        let data = window.localStorage.getItem("Beanetta") || "[]";
        data = JSON.parse(data);
        const found = data.find(x => x.email = email);

        if (found) {
            alert("User with that email already exists!")
            return;
        }

        const user = {
            email,
            password,
            name,
            surname
        };

        data.push(user)
        window.localStorage.setItem("Beanetta", JSON.stringify(data));
        props.updateUser(user);
        navigate("/Dashboard");
    }

    React.useEffect(() => {
        if (props.user)
            navigate('/dashboard')
    }, [props.user])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper style={{ padding: 0 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Sign up" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div style={{ display: "flex", flexDirection: "column", width: "60ch" }}>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="contained" style={{ paddingTop: "1em" }} onClick={login}>Login</Button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{ display: "flex", flexDirection: "column", width: "60ch" }}>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField value={surname} onChange={(e) => setSurname(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="Surname" variant="outlined" />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingBottom: "1em" }} id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="contained" style={{ paddingTop: "1em" }} onClick={signup} >Signup</Button>
                </div>
            </TabPanel>
        </Paper>
    )
}

export default Landing;