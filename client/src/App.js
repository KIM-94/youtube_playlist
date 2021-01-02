import React, { Component } from 'react';
import Customer from './components/playlist'
import './App.css';

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },

  table: {
    minWidth: 1080
  },

  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    customers: '',
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Letter bgcolor="#58B3FF">P</Letter>
        <Letter bgcolor="#FF605F">L</Letter>
        <Letter bgcolor="#FFD52E">A</Letter>
        <Letter bgcolor="#49DD8E">Y</Letter>
        <Letter bgcolor="#AE99FF">LIST</Letter> */}
        <Paper className={classes.root}>
          <Table className={classes.table}>
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
              {this.state.customers ?
                this.state.customers.map(c => {
                  return <Customer key={c.id} id={c.id} image={c.image} titleANDartist={c.titleANDartist} link={c.link} playlistTitle={c.playlistTitle} channelTitle={c.channelTitle} />
                }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </div>

    );
  }
}

export default withStyles(styles)(App);
