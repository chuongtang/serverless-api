import React, { useState, useEffect } from 'react';
import { Dropdown, FormControl, Popover, OverlayTrigger, Button } from 'react-bootstrap'
import Anilogo from '../images/grid.svg';

const ChartSelector = (props) => {

  const [chartNames, setChartNames] = useState([]);
  setChartNames(props.nameList);


  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        {chartNames.map ( (element) => (
      
          <Dropdown.Item href="#/action-2">{element.slug}</Dropdown.Item>

          ))}
        </Dropdown.Menu>
      </Dropdown>
    
      

  );
}

export default ChartSelector;