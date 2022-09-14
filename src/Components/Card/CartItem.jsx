import React, { useEffect, useState } from "react";
import { Box, Card, makeStyles, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import GroupedButton from "./GroupButton";

const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 110,
    width: 110,
  },
  rightComponent: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const [discountvalue, setDiscountValue] = useState(0);
  // setDiscountValue(item.price.mrp)
  useEffect(() => {
    const dis = parseFloat(item.price.discount) + 10;
    // const d = parseInt(item.price.discount) + 10;
    // const di = Number(item.price.discount) + 10;
    // const a = item.price.mrp;
    const b = (item.price.mrp * dis) / 100;
    const e = item.price.mrp - b;
    const c = Math.floor(e);
    setDiscountValue(c);
  }, [discountvalue]);

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} alt="" />
        <GroupedButton />
      </Box>
      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          className={clsx(classes.greyTextColor, classes.smallText)}
          style={{ marginTop: 10 }}
        >
          Seller:RetailNet
          <span>
            <img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }} />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span className={classes.price}>₹{discountvalue}</span>
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
          <span style={{ color: "#388E3C" }}>10% off</span>
        </Typography>
        <Button
          //   variant="contained"
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
