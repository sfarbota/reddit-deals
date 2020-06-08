import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./categories";
import { Row, Col } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images/category/m", false, /\.jpg/)
);

export default function ButtonBases({ changeUrl }) {
  return (
    <>
      <Row noGutters>
        {categories.map((category) => (
          <Col key={category} xs={6} md={4} lg={3}>
            <Link
              className="image-button-link"
              to={category}
              onClick={() => {
                changeUrl(category);
              }}
            >
              <div
                className="image-button"
                style={{
                  backgroundImage:
                    " url('" + images[category.toLowerCase() + ".jpg"] + "')",
                }}
              >
                <span className="image-button-text">{category}</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
