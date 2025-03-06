# RESTAPI
 specialize in implementing GET, POST, UPDATE, and DELETE requests and responses using Node.js and Express.js. With seamless integration of NoSQL databases like MongoDB, I ensure robust and scalable backend solutions for your applications.

# connection_Mongodb.js
Here’s a rephrased and spell-checked version of the paragraph:  
"Start by installing MongoDB Compass, Second Step install MongoDB Shell (note: these instructions are for Windows). Then, use the file named `connection_mongodb` to connect the MongoDB database with your JavaScript files."

**Step 1: Install MongoDB on Windows**
Download MongoDB Community Edition from the official site:
👉 MongoDB Download Page
Run the MongoDB installer (.msi file) and follow the setup instructions.
Ensure you select "Complete" installation and check the option "Install MongoDB as a service".
Click Install and complete the process.

**Step 2: Add MongoDB to System PATH (Optional)**
To run MongoDB from the command prompt easily:
Open Command Prompt (cmd).
Run the following command to verify installation:
mongod --version

If it says 'mongod' is not recognized, manually add the MongoDB bin folder to the system PATH:

Go to C:\Program Files\MongoDB\Server\6.0\bin (or your installed version).
Copy the path and add it to Environment Variables → System Variables → Path.

**Step 3: Start MongoDB Server**
Open Command Prompt as Administrator.
net start MongoDB
**If it doesn't start, try:**
mongod --dbpath C:\data\db
(Make sure the folder C:\data\db exists or create it manually.)

**Step 4: Install MongoDB Extension in VS Code**
Open VS Code.
Go to Extensions (Ctrl + Shift + X).
Search for MongoDB for VS Code and click Install.
Step 5: Install MongoDB Node.js Driver (If Using Node.js)
If you're working with Node.js, install the MongoDB driver:
npm install mongodb

**Step 6: Connect to MongoDB in VS Code**
Open the MongoDB Extension in VS Code.
Click "Connect to MongoDB".
**Enter your MongoDB connection string:**
mongodb://localhost:27017
Click Connect to start using MongoDB inside VS Code.


# index.js
"The `index.js` file serves as the main entry point of the project. It utilizes the `fs` module for file handling, integrates Express, and imports functions from the `connection_Mongodb` file. Additionally, it incorporates other modules, such as middleware (plugins) and routers, to perform CRUD operations on various routes."

# index_middleware.js
"Using middleware in this context involves utilizing the fs module for file handling and implementing a function named logResResponse to handle requests, responses, and check for any occurring errors."

# user_controller.js

This code defines a set of functions for handling CRUD (Create, Read, Update, Delete) operations on user data in a **MongoDB database** using **Mongoose**. These functions are exported so they can be used in other files, such as in route handlers.

Here's what each function does:

1. **`handlerGetAllUsers(req, res)`** – Retrieves all users from the database and returns them as JSON.

2. **`handlerGetUserById(req, res)`** – Finds a user by their **ID** from the database and returns their data.  
   - If the user is not found, it responds with a **404 error** message.
   - There's an unnecessary line that converts `req.params.id` to a number (not needed for MongoDB ObjectIDs).

3. **`handlerUpdateUserById(req, res)`** – Updates the `lastname` field of a user by their **ID**.  
   - Currently, it only updates `lastname` to `"Updated Name"`, without checking or validating request data.
   - It responds with `{status: "Pending "}`, which does not confirm the actual update.

4. **`handlerDeleteUserById(req, res)`** – **Mistakenly tries to update the user instead of deleting**.  
   - Instead of deleting the user, it updates `lastname`, which is incorrect.
   - It should use `User.findByIdAndDelete(req.params.id)`.

5. **`handlerCreateNewUser(req, res)`** – Creates a new user in the database.  
   - Validates that all required fields (`first_name`, `last_name`, `email`, `gender`, `job_title`) are present.
   - If any field is missing, it returns a **400 error** (`Bad Request`).
   - Creates the user in the database and returns the newly created user's **ID**.

