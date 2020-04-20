import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import {
  FavoriteBorder as LikeIcon,
  ChatBubbleOutline as CommentIcon,
  Flag as FlagIcon,
} from '@material-ui/icons';

import Typography from '../atoms/typography.jsx';
import IconTextButton from '../atoms/iconTextButton.jsx';
import IconButton from '../atoms/iconButton.jsx';

export default function ItemDetailButtonsRow({ literals, likeCount, handleClick }) {
  const useStyles = makeStyles(theme => ({
    layout: {
      padding: theme.spacing(1),
    },
    name: {
      fontWeight: 'bold',
      paddingLeft: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.layout}>
      <Grid item xs={3}>
        <IconTextButton text={literals.like} icon={<LikeIcon />} handleClick={handleClick} />
      </Grid>
      <Grid item xs={2} container id="likeCount">
        <Typography variant="h6" color="inherit" className={classes.name}>
          {likeCount}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <IconTextButton text={literals.comment} icon={<CommentIcon />} handleClick={handleClick} />
      </Grid>
      <Grid item xs={3} container justify="flex-end">
        <IconButton color="secondary" handleClick={handleClick}>
          <FlagIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

ItemDetailButtonsRow.defaultProps = {
  literals: {},
  likeCount: 0,
  handleClick: () => {},
};

ItemDetailButtonsRow.propTypes = {
  literals: PropTypes.shape({
    like: PropTypes.string,
    comment: PropTypes.string,
  }),
  likeCount: PropTypes.number,
  handleClick: PropTypes.func,
};
