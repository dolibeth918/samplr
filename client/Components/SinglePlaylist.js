import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

const Playlist = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{props.name}</Typography>
          <Typography variant="subheading" color="textSecondary">
            Eventually Artist Name
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous" />

          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next" />
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.img}
        title="Live from space album cover"
      />
    </Card>
  );
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

const playlistWithStyles = withStyles(styles)(Playlist);
export default connect(mapStateToProps)(playlistWithStyles);
