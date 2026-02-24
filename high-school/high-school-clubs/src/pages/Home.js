import React from 'react';
import ClubList from '../components/ClubList';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the High School Clubs</h1>
            <p>Explore the various clubs available at our school and find your passion!</p>
            <ClubList />
        </div>
    );
};

export default Home;