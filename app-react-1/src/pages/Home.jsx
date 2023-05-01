import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner/Banner";
import Card from '../components/Card/Card';
import { Link } from "react-router-dom";
import axios from "axios";



const Home = () => {
    const [data, setData] = useState([]);

    useEffect (() => {
        axios.get("/logements.json").then((res)=> setData(res.data));
    }, []);

    return (
        <div>
           <Banner/>
            <div className='cards-container'>
                {data.map((logement, id) => (
                    <div className='card_logement' key={id}>
                        <Link className='link_card_logement' to={`/logement/${logement.id}`}>
                            <Card cover={logement.cover} title={logement.title} />
                        </Link>

                    </div>
                ))}

            </div>
            
        </div>
    );
};

export default Home;