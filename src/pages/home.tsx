import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import MovieList from '../components/MovieList';
import '../App.css';
import '../style/home.css';
import '../style/font.css';
import '../style/icon.css';
import '../style/transition.css';
import { moviesByCategories } from '../services/data';

export const Home = () => {
  return (

    <div className='home'>
      <Navbar />
      <Featured />
        {moviesByCategories.map((moviesByCategory) => (
          <MovieList category={moviesByCategory.category} movies={moviesByCategory.movies} />
        ))}
    </div>
  )
}

export default Home