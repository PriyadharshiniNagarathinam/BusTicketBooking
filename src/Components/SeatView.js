import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Available Seats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{
                        height:"100vh",
                        backgroundImage: `url("https://www.brolmo.com/app/web/upload/medium/5_110ba627dd1888ca29049cc1878d7fb3.jpg")`,
                        backgroundRepeat: "no-repeat", backgroundPosition: "cover"
                    }}>

                    </div>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}