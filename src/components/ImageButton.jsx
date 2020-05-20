import React from 'react';
import { Link } from 'react-router-dom';
import { images } from './categories';
// TODO: import {clothes, pc_parts, video_games} from '../images';
import { Row, Col } from 'react-bootstrap';

export default function ButtonBases({ changeUrl }) {
  return (
    <>
      <Row noGutters>
        {images.map(image => (
          <Col key={image.title} xs={6} md={4} lg={3}>
            <Link
              className="image-button-link"
              to={image.title}
              onClick={() => {
                changeUrl(image.title);
              }}
            >
              <div
                className="image-button"
                style={{
                  backgroundImage:
                    //"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))," +
                    " url('" + image.url + "')"
                }}
              >
                <span className="image-button-text">{image.title}</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
