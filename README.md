Project Happy Thoughts - https://project-happy-thoughts-frontend.netlify.app/

🏁 Goals:

I was tasked with building a database, an API and a frontend in a Twitter like app collecting 'Happy Thoughts' in React and I have successfully completed what I set out to do.

The app has three main functionalities - adding thoughts, listing thoughts, and toggling a 'like' status. I decided to keep the design quite simple as I did not wan't it to be overly complex.

Overall, I found this project to be a great opportunity to flex my backend and React muscles and bring together the different parts of React and working with fetching and posting to an API. I also got to practice building the backend with Schemas and building the API using MongoDB, MongoDB Atlas, Google Cloud and POSTMAN. I am very pleased with the outcome and I'm looking forward to using the skills and knowledge I gained from this project in future endeavors.

Must-have requirements:

✅ The API should implement the given routes exactly.

✅ The GET /thoughts endpoint should only return 20 results, ordered by createdAt in descending order.

✅ The API should validate user input and return appropriate errors if the input is invalid.

✅ In the POST /thoughts endpoint to create a new thought, if the input was invalid and the API is returning errors, it should set the response status to 400 (bad request).

✅ The endpoint to add hearts to a thought should return an appropriate error if the thought was not found.

✅ Follow a given design as close as possible.

✅ List the most recent thoughts at the top and older thoughts at the bottom (sorted).

✅ Show the content of the message and how many likes the thoughts have received.

✅ Have a form to post new thoughts.

✅ Implement a heart button to send likes on a thought.

🚧 The problem:

I started by going through the design and sketching the different components out, deciding on how to structure my app. Then I started building the backend and making sure the endpoints were working in POSTMAN and having everything up and running before started building the frontend. I deployed the backend to Google Cloud and connected it to my frontend. I also decided on adding a loading component for when the page re-renders. 

If I had more time, I would add more functionality like pagination.

💻 Tech stack:

JavaScript React CSS HTML Figma MongoDB Node.js Postman Google Cloud

View it live https://project-happy-thoughts-frontend.netlify.app/


View the backend code: https://github.com/Nahnahke/project-happy-thoughts-api
