import React from 'react';

const ClubCard = ({ club }) => {
    return (
        <div className="club-card">
            <img src={club.image} alt={`${club.name} logo`} />
            <h3>{club.name}</h3>
            <p>{club.description}</p>
        </div>
    );
};

export default ClubCard;