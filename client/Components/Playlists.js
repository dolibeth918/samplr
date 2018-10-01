import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import SinglePlaylist from './SinglePlaylist';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const Playlists = props => {
  const { playlists, classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24} justify="space-evenly">
        {playlists.map(playlist => (
          <SinglePlaylist
            key={playlist.id}
            img={playlist.images[0].url}
            name={playlist.name}
            href={playlist.href}
          />
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

const playlistsWithStyles = withStyles(styles)(Playlists);
export default connect(mapStateToProps)(playlistsWithStyles);
