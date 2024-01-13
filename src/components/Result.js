import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/login-signup-style.css';
import { Helmet } from 'react-helmet';

const Destination = () => {
  useEffect(() => {
    const startDate = new Date(localStorage.getItem('startDate'));
    const endDate = new Date(localStorage.getItem('endDate'));
    const selectedProvince = localStorage.getItem('selectedProvince');

    const startDateElement = document.getElementById('startDate');
    const endDateElement = document.getElementById('endDate');
    const provinceElement = document.getElementById('selectedProvince');

    startDateElement.textContent = startDate.toDateString();
    endDateElement.textContent = endDate.toDateString();
    provinceElement.textContent = selectedProvince;

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (selectedProvince) {
      fetch(`http://localhost:3000/All_Provinces`)
        .then(response => response.json())
        .then(data => {
          const selected = data.find(item => item.title === selectedProvince);
          if (selected) {
            const famousPlacesDiv = document.getElementById('content');
            let placesToDisplay = Math.min(diffDays + 1, 8);
            if (diffDays >= 1 && diffDays <= 7) {
              placesToDisplay = diffDays + 2;
            }
            const randomIndices = Array.from({ length: selected.famous_places.length }, (_, i) => i);
            shuffleArray(randomIndices);

            for (let i = 0; i < placesToDisplay; i++) {
              const placeIndex = randomIndices[i];
              const place = selected.famous_places[placeIndex];

              const title = place.name;
              const imageSrc = place.image;

              const description = place.description;
              const mapURL = place.map;

              famousPlacesDiv.appendChild(
                <div
                  key={i}
                  data-description={description}
                  data-mapURL={mapURL}
                  className="famous-place"
                  onClick={() => handleFamousPlaceClick(title, imageSrc, description, mapURL)}
                >
                  <h2>{title}</h2>
                  <img src={imageSrc} alt={title} />
                </div>
              );
            }
          } else {
            console.log("Selected province not found!");
          }
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    } else {
      console.log("No selected province found!");
    }
  }, []);

  const handleFamousPlaceClick = (name, imageSrc, description, mapURL) => {
    Swal.fire({
      title: 'Detail of the place',
      html: (
        <div>
          <h2>{name}</h2>
          <img src={imageSrc} alt={name} className="sweetalert_page" />
          <p>{description}</p>
          <a href={mapURL} target="_blank" rel="noopener noreferrer">
            View Map
          </a>
        </div>
      ),
      confirmButtonText: 'Okay',
    });
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <>
      <Helmet>
        <title>Destination</title>
        <link rel="stylesheet" href="/Vith Vann/style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.css" />
      </Helmet>
      <div className="content">
        <Container>
          <Row className="header">
            <Col md={6} className="menu">
              <div className="box box1">
                <p>Schedule</p>
              </div>
              <div className="box box2">
                <p>Provinces</p>
              </div>
              <div className="box box3">
                <p>Place</p>
              </div>
            </Col>
          </Row>
          <div className="info_dynamic">
            <Row>
              <Col md={6} className="destination-info">
                <p>
                  Start Date: <span id="startDate"></span>
                </p>
                <p>
                  End Date: <span id="endDate"></span>
                </p>
                <p>
                  Selected Province: <span id="selectedProvince"></span>
                </p>
              </Col>
              <Col md={6} className="content_dynamic" id="content"></Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Destination;
