import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';
import StarIcon from "@mui/icons-material/Star";
import '../App.css';

function BustripCard({ travels, type1, departuretime, arrivaltime, price, timetaken, rating }) {
    return (
        <Box className="bus-trip" sx={{ mt: "20px", borderRadius: 8, boxShadow: 3, p: 3 }}>
            <Grid container spacing={2} className='trip1'>
                <Grid item xs={12} sm={2}>
                    <strong>{travels || "ABC Travels"}</strong>
                </Grid>
                <Grid item xs={12} sm={2} style={{ fontFamily: "cursive", fontSize: "14px" }}>
                    Departure: {departuretime || "10.00 AM"}
                </Grid>
                <Grid item xs={12} sm={2} style={{ fontFamily: "cursive", fontSize: "14px" }}>
                    {timetaken}
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={2}>
                    Arrival: {arrivaltime || "10.00 PM"}
                </Grid>
                <Grid item xs={12} sm={1}>
                    {type1 || "AC"}
                </Grid>
                <Grid item xs={12} sm={1}>
                    INR {price || "1000"}
                </Grid>
                <Grid item xs={6} sm={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "22px" }}>
                        <div style={{ backgroundColor: "orange", border: "2px solid yellow", borderRadius: "3px", padding: '5px' }}>
                            {rating}
                        </div>
                        <StarIcon sx={{m:2}} />
                        <BookmarkBorderIcon />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Link to="/BasicAccordian">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                backgroundColor: "red",
                                color: "white",
                                marginTop: "5px",
                                "&:hover": {
                                    backgroundColor: "orange",
                                },
                            }}
                            className='buttonselect'>
                            View Seats
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BustripCard;
