import { useState, useEffect } from 'react';
import {  Offcanvas } from 'react-bootstrap';

function HelloMsg() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  
  useEffect(() => {
    setTimeout (() =>{
      setShow(false);
    }, 8000)
  }, []);

  return (
    <>
      <Offcanvas style={{"opacity": "0.7"}} placement="top" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{"opacity": "0.1"}}>...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <iframe width="100%" height="auto" src="https://serverless-endpoints.chuongtang.workers.dev/welcome" />
          Thanks for visiting, hope you find this page useful!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HelloMsg;