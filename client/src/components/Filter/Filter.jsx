import React,{ useState, useEffect } from 'react'
import { data } from '../../data'


const Filter = () => {
    
    const [popular, setPopular] = useState([]);
    
    useEffect(() => {
        fetchPopular
    }, [])
    const fetchPopular = async () => {
        const movies = await data.json();
        console.log(movies)
        setPopular(movies.result)
    }
  return (
    <div>
      
    </div>
  )
}

export default Filter
