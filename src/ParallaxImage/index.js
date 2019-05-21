import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="parallaxImage"
        offsetYMax={90}
        offsetYMin={-90}
        slowerScrollRate={true}
        tag="figure"
    >
    </Parallax>

    
);
export default ParallaxImage;
