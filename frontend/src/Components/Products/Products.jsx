import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import cake1 from '../../assets/Butterfly.jpeg';
import cake2 from '../../assets/LashGoddess.jpeg';
import cake3 from '../../assets/RoseCake.jpg';

function Products() {
  const images = [cake1, cake2, cake3];

  return (
    <div>
      <Slideshow images={images} />
    </div>
  );
}

export default Products;