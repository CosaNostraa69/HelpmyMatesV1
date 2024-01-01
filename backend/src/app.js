const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const forumRoutes = require('./routes/forumRoutes');
const postRoutes = require('./routes/postRoutes');
const messageRoutes = require('./routes/messageRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const userFriendRoutes = require('./routes/userFriendRoutes');
const authRoutes = require('./routes/authRoutes');


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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
