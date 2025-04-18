import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/single-item.css';

const SingleItem = ({ _id, name, image, banner, artist, idPath}) => {


    return (
        <Link to={`${idPath}/${_id}`} className="single-item">

            <div className='single-item__div-image-button'>

                <div className='single-item__div-image'>
                    <img
                        className="single-item__image"
                        src={image}
                        alt={`imagem do artista ${name}`}
                    />
                </div>

                <FontAwesomeIcon icon={faCirclePlay} className="single-item__icon" />
            </div>

            <div className='single-item__texts'>
                <div className='single-item__2lines'>
                    <p className='single-item__title'> {name} </p>
                </div>
                <p className='single-item__type'>{artist ?? 'Artista'}</p>
            </div>

        </Link>
    )
}

export default SingleItem;