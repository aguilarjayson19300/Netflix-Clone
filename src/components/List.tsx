import { useRef, useState } from 'react';
import '../style/list.css';
import ListItems from './ListItems';

interface ListProps {}

const List: React.FC<ListProps> = () => {
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
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <span
          className='material-symbols-rounded sliderArrow left'
          onClick={() => handleClick('left')}
        >
          chevron_left
        </span>

        <div className='listContainer' ref={listRef}>
          <ListItems index={0}/>
          <ListItems index={1}/>
          <ListItems index={2}/>
          <ListItems index={3}/>
          <ListItems index={4}/>
          <ListItems index={5}/>
          <ListItems index={6}/>
          <ListItems index={7}/>
          <ListItems index={8}/>
          <ListItems index={9}/>
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
