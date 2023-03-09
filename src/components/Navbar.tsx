import { useEffect, useState } from 'react';
import '../style/navbar.css';

export const Navbar = () => {

    const [showOption, setShowOption] = useState(false);

    const handleMouseEnter = () => {
      setShowOption(true);
    };
  
    const handleMouseLeave = () => {
      setShowOption(false);
    };
    //========================================================================
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.pageYOffset > 0);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={isScrolled ? 'scrolled navbar' : 'navbar'}>
        <div className='containerMain'>
            <div className='left'>
               <img src='./logo.png' alt='logo'/>
               <span>Homepage</span>
               <span>Series</span>
               <span>Movies</span>
               <span>New and Popular</span>
               <span>My List</span>
            </div>
            
            <div className='right'>
                <span className="material-symbols-rounded icon"> search </span>
                <span className="material-symbols-rounded icon"> notifications </span>
                <img src='profile.webp' alt='profile'/>

                <div className='profile'>
                     <span className="material-symbols-rounded icon" 
                       onMouseEnter = {handleMouseEnter}
                       onClick = {handleMouseLeave}
                     > arrow_drop_down </span>
                    <div className='option'>
                      <div className='operation'>
                        {
                          showOption && <span>Settings</span> 
                          
                        } 
                      </div>
                        {showOption && <span>Logout</span> } 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
