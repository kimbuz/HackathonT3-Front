import Logo from "../../img/logoflow.svg";
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import "./Header.css";

export const Header = () =>{

	return(
		<AppBar position="sticky">
			<Toolbar className="header">
				<div>UltraNano</div>
				<img className="logo" src="https://web.flow.com.ar/theme/flow/logo.svg" alt="logo"/>
				<Avatar/>
			</Toolbar>
		</AppBar>
	)
}