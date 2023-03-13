import { useRef, useState } from 'react';
import '../style/list.css';
import ListItems from './MovieItem';

interface ListProps {
  category: string,
  movies: { name: string, imgSrc: string, vidSrc: string, top: string }[],
}

const List = (moviesByCategory: ListProps ) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [slideNumber, setSliderNumber] = useState<number>(0);

  const handleClick = (direction: string): void => {
    const distance = (listRef.current?.getBoundingClientRect().x ?? 0) - 50;

    if (direction === 'left' && listRef.current && slideNumber > 0) {
      setSliderNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === 'right' && listRef.current && slideNumber < 5) {
      setSliderNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>{moviesByCategory.category}</span>
      <div className='wrapper'>
        <span
          className='material-symbols-rounded sliderArrow left'
          onClick={() => handleClick('left')}
        >
          chevron_left
        </span>

        <div className='listContainer' ref={listRef}>
          {moviesByCategory.movies.map((item) => (
            <ListItems movie={item} index={0} />
          ))}
        </div>

        <span
          className='material-symbols-rounded sliderArrow right'
          onClick={() => handleClick('right')}
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default List;
