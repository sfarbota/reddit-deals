import React from "react";
// TODO: import {clothes, pc_parts, video_games} from '../images';
import { Image, Container, Row, Col } from "react-bootstrap";

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

export default function ButtonBases(props) {
  return (
    <Container>
      <Row noGutters>
        {images.map((image) => (
          <Col xs={6} md={4} lg={3}>
            <a
              className="image-button-link"
              href="#"
              onClick={() => {
                console.log("Clicked: " + image.title);
                props.changeUrl(image.title);
              }}
            >
              <div
                className="image-button"
                style={{
                  backgroundImage:
                    //"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))," +
                    " url('" + image.url + "')",
                }}
              >
                <span className="image-button-text">{image.title}</span>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
