const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const gameRoutes = require('./src/routes/gameRoutes');
const forumRoutes = require('./src/routes/forumRoutes');
const postRoutes = require('./src/routes/postRoutes');
const messageRoutes = require('./src/routes/messageRoutes');
const rewardRoutes = require('./src/routes/rewardRoutes');
const userFriendRoutes = require('./src/routes/userFriendRoutes');
const authRoutes = require('./src/routes/authRoutes');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', gameRoutes);
app.use('/api', forumRoutes);
app.use('/api', postRoutes);
app.use('/api', messageRoutes);
app.use('/api', rewardRoutes);
app.use('/api', userFriendRoutes);
app.use('/api', authRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
