import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="parallaxImage"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        maxWidth={'auto'}
        maxHeight={'auto'}
        tag="figure"
    >
        <img src="https://i.imgur.com/cXGyLXr.jpg" />
    </Parallax>
);
export default ParallaxImage;
