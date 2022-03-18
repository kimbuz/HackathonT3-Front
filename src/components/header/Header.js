import "./Header.css";
import Logo from "../../img/logoflow.svg";
import { AppBar, Toolbar, Avatar } from '@material-ui/core';

export const Header = () =>{

	return(
		<AppBar position="sticky">
			<Toolbar className="header">
				<img src={Logo} alt="logo"/>
				<Avatar/>
			</Toolbar>
		</AppBar>
	)
}