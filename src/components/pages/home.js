import React, { useState, useEffect } from "react";
import { RecipeReviewCard } from "../card/Card";

import { Header } from "../header/Header";
import { Banner } from "../banner/Banner";
import { Filter } from "../filter/Filter";
import { ItemList } from "../container/ItemList";

export const Home = () => {
  const [coleccion, setColeccion] = useState();
  const [url, setUrl] = useState('https://whimsical-adjoining-twig.glitch.me/api/v1/content');
  // console.log(coleccion);
  function filter(url){
    setUrl(url);
  }

  useEffect(() => {
    const getColeccion = async () => {
	    try{
		    const response = await fetch(url);
		    const data = await response.json();
		    setColeccion(data);
	    } catch (error){
	    console.log(error)	
    	}
	};
    getColeccion();
  }, [url]);

  return (
    <main>
      <Header/>
      <Banner/>
      <Filter funcion={filter}/>
      <ItemList coleccion={ coleccion }/>
    </main>   
  );
}
