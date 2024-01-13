import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import '../css/List.css'; 

const Listing = () => {
    const provinces = [
        'Phnom Penh',
        'Thbong Khmom',
        'Kompong Cham',
        'Kompong Som',
        'Kompong Chnang',
        'Kratie',
        'Kondal',
        'Kompot',
        'Kep',
        'Preah Sihanouk',
        'Pursat',
        'Battambong',
        'Pailin',
        'Bonteay Meanchey',
        'Siem Reap',
        'Kompong Thom',
        'Prey Veng',
        'Svay Reang',
        'Takae',
        'Kompong Speu',
        'Steng Traeng',
        'Mondoulkiri',
        'Ratanakiri',
        'Koh Kong',
        'Oddor Meanchey',
    ];
    const [destinations, setDestinations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/All_Provinces');
            if (!response.ok) {
            throw new Error('Error fetching data');
            }

            const data = await response.json();
            setDestinations(data);
        } catch (error) {
            setError(error.message);
        }
        };

        fetchData();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const filteredProvinces = provinces.filter(province =>
        province.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchClick = () => {
        setIsSearchActive(true);
        // You can add logic here to handle the search button click if needed
        console.log('Search button clicked with:', searchTerm);
    };
    
    return (
        <div>
            <Header />
            <div
                className="container-fluid"
            >
            <div className="list-down d-flex flex-column align-items-center mt-2" style={{ marginTop: '-30px', position: 'relative' }}>
                <div className="menu d-flex justify-content-center align-items-start mt-5">
                    <div className="box box1 me-5">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Schedule</p>
                            </div>
                        </a>
                    </div>
                    <div className="box box2 me-5">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Province</p>
                            </div>
                        </a>
                    </div>
                    <div className="box box3">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Place to go</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="list-down d-flex flex-column align-items-center mt-2" style={{ marginTop: '-30px', position: 'relative' }}>
            <div className="drop-down" style={{ width: '30%', height: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control province"
                        placeholder="Search Provinces"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={() => setIsSearchActive(true)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="content_dynamic mt-3" id="content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGrow: 1 }}>
                        {
                            filteredProvinces.map((province, index) => (
                                <div key={index} className="result-item" style={{ margin: '5px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
                                    <img src={`/Phnom Penh.jpg`} alt={province} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '5px' }} />
                                    <p style={{ margin: 0 }}>{province}</p>
                                </div>
                            ))
                        }
                    </div>
            </div>

        </div>
        </div>  
    );
};

export default Listing;
