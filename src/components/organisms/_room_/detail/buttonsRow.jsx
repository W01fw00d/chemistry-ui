import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import {
  FavoriteBorder as LikeIcon,
  ChatBubbleOutline as CommentIcon,
  Flag as FlagIcon,
} from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid';
import Typography from '../../../atoms/typography';
import IconTextButton from '../../../atoms/buttons/iconText';
import IconButton from '../../../atoms/buttons/icon';

const Component = ({ handleClick, likeCount, literals }) => {
  const useStyles = makeStyles((theme) => ({
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
    <Grid alignItems="center" className={classes.layout} container>
      <Grid item xs={3}>
        <IconTextButton handleClick={handleClick} icon={<LikeIcon />} text={literals.like} />
      </Grid>
      <Grid container id="likeCount" item xs={2}>
        <Typography className={classes.name} color="inherit" variant="h6">
          {likeCount}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <IconTextButton handleClick={handleClick} icon={<CommentIcon />} text={literals.comment} />
      </Grid>
      <Grid container item justifyContent="flex-end" xs={3}>
        <IconButton color="secondary" handleClick={handleClick}>
          <FlagIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

Component.defaultProps = {
  handleClick: () => {},
  likeCount: 0,
  literals: {},
};

Component.propTypes = {
  handleClick: PropTypes.func,
  likeCount: PropTypes.number,
  literals: PropTypes.shape({
    comment: IconTextButton.propTypes.text,
    like: IconTextButton.propTypes.text,
  }),
};

export default Component;
