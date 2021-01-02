import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class playlist extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.titleANDartist}</TableCell>
                <TableCell><a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href={this.props.link} dir="auto">{this.props.link}</a></TableCell>
                <TableCell>{this.props.playlistTitle}</TableCell>
                <TableCell>{this.props.channelTitle}</TableCell>
            </TableRow>
        )
    }
}

export default playlist;


{/* <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href={this.props.name} dir="auto">0:00:01</a> */ }