# Mongodb-backend

This is a simple node-express server that sends data to -> External cloud (MongoDB Atlas), which acts as a Persistent database.

## How to run it (without Docker):

1. `cd mongodb-backend`
2. Rename template.env to .env
3. Insert correct values for variables LRS_AUTH_TOKEN and RESULT_STORE_AUTH_TOKEN in **.env**
4. `npm start`
5. Open browser and enter `http://localhost:3000/feedbacks` to see persisted data in JSON format; which comes from (MongoDB Atlas).
6. Now run the `frontend` Project; fill up the feedback form in the App; and you can see your feedback has been persisted in Database (follow step 3).

## How to run it (with Docker):

1. `cd mongodb-backend`
2. `docker build -t mongodb .`
3. `docker run -d -p 3000:3000 --name mongo-container mongodb`
4. Open browser and enter `http://localhost:3000/feedbacks` to see persisted data in JSON format; which comes from (MongoDB Atlas).
5. Now run the `frontend` Project; fill up the feedback form in the App; and you can see your feedback has been persisted in Database (follow step 3).
