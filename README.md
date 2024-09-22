# Local Cafe API

An open-source API designed to share and discover cafes around the world. Built with Express.js and deployed as a serverless function on Netlify, this API allows developers and coffee lovers to contribute their favorite coffee spots, complete with details like specialties, features, and location data. Use the API to explore cafes by country, state, or city, or contribute your favorite local cafe!

![Local Cafe API Screenshot](/public/images/local-api.webp)

Link to project: [DEMO](https://local-cafe-api.netlify.app/)

## 🌍 Project Overview

The Local Cafe API provides a curated list of cafes, categorized by geographic location. Users can filter cafes by country, state, or city using query parameters. Developers are encouraged to contribute new cafes or extend the functionality by adding popular drinks or other features.

Key features:

- Geographic Filtering: Filter cafes by country, state, and city
- CORS Enabled: Easy integration with front-end applications
- Serverless Architecture: Deployed on Netlify for seamless scaling
- JSON Responses: Providing cafe details like name, address, specialties, and more

**🚀 Tech used:** JavaScript, Node.js, Express, Serverless Functions, Netlify

This project is built using Express.js and deployed as a serverless function on Netlify. The API serves information about various cafes around the world, including their names, addresses, specialties, and features.

Key aspects of the project:

- Express.js for routing and handling requests
- Serverless architecture for easy deployment and scaling
- CORS enabled for cross-origin requests
- JSON responses for easy integration with front-end applications
- Error handling for undefined routes

## 📂 Project Structure

```bash
/public
  └── index.html         # Static landing page
  └── images/            # Image assets
/functions
  └── api.js             # Main API logic for filtering cafes by country/state/city
/src
  └── cafes.js           # List of cafe data (categorized by location)
/tests
  └── api.test.js        # Unit tests for the API

```

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
