import React from 'react';

import './grid.styles.css'

import image from './davi.jpg';
import image2 from './flor.jpg';

const Grid = () => (
    <div className="grid">
        <img class="inner" src={image} alt=""/>
        <img class="inner" src={image} alt=""/>
        <img class="inner" src={image} alt=""/>
        <img class="inner" src={image2} alt=""/>
    </div>
);

export default Grid;