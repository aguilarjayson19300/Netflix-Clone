import '../style/modal.css';

interface MovieModalProps {
    modalState: boolean;
    modalStatus: () => void;
}

export const MovieModal = ({
    modalStatus
}: MovieModalProps) => {

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="material-symbols-rounded close" onClick={modalStatus}> cancel </span>
                </div>
                <img src='../movies/kufupanda.png' alt='Ku Fu Panda' />
                <div className='MovieDetails'>
                    <div className='icons'>
                        <span className="material-symbols-rounded"> play_circle </span>
                        <span className="material-symbols-rounded"> add_circle </span>
                        <span className="material-symbols-rounded"> recommend </span>
                    </div>
                    <div className='itemInfoTop'>
                        <span className='match'>98% Match</span>
                        <span className="material-symbols-rounded"> looks_3 </span>
                        <span>16 Episodes</span>
                        <span className="material-symbols-rounded"> hd </span>
                    </div>
                </div>
                <div className="modal-content">
                    <span className="material-symbols-rounded close" onClick={modalStatus}> cancel </span>
                </div>
                <video autoPlay muted loop>
                    <source src="/movies/kufupanda.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default MovieModal;