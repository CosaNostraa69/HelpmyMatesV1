require('dotenv').config();
const express = require('express');
const { auth } = require('express-openid-connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Routes
const userRoutes = require('./src/routes/userRoutes');
const gameRoutes = require('./src/routes/gameRoutes');
const forumRoutes = require('./src/routes/forumRoutes');
const postRoutes = require('./src/routes/postRoutes');
const messageRoutes = require('./src/routes/messageRoutes');
const rewardRoutes = require('./src/routes/rewardRoutes');
const userFriendRoutes = require('./src/routes/userFriendRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Auth0 configuration
app.use(
  auth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL, // Assurez-vous que cette variable correspond à l'URL de votre application
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.AUTH0_CLIENT_SECRET,
    authRequired: false,
    auth0Logout: true,
  })
);

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Utilisation des routes
app.use('/api', userRoutes);
app.use('/api', gameRoutes);
app.use('/api', forumRoutes);
app.use('/api', postRoutes);
app.use('/api', messageRoutes);
app.use('/api', rewardRoutes);
app.use('/api', userFriendRoutes);
app.use('/api', authRoutes);

// Exemple de route protégée
app.get('/api/private', (req, res) => {
  res.json({ message: "Hello from a private endpoint!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
