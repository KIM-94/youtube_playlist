import React, { Component } from 'react';
import Customer from './components/playlist'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});


const customers = [
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
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>link</TableCell>
              <TableCell>플레이리스트</TableCell>
              <TableCell>채널</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(App);
