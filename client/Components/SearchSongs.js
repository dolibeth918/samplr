import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const SearchSongs = props => {
  return (
    <form className={props.classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Enter song name"
        helperText="enter a song name to find samples it used"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};

const mapStateToProps = state => ({
  accessToken: state.accessToken
});

const searchWithStyles = withStyles(styles)(SearchSongs);
export default connect(mapStateToProps)(searchWithStyles);
