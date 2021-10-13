import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { makeStyles } from '@material-ui/core';

const Component = ({ id, text }) => {
  const useStyles = makeStyles({
    autoMargin: {
      '& p': {
        margin: 'auto',
      },
    },
  });
  const classes = useStyles();

  useEffect(() => {
    const spanTag = document.getElementById(id);
    spanTag.innerHTML = marked(text);
  });

  return <span className={classes.autoMargin} id={id} />;
};

Component.defaultProps = {
  id: 'id',
  text: <></>,
};

Component.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

export default Component;
