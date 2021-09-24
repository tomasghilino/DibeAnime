import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AnimeCard.css';

const ModalAnimeCard = (props) => {
  const {
    image_url,
    title,
    synopsis,
    type,
    episodes,
    score,
    rated,
    members,
    url,
  } = props.anime;

  const handleClick = () => {
    window.open(url);
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="d-md-flex mb-4 animecardmodal-bg p-4 ">
            <div className="text-center">
              <img
                src={image_url}
                alt={`imagen anime ${title}`}
                className="mb-4"
              />
            </div>
            <div className="container lh-1 fs-4 fw-bold flex-column justify-content-between d-flex mb-4">
              <p>&#11088; {score}</p>
              <p>
                Type: <span className="fw-normal fs-5">{type}</span>
              </p>
              <p>
                Episodes: <span className="fw-normal fs-5">{episodes}</span>
              </p>
              <p>
                Rated: <span className="fw-normal fs-5">{rated}</span>
              </p>
              <p>
                Followers: <span className="fw-normal fs-5">{members}</span>
              </p>

              <button className="btn btn-outline-primary" onClick={handleClick}>
                Ver en MyAnimeList
              </button>
            </div>
          </div>

          <h3 className="sinopsis p-2 mb-2">Sinopsis</h3>
          <p>{synopsis}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAnimeCard;
