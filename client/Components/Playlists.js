import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

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
  const playlists = props.playlists;
  return (
    <div className={props.classes.root}>
      <Grid container spacing={24} justify="space-evenly">
        {playlists.map(playlist => {
          return (
            <Grid key={playlist.id} item xs={3}>
              <Paper className={props.classes.paper}>
                <h1>{playlist.name}</h1>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

const playlistsWithStyles = withStyles(styles)(Playlists);
export default connect(mapStateToProps)(playlistsWithStyles);
