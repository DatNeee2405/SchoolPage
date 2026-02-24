# High School Clubs

Welcome to the High School Clubs web application! This project is designed to showcase the various clubs available at our high school, providing students with information about each club, including descriptions, images, and details on how to join.

## Project Structure

The project is organized as follows:

```
high-school-clubs
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── index.js           # Entry point for the JavaScript application
│   ├── App.js             # Main App component with routing
│   ├── components
│   │   ├── ClubCard.js    # Component to display individual club information
│   │   ├── ClubList.js    # Component to list all clubs
│   │   └── Navbar.js      # Navigation component
│   ├── pages
│   │   ├── Home.js        # Landing page component
│   │   └── ClubDetail.js  # Component for detailed club information
│   ├── styles
│   │   ├── main.css       # Main styles for the application
│   │   └── variables.css   # CSS variables for consistent styling
│   └── data
│       └── clubs.json     # JSON data for clubs
├── tests
│   └── App.test.js        # Unit tests for the App component
├── package.json           # npm configuration file
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- View a list of all clubs available at the school.
- Click on a club to see detailed information.
- Responsive design for optimal viewing on various devices.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.