require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

let endpoint = "endpoint = https://api.giphy.com/v1/gifs/search?api_key=dLXfl03PxqT8vv4VEBI8TFwLT713vLbD&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"