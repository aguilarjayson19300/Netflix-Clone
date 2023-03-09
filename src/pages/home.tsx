import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
import '../App.css';
import '../style/home.css';
import '../style/font.css';
import '../style/icon.css';

export const Home = () => {
  return (

    <div className='home'>
      <Navbar />
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home