import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
// import {clothes, pc_parts, video_games} from '../images';

const images = [
  {
    url:
      "https://static.makeuseof.com/wp-content/uploads/2020/02/basic-parts-pc-994x400.jpg",
    title: "r/buildapcsales",
    json: "https://www.reddit.com/r/buildapcsales/hot.json",
    width: "33%",
  },
  {
    url:
      "https://ourplanetary.com/wp-content/uploads/2018/03/jbareham_171020_2073_0040_3.0.jpg",
    title: "r/GameSale",
    json: "https://www.reddit.com/r/gamesale/new.json",
    width: "33%",
  },
  {
    url: "https://storage.needpix.com/rsynced_images/records-925206_1280.jpg",
    title: "r/VinylDeals",
    json: "https://www.reddit.com/r/VinylDeals/new.json",
    width: "33%",
  },
  {
    url:
      "https://c1.peakpx.com/wallpaper/182/439/685/playing-sony-console-controller-wallpaper-preview.jpg",
    title: "r/PS4Deals",
    json: "https://www.reddit.com/r/PS4Deals/new.json",
    width: "33%",
  },
  {
    url:
      "https://get.pxhere.com/photo/technology-game-joystick-controller-gadget-steering-wheel-gaming-x1-xbox-one-game-controller-xbox-360-electronic-device-playstation-accessory-984817.jpg",
    title: "r/GreatXboxDeals",
    json: "https://www.reddit.com/r/GreatXboxDeals/new.json",
    width: "33%",
  },
  {
    url: "https://p0.piqsels.com/preview/833/512/948/shoes-shoe-store-rack.jpg",
    title: "r/SneakerDeals",
    json: "https://www.reddit.com/r/SneakerDeals/new.json",
    width: "33%",
  },
  {
    url: "https://live.staticflickr.com/775/22706195208_cb5ed56972_k.jpg",
    title: "r/FrugalFemaleFashion",
    json: "https://www.reddit.com/r/FrugalFemaleFashion/new.json",
    width: "33%",
  },
  {
    url:
      "https://c.pxhere.com/images/d7/3b/2023f089c1125af2616970ec65dd-1446199.jpg!d",
    title: "r/travel_deals",
    json: "https://www.reddit.com/r/travel_deals/new.json",
    width: "33%",
  },
  {
    url:
      "https://c.pxhere.com/photos/35/74/grocery_store_supermarket_vegetable_shop_tomato_fruit_store_market-1379249.jpg!d",
    title: "r/OnlineGroceryDeals",
    json: "https://www.reddit.com/r/OnlineGroceryDeals/new.json",
    width: "33%",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Home_decor_41550020960.jpg",
    title: "r/homedecordeals",
    json: "https://www.reddit.com/r/homedecordeals/new.json",
    width: "33%",
  },
  {
    url:
      "https://wp-en.oberlo.com/wp-content/uploads/2018/04/shutterstock_466589549.jpg",
    title: "r/frugalmalefashion",
    json: "https://www.reddit.com/r/frugalmalefashion/new.json",
    width: "33%",
  },
  {
    url: "https://live.staticflickr.com/5566/14458323961_9f880db6f8.jpg",
    title: "r/steamdeals",
    json: "https://www.reddit.com/r/steamdeals/new.json",
    width: "33%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          onClick={() => {
            console.log("Clicked: " + image.title);
            props.changeUrl(image.title);
          }}
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
