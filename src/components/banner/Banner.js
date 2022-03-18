import "./Banner.css";

import { Typography, Button, withWidth, Hidden } from "@material-ui/core";

export const Banner = () =>{

	return(
		<Hidden xsDown>
			<div className="banner-container">
				<div className="banner">
					<Typography variant="h2">
						Titulo random
					</Typography>
					<div>
						<Button variant="contained" color="primary">
				         Play
				        </Button>				
					</div>
				</div>
			</div>
		</Hidden>	
	)
}