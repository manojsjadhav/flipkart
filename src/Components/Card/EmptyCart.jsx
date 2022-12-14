import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const useStyle = makeStyles({
  component: {
    width: "80%%",
    height: "65vh",
    background: "#fff",
    margin: "80px 140px",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
    "& > *": {
      marginTop: 10,
      fontSize: 14,
    },
  },
  button:{
    marginTop:20,
    padding:'12px 70px',
    borderRadius:2,
    fontSize:12,
    background:'#2874f0',
    color:'#fff'
  }
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const classes = useStyle();
  const navigate = useNavigate();

  const addItem = () => {
    navigate("/");
  };

  return (
    <>
    <Header />
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} className={classes.image} alt="" />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now.</Typography>
        <Button className={classes.button} variant="contained" onClick={() => addItem()}>
          Shop now
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default EmptyCart;
