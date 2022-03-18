import "./Filter.css";
import React, { useState } from "react";
import { Paper, Tabs, Tab } from '@material-ui/core';

export const Filter = (props) => {
  const [value, setValue] = useState(3);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  switch (value){
  	 case 0:
  	 props.funcion('https://bkultrananoflow.herokuapp.com/api/v1/content/premieres');
     break;
     case 1:
  	 props.funcion('https://bkultrananoflow.herokuapp.com/api/v1/content/movies');
     break;
     case 2:
  	 props.funcion('https://bkultrananoflow.herokuapp.com/api/v1/content/series');
     break;
     default:
     props.funcion('https://bkultrananoflow.herokuapp.com/api/v1/content')
     break;
  }

  return (
  	<div className="filter-container">
			<div className="filter-seccion">
				<Paper square elevation={0}>
			      <Tabs
			        value={value}
			        indicatorColor="primary"
			        textColor="primary"
			        onChange={handleChange}
			        aria-label="disabled tabs example"
			      >
			        <Tab label="Estrenos" />
			        <Tab label="Peliculas" />
			        <Tab label="Series" />
			        <Tab label="Todo" />
			      </Tabs>
			   </Paper>
		  </div>
  	</div>
  );
}
