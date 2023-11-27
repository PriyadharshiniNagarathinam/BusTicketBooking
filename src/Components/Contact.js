import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default function ContactPage(){
    return(
        <div style={{margin:"20px"}}>
            <div style={{backgroundImage:'url("https://getwallpapers.com/wallpaper/full/4/c/8/1267784-electric-blue-wallpaper-1920x1200-image.jpg"',
            backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100% auto",height:"50vh"}}>
                <div style={{padding:"100px",color:"white",fontSize:"25px",textAlign:"center"}}>
                    <h2>Contact us</h2>
                </div>
            </div>
            <div style={{textAlign:"center",margin:"20px"}}>
                <h3>Let's Start a Conversation</h3>
            </div>
            <div style={{justifyContent:"center",margin:"20px"}}>
            <h3>Rate Us</h3>
            <Stack spacing={2}>
                <Rating name="half-rating" />
            </Stack>
            </div>
            <div style={{margin:"20px"}}>
                Ask How can we Help you?
            </div>
        </div>
    );
}