# Local Cafe API

An open-source API designed to share and discover cafes around the world. Built with Express.js and deployed as a serverless function on Netlify, this API allows developers and coffee lovers to contribute their favorite coffee spots, complete with details like specialties, features, and location data. Use the API to explore cafes by country, state, or city, or contribute your favorite local cafe!

![Local Cafe API Screenshot](/public/images/local-api.webp)

Link to project: [Local Cafe Demo](https://local-cafe-api.netlify.app/)

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
  └── src/
/functions
  └── api.js             # Main API logic for filtering cafes by country/state/city
/src
  └── cafes.js           # List of cafe data (categorized by location)
/tests
  └── api.test.js        # Unit tests for the API

```

The project structure is optimized for Netlify deployment, with the main API logic contained in a single file (`api.js`) within the `functions` directory.

## 🛠️ How to get started

### Clone the repository

```bash
git clone https://github.com/yourusername/local-cafe-api.git

```

### Install Dependencies

```bash
npm install

```

### Run Locally

```bash
npm start

```

This will start your local development server.

## 🎯 How to Use the API

You can filter cafes by geographic location using query parameters. Here are a few example requests:

- **Get all cafes in a specific country**:

```bash
GET /api/cafes?country=USA

```

- **Filter by state**:

```bash
GET /api/cafes?country=USA&state=Washington

```

- **Filter by city**:

```bash
GET /api/cafes?country=USA&state=Washington&city=Spokane

```

**Example Response**

```json
[
  {
    "name": "Made With Love Bakery",
    "country": "USA",
    "state": "Washington",
    "city": "Spokane",
    "address": "West Central area, Spokane, WA",
    "specialties": ["Coffee", "Baked goods", "Snickerdoodle cookie cake"],
    "features": ["$1 drip coffee", "Indoor seating"],
    "description": "A welcoming bakery offering delicious coffee and baked goods."
  }
]
```

## How to contribute

### 1. Add Your Favorite Cafe:

- Fork the repository
- Add a new cafe entry in the `cafes.js` file, following this structure:

```json
{
  "name": "Cafe Name",
  "country": "Country",
  "state": "State",
  "city": "City",
  "address": "Cafe Address",
  "specialties": ["Specialty1", "Specialty2"],
  "features": ["Feature1", "Feature2"],
  "description": "Brief description of the cafe."
}
```

- Submit a pull request

### 2. Suggest a feature

Have ideas for new features? Open an issue to discuss it with the community!

## 📈 Future Enhancements and Optimizations

- **Database Integration**: Move from JSON files to a database for real-time updates and improved scalability.
- **User Authentication**: Add user-specific features like reviews or personal favorites.
- **Rate Limiting**: Implement rate limiting to avoid API abuse.
- **Additional Data**: Include menus, operating hours, or customer reviews for each cafe.

## Lessons Learned:

This project provided valuable experience in:

1. Setting up an Express.js application as a serverless function
2. Deploying a Node.js application to Netlify
3. Structuring an API to serve JSON data
4. Handling CORS in a serverless environment
5. Managing environment variables and configuration for different deployment environments

One of the key takeaways was understanding the differences between traditional server deployments and serverless functions, particularly in terms of file structure and how the application is exported and handled by the serverless platform.

## 🌟 Contributors

A big thank you to all contributors for helping make this project a success!

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Examples:

Here are a few other projects I've worked on:

- [AstroView](#): Short description
- [PlantJoy](link-to-project-2): Short description
- [DnDBot](link-to-project-3): Short description
