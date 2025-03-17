# 🌍 WanderLust

🚀 Excited to share my journey of developing a feature-rich full-stack web application inspired by Airbnb. The project is built using **MongoDB, Express.js, and Node.js**.

---

## 🛠️ Technologies & Packages Used

### 🔹 Backend
- 🗄️ **MongoDB**: NoSQL database for flexible and scalable data storage.
- ⚡ **Express.js**: Web application framework for Node.js, providing robust features for web and mobile applications.
- 🌐 **Node.js**: JavaScript runtime for server-side development.

### 🔐 Authentication
- 🔑 **Passport.js**: Middleware for user authentication, supporting various strategies.
- 📦 **Dotenv**: Environment variable management for secure configuration.

### 🖼️ Image Storage
- ☁️ **Cloudinary**: Cloud-based image and video management solution.

### 🗺️ Maps
- 📍 **Mapbox**: Platform for custom maps and location-based experiences.

### 🎨 Frontend
- 📜 **EJS**: Embedded JavaScript templates for dynamic content rendering.

### 📂 Session Management
- 💬 **Connect Flash**: Middleware for flash messages.
- 🏪 **Connect Mongo**: MongoDB session store for Express.js.
- 🍪 **Cookie Parser**: Middleware for parsing cookies.

### ✅ Validation
- 🔍 **Joi**: Library for data validation.

### 🏗️ Object Modeling
- 🏛️ **Mongoose**: MongoDB object modeling for Node.js.

### 📤 File Uploads
- 📎 **Multer**: Middleware for handling file uploads.

### 🔗 Social Authentication
- 🔑 **Passport Local**: Local authentication strategy.
- 🟢 **Passport Google OAuth2.0**: Google OAuth2.0 authentication strategy.
- 🔐 **Passport Local Mongoose**: Mongoose-specific authentication strategy.

---

## 🌟 Key Features
- 👤 **User Authentication**: Login, Logout, and User Profile Section
- ✍️ **CRUD Operations**: Add, Edit, and Delete Listings
- ⭐ **Review System**: Add and Delete Reviews
- 🛡️ **User Data Security**: Password Hashing and Encryption
- 🗺️ **Interactive Maps**: Leveraging Mapbox for Location Visualization
- 🔵 **Login with Google**: Authenticate with your Google account for a seamless experience
- 🔵 **Login with Facebook**: Easily log in using your Facebook credentials
- 📩 **Login with Email**: Traditional email login for user convenience

---

## 🛠️ How to Install

Follow these steps to set up and run the project locally:

### 📥 Clone the Repository:
```sh
git clone https://github.com/kartiksoni-24/WanderLust.git
cd WanderLust
```

### 📦 Install Dependencies:
```sh
npm install
```

### ⚙️ Set Up Environment Variables:

Configure the following environment variables by creating a `.env` file in the root of your project:

```env
# ☁️ Cloudinary
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# 🗺️ Bing Map
MAP_TOKEN=your_mapbox_token

# 🗄️ MongoDB Atlas
ATLASDB_URL=your_mongodb_connection_string

# 🔐 Secret Key
SECRET=your_random_secret_key

# 🔵 Google Authentication
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback

```
Replace the values with your specific configurations.

### ▶️ Run the Application:
```sh
node app.js
```

### 🌐 Open in Your Browser:
Open [http://localhost:8080/listings](http://localhost:8080/listings) in your web browser.

---

## 👨‍💻 Author
**Kartik Soni**  
📧 Email: kartik.soni.9301@gmail.com  
🔗 LinkedIn: [Kartik Soni](https://www.linkedin.com/in/kartiksoni-24/)

---

## 🎉 Thank You
Thank you for exploring **WanderLust**! Your feedback is valuable. If you have any suggestions or thoughts, feel free to share them with us. 🚀

