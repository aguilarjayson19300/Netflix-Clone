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
                       onClick = {handleMouseEnter}
                       onDoubleClick= {handleMouseLeave}
                     > arrow_drop_down </span>
                    <div className='option'>
                      <div className='operation'>
                        { showOption && <span className="material-symbols-rounded"> person </span> } 
                        { showOption && <span> Manage Profile </span> }
                      </div>
                      <div className='operation'>
                        { showOption && <span className="material-symbols-rounded"> mood </span> } 
                        { showOption && <span>Transfer Account</span> } 
                      </div>
                      <div className='operation'>
                        { showOption && <span className="material-symbols-rounded"> contact_page </span> } 
                        { showOption && <span>Account</span> } 
                      </div>
                      <div className='operation'>
                        { showOption && <span className="material-symbols-rounded"> help_center </span> } 
                        { showOption && <span>Help Center</span> } 
                      </div>
                      <div className='operation'>
                        { showOption && <span className="material-symbols-rounded"> logout </span> } 
                        { showOption && <span>Logout</span> } 
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
