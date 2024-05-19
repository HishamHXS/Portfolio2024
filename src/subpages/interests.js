import React from 'react';
import duneCover from '../assets/dune.jpg';
import sixCrows from '../assets/sixcrows.jpg';
import aot from '../assets/aot.jpg'; 
import jjk from '../assets/jjk.jpg';   
import spiderman from '../assets/spiderman.jpg';
import fourthWing from '../assets/FourthWing.jpg';
import nightCircus from '../assets/TheNightCircus.jpg';
import '../styles/interests.css';
function Interests() {
    const bookCovers = [
        duneCover,
        sixCrows,
        fourthWing,
        nightCircus,
    ];

    const showCovers = [
        jjk,
        aot,
        spiderman,
       
    ];

    return (
        <div className="interests">
            <p> Some of my favorite books: </p>
        <div className=" book-grid">
            {bookCovers.map((cover, index) => (
                <img key={index} src={cover} alt={`Book Cover ${index + 1}`} />
            ))}
        </div>

        <p> Some of my favorite shows: </p>
        <div className="shows-grid">
            {showCovers.map((cover, index) => (
                <img key={index} src={cover} alt={`Book Cover ${index + 1}`} />
            ))}
        </div>
        </div>
    );
}

export default Interests;