import '../style/featured.css';


import React from 'react'

export  const Featured = () => {
  return (
    <div className='featured'>
        <video autoPlay muted loop>
            <source src="/movies/kufupanda.mp4" type="video/mp4"/>
            Sorry, your browser doesn't support videos.
        </video>

        <div className='info'>
            <img src='../movies/kufupanda.png' alt='Ku Fu Panda'/>
            <span className='desc'>
            An extreme fan of Kung Fu, Po dreams of one day becoming a master 
            worthy of fighting alongside the Five but his girth and clumsiness 
            makes this dream simply a dream and his kung fu talents reside only 
            within his knowledge of moves and artifacts.
            </span>
            <div className='buttons'>
                <button className='play'>
                    <span className="material-symbols-rounded"> play_circle </span>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <span className="material-symbols-rounded"> info </span>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}
export default Featured