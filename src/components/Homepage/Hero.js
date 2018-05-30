import * as React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import { imgDir, homepageCarousel } from '../../data';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Hero extends React.Component {
  render() {
    return (
      <section id="Hero">
        <Slick {...sliderSettings}>
          {homepageCarousel.map(item => (
            <Link to={item.link} key={item.img}>
              <img key={item.img} src={imgDir + item.img} alt={item.name} />
            </Link>
          ))}
        </Slick>
      </section>
    );
  }
}
