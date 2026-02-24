import React from 'react';
import ClubCard from './ClubCard';
import clubsData from '../data/clubs.json';

const ClubList = () => {
    return (
        <div className="club-list">
            {clubsData.map((club) => (
                <ClubCard key={club.id} club={club} />
            ))}
        </div>
    );
};

export default ClubList;