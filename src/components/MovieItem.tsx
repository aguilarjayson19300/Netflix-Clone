import { useState } from 'react';
import '../style/listOfItems.css';

interface ListItemsProps {
  movie: {name: string, imgSrc: string, vidSrc: string};
  index: number;
}

  const Listitems: React.FC<ListItemsProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const trailer = movie.vidSrc;

  return (
    <div
      className='listItem'
      style={{ left: isHovered ? index * 225 - 50 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.imgSrc} className='movieCover'/>

      {isHovered && (
        <div className='itemInfo'>
          <video src={trailer} autoPlay={true} muted loop />
          <div className='movieInfo'>
              <div className='icons'>
                <span className="material-symbols-rounded"> play_circle </span>
                <span className="material-symbols-rounded"> add_circle </span>
                <span className="material-symbols-rounded"> recommend </span>
                <div className='moreMovieDetails'><span className="material-symbols-rounded arrow-down"> expand_circle_down </span></div>
              </div>

                <div className='itemInfoTop'>
                  <span className='match'>98% Match</span>
                  <span className="material-symbols-rounded"> looks_3 </span>
                  <span>16 Episodes</span>
                  <span className="material-symbols-rounded"> hd </span>
                </div>
                <div className='genre'>
                  <span> Kilig . Romantic . Youth</span>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listitems;
