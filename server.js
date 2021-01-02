const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '오왼 - Buddy (Feat. pH-1)',
            'birthday': 'https://www.youtube.com/watch?v=HGrP1qdE5Rw&t=237s',
            'gender': '🌞 화창한 날, 산책하면서 듣기 좋은 노래 모음  PLAYLIST',
            'job': '찐막 JJINMAK'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'SOLE - haPPiness',
            'birthday': 'https://www.youtube.com/watch?v=HGrP1qdE5Rw&t=441s',
            'gender': '🌞 화창한 날, 산책하면서 듣기 좋은 노래 모음  PLAYLIST',
            'job': '찐막 JJINMAK'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '권진아 - Fy Away',
            'birthday': 'https://www.youtube.com/watch?v=HGrP1qdE5Rw&t=653s',
            'gender': '🌞 화창한 날, 산책하면서 듣기 좋은 노래 모음  PLAYLIST',
            'job': '찐막 JJINMAK'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));