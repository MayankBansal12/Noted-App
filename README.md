<h1 align="center">Noted App</h1>
<p align="center">Just Note it!</p>

NOTED is a simple note-taking application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to create an account, take notes, and manage their personal notes securely.

<img src="https://res.cloudinary.com/dwuyp1nss/image/upload/v1690240848/Website%20Demo/lak93vkzryojotuajefy.png" alt="Landing Page">

## Table of Contents
- [Features](#features)
- [Test it out!](#visit)
- [Usage](#usage)
- [Site Demo](#demo)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Features
1. **User Registration and Authentication:**
   - Users can create an account by providing a unique username, email, and password.
   - Authentication is implemented using JSON Web Tokens (JWT) to securely manage user sessions.

2. **Note Management:**
   - Authenticated users can create new notes, providing a title and content for each note.
   - Users can view a list of their own notes and delete them

3. **Data Privacy:**
   - Each note is associated with the user who created it, ensuring that notes are private and accessible only to the creator.

4. **User-Friendly Interface:**
   - The user interface is designed to be intuitive and easy to use, providing a seamless experience for creating, managing, and viewing notes.

5. **Responsive Design:**
   - The app is built with a responsive design, ensuring it looks great and functions well on various devices, including desktops, tablets, and mobile phones. Still using on desktop is recommanded.

6. **Error Handling and Notifications:**
   - Proper error handling is implemented throughout the app to provide clear and informative error messages to users.
   - Notification messages (using Noty library) are displayed to users on successful actions like login, note creation, or updates.

7. **Logout Functionality:**
   - Authenticated users can log out of their account, terminating the session and requiring reauthentication for access.

8. **Security:**
   - User passwords are securely hashed and stored in the database to protect user data from unauthorized access.
   - Access to certain routes and functionalities is restricted to authenticated users only.

9. **Clean and Maintainable Code:**
   - The codebase follows best practices and coding standards to ensure maintainability and readability.


## Visit
You can visit and start using the Noted app [here](https://noted-app-ten.vercel.app/)

<img src="https://res.cloudinary.com/dwuyp1nss/image/upload/v1690240845/Website%20Demo/ydet35yiiidfcpsfydkm.png" alt="Home Page" />

## Usage
1. Register an account on the signup page.
2. Log in using your credentials on the login page.
3. Once logged in, you can create, view, and delete your notes on the home page.


## Technologies Used
- MongoDB: Database for storing notes
- Express: Backend web framework
- React: Frontend user interface
- Node.js: Backend runtime environment
- JSON Web Tokens (JWT): User authentication
- Axios: HTTP client for making API requests
- Noty: JavaScript library for notifications

## Demo
Watch site demo [here](https://drive.google.com/file/d/1TZyWIQBO5v3S1nYpJ1nguiuSkC16NT7v/view?usp=sharing)

## Contributing
Contributions are welcome! If you find any bugs or have ideas for new features, please open an issue or submit a pull request.

## Credits
Resources that i used while working on this project:
- ChatGPT by OpenAI
- Stack overflow

## License
This is a personal project, not for commercial use. The design is original, and any resemblance is unintentional and I apologize for the same.