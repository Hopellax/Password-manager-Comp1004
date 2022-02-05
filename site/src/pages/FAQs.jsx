import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function page(props) {
  return (
    <Paper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            What makes a secure password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           There are many factors that makeup a secure password such as lenghth, a mix of upper and lowercase letters, symbols and numbers!
           Using words found in the dictionary or linear number sequences can create an insecure password and it can be subjected to a dictionary attack.
           Our password generator can help you to have unique and secure passwords for every site you use. 
           However it is still important to update passwords regularly for maximum security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            How does Cypherpass keep your passwords secure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Cypherpass uses AES encyprtion so no one can see your passwords other than you meaning your infomation is secure. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Whats included with Cypherpass?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With our site, you get access to our password security checker and random password generator so you know your information is safe.
            Cypherpass also offers a free space to store all of your credentials in one place so no more forgetting passwords.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            What are the benefits of using Cypherpass?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          With Cypherpass all of your passwords are stored safely in one place.
          They are all encrypted no one will able to see your credentials other than you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  )
}

export default page;