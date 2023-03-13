import '../style/modal.css';

interface MovieModalProps {
    modalState: boolean;
    modalStatus: () => void;
}

export const MovieModal = ({
    modalStatus,
    modalState
}: MovieModalProps) => {
    return (
        <>
            <div className='modalContainer'>
                <div onClick={modalStatus} className="overlay"></div>
                <div className="modal">
                    <img className='imgModal' src='../movies/kufupanda.png' alt='Ku Fu Panda' />
                    <div className='MovieDetailsModal'>
                        <div className='iconsModal'>
                            <span className="material-symbols-rounded playIcon"> play_circle </span>
                            <span className="material-symbols-rounded"> add_circle </span>
                            <span className="material-symbols-rounded"> recommend </span>
                        </div>
                    </div>
                    <video autoPlay muted loop>
                        <source src="/movies/kufupanda.mp4" type="video/mp4" />
                    </video>
                    
                    <div className='movieInfo'>
                        <div className='firstInfo'>
                            <div className='rating'>
                                <span className='match'>98% Match</span>
                                <span className="material-symbols-rounded match"> looks_3 </span>
                                <span>16 Episodes</span>
                                <span className="material-symbols-rounded match"> hd </span>
                            </div>
                            <div className='plotModal'>
                                An extreme fan of Kung Fu, Po dreams of one day becoming a master worthy of fighting alongside the Five but his girth and clumsiness makes this dream simply a dream and his kung fu talents reside only within his knowledge of moves and artifacts.
                            </div>
                        </div>
                        <div className='secondInfo'>
                            <p className='gray'>Cast:</p>
                            <p>Kim Hee-ai, Park Hae-joon, Han so-hee, more</p>
                            <p className='gray'>Genre:</p>
                            <p>Anime, Action Pantacy</p>
                            <p className='gray'>This show is:</p>
                            <p>Dark, Action and Dramatic</p>
                        </div>
                    </div>
                    <div className='labelModal'>
                        <h3>Epidodes</h3>
                        <h3>Kunf Fu Panda</h3>
                    </div>
                    <div className='episodes'>
                        <div className='episodesNumber'>1</div>
                        <div className='episodeImg'><img src='../movies/kufupandatm.jpg'/></div>
                        <div className='time'>
                            <div className='labelPlot'>
                                <span className='number'>Episode 1</span>
                                <span className='minutes'>88 mins</span>
                            </div>
                            <div className='episodesPlot'>
                                An extreme fan of Kung Fu, Po dreams of one day becoming a master worthy of fighting alongside the Five but his girth and clumsiness makes this dream simply a dream and his kung fu talents reside only within his knowledge of moves and artifacts.
                            </div>
                        </div>
                    </div>
                    <div className='episodes'>
                        <div className='episodesNumber'>2</div>
                        <div className='episodeImg'><img src='../movies/kufupandatm.jpg'/></div>
                        <div className='time'>
                            <div className='labelPlot'>
                                <span className='number'>Episode 2</span>
                                <span className='minutes'>80 mins</span>
                            </div>
                            <div className='episodesPlot'>
                                An extreme fan of Kung Fu, Po dreams of one day becoming a master worthy of fighting alongside the Five but his girth and clumsiness makes this dream simply a dream and his kung fu talents reside only within his knowledge of moves and artifacts.
                            </div>
                        </div>
                    </div>
                    <div className='episodes'>
                        <div className='episodesNumber'>3</div>
                        <div className='episodeImg'><img src='../movies/kufupandatm.jpg'/></div>
                        <div className='time'>
                            <div className='labelPlot'>
                                <span className='number'>Episode 3</span>
                                <span className='minutes'>87 mins</span>
                            </div>
                            <div className='episodesPlot'>
                                An extreme fan of Kung Fu, Po dreams of one day becoming a master worthy of fighting alongside the Five but his girth and clumsiness makes this dream simply a dream and his kung fu talents reside only within his knowledge of moves and artifacts.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieModal;