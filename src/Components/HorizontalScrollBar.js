import React from "react";
import Slider from "react-slick";
import { Paper, Button, Grid } from "@mui/material";
import "../index.css";
function Item(props) {
  return (
    <Paper
      elevation={2}
      sx={{
        backgroundImage:
          "linear-gradient(71.04deg, rgb(134, 0, 62) -6.92%, rgb(210, 81, 141) 109.43%)",
        width: "300px",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        color: "white",
        fontFamily: "Montserrat",
        textAlign: "center",
      }}
    >
      <Grid
        maxWidth="sm"
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <img src={props.item.image} alt={props.item.alternative} />
        </Grid>
        <Grid item>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <h3
            style={{
              border: "2px dashed white",
              padding: "4px",
              display: "inline",
            }}
          >
            {props.item.code}
          </h3>
        </Grid>
      </Grid>
      {/* <Button className="CheckButton">VIEW DETAILS</Button> */}
    </Paper>
  );
}

const AutoPlay = () => {
  var items = [
    {
      image:
        "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      name: "Save up to Rs 250 on bus tickets",
      description: "Valid till 30 Nov",
      alternative: "image1",
      code: "SUPERHIT",
      bac: "linear-gradient(71.04deg, rgb(134, 0, 62) -6.92%, rgb(210, 81, 141) 109.43%)",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image:
        "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "FIRST",
      bac: "linear-gradient(71.04deg, rgb(60, 16, 83) -6.92%, rgb(173, 83, 137) 109.43%)",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
      bac: "linear-gradient(71.04deg, rgb(60, 16, 83) -6.92%, rgb(173, 83, 137) 109.43%)",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
      bac: "linear-gradient(71.04deg, rgb(60, 16, 83) -6.92%, rgb(173, 83, 137) 109.43%)",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
      bac: "linear-gradient(71.04deg, rgb(60, 16, 83) -6.92%, rgb(173, 83, 137) 109.43%)",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
      bac: "linear-gradient(71.04deg, rgb(60, 16, 83) -6.92%, rgb(173, 83, 137) 109.43%)",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
    nextArrow: <div className="next-slick-arrow"> ⫸ </div>,
    prevArrow: <div className="prev-slick-arrow"> ⫷ </div>,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Item item={items[0]}></Item>
        </div>
        <div>
          <Item item={items[1]}></Item>
        </div>
        <div>
          <Item item={items[2]}></Item>
        </div>
        <div>
          <Item item={items[3]}></Item>
        </div>
        <Item item={items[4]}></Item>
        <div>
          <Item item={items[0]}></Item>
        </div>
        <div>
          <Item item={items[0]}></Item>
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
