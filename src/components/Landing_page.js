import React, { useEffect, useState, useRef } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../globals/variables'

function LandingPage() {

    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response=>response.json())
        .then (response =>{
            console.log(response)
        })
    }, [])


}