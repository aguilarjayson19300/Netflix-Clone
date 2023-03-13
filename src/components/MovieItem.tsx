import { useState } from 'react';
import '../style/listOfItems.css';

interface ListItemsProps {
  movie: { name: string, imgSrc: string, vidSrc: string, top: string };
  index: number;
}

export const Listitems = ({ movie, index }: ListItemsProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const trailer = movie.vidSrc;

  return (
    <div
      className='listItem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='movieTitle'>{movie.name}</p>
      <img src={movie.imgSrc} className='movieCover' />

      {isHovered && (
        <div className='itemInfoList'>
          <video src={trailer} autoPlay={true} muted loop />
          <div className='movieInfoList'>
            <div className='iconsList'>
              <span className="material-symbols-rounded"> play_circle </span>
              <span className="material-symbols-rounded"> add_circle </span>
              <span className="material-symbols-rounded"> recommend </span>
              <div className='moreMovieDetails'><span className="material-symbols-rounded arrow-down"> expand_circle_down </span></div>
            </div>

            <div className='itemInfoTopList'>
              <span className='matchList'>98% Match</span>
              <span className="material-symbols-rounded"> looks_3 </span>
              <span>16 Episodes</span>
              <span className="material-symbols-rounded"> hd </span>
            </div>
            <div className='genreList'>
              <span> Kilig . Romantic . Youth</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listitems;
