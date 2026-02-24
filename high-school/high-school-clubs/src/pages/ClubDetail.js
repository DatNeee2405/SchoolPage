import React from 'react';
import { useParams } from 'react-router-dom';
import clubsData from '../data/clubs.json';

const ClubDetail = () => {
    const { clubId } = useParams();
    const club = clubsData.find(club => club.id === parseInt(clubId));

    if (!club) {
        return <div>Club not found</div>;
    }

    return (
        <div className="club-detail">
            <h1>{club.name}</h1>
            <img src={club.image} alt={club.name} />
            <p>{club.description}</p>
        </div>
    );
};

export default ClubDetail;