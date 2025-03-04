# React + TypeScript + Vite

# GitHub Simulation

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Languages](#languages)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Introduction
GitHub Simulation is a project that simulates various functionalities of GitHub, providing users with a platform to understand and experiment with GitHub-like features in a controlled environment.

## Features
- Repository management
- User authentication and authorization (login with any GitHub username)
- Webhooks and notifications
- Overview and repository pages implemented
- Pinned repository box shows user's most popular repositories by default, with the option to customize via a modal
- Fake data for contributions from 2021 to 2025 used in the contributions box
- Repository page lists repositories by last update with pagination (20 per page) and supports sorting, filtering, and searching
- Left-side menu displaying repositories
- Right-side menu with a logout button

## Languages
This project is built using the following languages and technologies:
- HTML
- JavaScript
- TypeScript
- Vite
- React
- Tailwind CSS

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)
- [MongoDB](https://www.mongodb.com/) (version 4.x or later)

## Installation
To install GitHub Simulation, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Samiratalanchi/github-simulation.git
    ```
2. Navigate to the project directory:
    ```bash
    cd github-simulation
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Configure the environment variables by creating a `.env` file:
    ```env
    MONGODB_URI=mongodb://localhost:27017/github-simulation
    JWT_SECRET=your_jwt_secret
    ```

## Usage
To run the project, use the following command:
```bash
npm start
```

### Example
Here is an example of how to create a new repository:
```bash
# Create a new repository
curl -X POST http://localhost:3000/api/repositories -d '{"name": "my-new-repo"}' -H "Authorization: Bearer your_jwt_token"
```

## Contributing
Contributions are always welcome! To contribute, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community for their continuous support.
- Special thanks to all contributors who helped in the development of this project.

## Contact
Created by [Samiratalanchi](https://github.com/Samiratalanchi) - feel free to contact me!