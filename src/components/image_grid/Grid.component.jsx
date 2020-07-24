import React from 'react';

import './grid.styles.css'

import image from './davi.jpg';
import image2 from './flor.jpg';
import image3 from './gato.jpg';
import image4 from './tigre.jpg';

const Grid = () => (
    <div className="teste"> 
        <div className="grid">
            <img class="inner" src={image3} alt=""/>
            <img class="inner" src={image4} alt=""/>
            <img class="inner" src={image} alt=""/>
            <img class="inner" src={image2} alt=""/>
        </div>
    </div>    
);

export default Grid;