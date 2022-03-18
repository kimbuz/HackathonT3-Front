import { useState, createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ( {children} ) => {
	const [ user, setUser ] = useState(null);
	console.log(user);
	function updateUser(obj){
		setUser(obj)
	}

	function clear(){
		setUser(null);
	}

	return (
		<UserContext.Provider value={{ user, clear, updateUser }}>
		{children}
		</UserContext.Provider>
		);
};