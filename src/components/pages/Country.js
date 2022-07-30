import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'



function Country() {
  const [isLoading,setIsLoading]=useState(true);
  const [loadedCountry,setLoadedMovies]=useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('https://restcountries.eu')

          .then(response => {
           return response.json();
          })
       
          .then(data => {