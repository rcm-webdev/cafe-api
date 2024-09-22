# Spokane Cafe API

A simple Express-based API that provides information about various cafes in Spokane, Washington. This project is deployed as a serverless function on Netlify, making it easy to scale and maintain.

![Spokane Cafe API Screenshot](/public/images/localapi.webp)

Link to project: [DEMO](https://spokane-cafe-api.netlify.app/)

## How It's Made:

**Tech used:** JavaScript, Node.js, Express, Serverless Functions, Netlify

This project is built using Express.js and deployed as a serverless function on Netlify. The API serves information about various cafes in Spokane, including their names, addresses, specialties, and features.

Key aspects of the project:

- Express.js for routing and handling requests
- Serverless architecture for easy deployment and scaling
- CORS enabled for cross-origin requests
- JSON responses for easy integration with front-end applications
- Error handling for undefined routes

The project structure is optimized for Netlify deployment, with the main API logic contained in a single file (`api.js`) within the `functions` directory.

## Optimizations

Future optimizations could include:

- Implementing a database to store cafe information, allowing for easier updates and scalability
- Adding authentication to protect certain routes or enable user-specific features
- Implementing rate limiting to prevent API abuse
- Adding more detailed information about each cafe, such as operating hours, menus, or user reviews

## Lessons Learned:

This project provided valuable experience in:

1. Setting up an Express.js application as a serverless function
2. Deploying a Node.js application to Netlify
3. Structuring an API to serve JSON data
4. Handling CORS in a serverless environment
5. Managing environment variables and configuration for different deployment environments

One of the key takeaways was understanding the differences between traditional server deployments and serverless functions, particularly in terms of file structure and how the application is exported and handled by the serverless platform.

## Examples:

Here are a few other projects I've worked on:

- [AstroView](#): Short description
- [PlantJoy](link-to-project-2): Short description
- [DnDBot](link-to-project-3): Short description
