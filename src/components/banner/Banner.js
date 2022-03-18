import "./Banner.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Hidden } from "@material-ui/core";
import { Spinner } from "../spinner/Spinner";

export const Banner = () =>{
	const [item, setItem] = useState();
  const [url, setUrl] = useState('https://bkultrananoflow.herokuapp.com/api/v1/content/random');
  
  useEffect(() => {
    const getItem = async () => {
	    try{
		    const response = await fetch(url);
		    const data = await response.json();
				console.log(data)
		    setItem(data);
	    } catch (error){
	    	console.log(error)
    	}
	};
		getItem();
  }, [url] );

  return(
		<Hidden xsDown>
			{ item ? (
				<Link to={`/detail/${item._id}`}>
					<div className="banner-container">
						<div className="banner" style={{ backgroundImage: `url(${item.info.image_url})`}}>
							<div className="banner-shadow"></div>
							<div className="banner-info">
								<Typography variant="h2">
									{item.title}
								</Typography>
								<div>{item.info.plot}</div>
							</div>
						</div>
					</div>
				</Link>
			) : (
				<Spinner />
			)
		};
		</Hidden>	
	)	
}