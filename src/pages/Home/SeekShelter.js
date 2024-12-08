import React, { useState } from 'react';
import '../CSS file/SeekShelter.css'
const SeekShelter = () => {
    const [location, setLocation] = useState('');
    const [shelters, setShelters] = useState([]); // Placeholder for shelter data

    const fetchShelters = () => {
        // Here you can implement fetching shelters based on the user's location
        // You could use an API or database query to find shelters nearby
        // For now, we have mock data
        const mockShelters = [
            { name: 'Safe Haven Shelter', address: '123 Safe St.', phone: '123-456-7890' },
            { name: 'Hope Shelter', address: '456 Hope Ave.', phone: '987-654-3210' },
        ];
        setShelters(mockShelters);
    };

    return (
        <div className="shelter-container">
            <h2>Find a Safe Shelter</h2>
            <p>If you are in immediate danger, use this page to find a nearby safe shelter.</p>
            
            <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={fetchShelters}>Find Shelters</button>
            
            <div className="shelter-list">
                {shelters.length > 0 ? (
                    shelters.map((shelter, index) => (
                        <div key={index} className="shelter-card">
                            <h3>{shelter.name}</h3>
                            <p>{shelter.address}</p>
                            <p>Phone: {shelter.phone}</p>
                            <button>Contact Shelter</button>
                        </div>
                    ))
                ) : (
                    <p>No shelters found. Please try again later or contact authorities.</p>
                )}
            </div>
        </div>
    );
};

export default SeekShelter;
