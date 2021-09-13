import React, { useState, useEffect } from 'react';
import { Button, Offcanvas, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Header.css';

function Header({ emaill }) {
  const [wttr, setClima] = useState([]);
  const fetchWttr = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=53c8ec1e1de54dfaa9d132030211009&&q=Passos&aqi=no`
    );
    const data = await response.json();
    setClima(data);
  };

  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div id="offCanvas">
        <Button
          style={{ height: '40px', marginTop: '10px' }}
          variant="primary"
          size="sm"
          onClick={handleShow}
          className="me-2"
        >
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Weather on your city</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {wttr.length !== 0 ? (
              <>
                <p>{`Country: ${wttr.location.country}`}</p>
                <p>{`Localtime: ${wttr.location.localtime}`}</p>
                <p>{`City: ${wttr.location.name}`}</p>
                <p>{`State: ${wttr.location.region}`}</p>
                <p>{`Temperature Celcius: ${wttr.current.temp_c}`}</p>
                <span>{`Weather descriptions: ${wttr.current.condition.text}`}</span>
                <img src={wttr.current.condition.icon} alt="icon"></img>
              </>
            ) : (
              <Spinner animation="grow" />
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }

  useEffect(() => {
    fetchWttr();
  }, []);

  return (
    <header className="header">
      <p id="title">{`Welcome ${emaill.split('@')[0]}!`}</p>
      {['end'].map((placement, index) => (
        <OffCanvasExample
          key={index}
          placement={placement}
          name="See weather"
        />
      ))}
    </header>
  );
}
const mapStateToProps = (state) => ({
  emaill: state.loginReducer.email,
});

export default connect(mapStateToProps)(Header);
