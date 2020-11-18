import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import MarkdownText from '../../../../../atoms/markdownText.jsx';

const Component = ({
  index,
  rowCounter,
  sectionName,
  description,
  items,
  className,
  renderItem,
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      'margin-bottom': 0,
    },
    subheader: {
      color: '#A9A8AD',
      'font-size': 'medium',
    },
  }));
  const classes = useStyles();

  return <List
    className={`${classes.root} ${className}`}
    subheader={sectionName && (
      <ListSubheader
        component="div"
        className={`${classes.subheader}`}
      >
        <MarkdownText
          id={`${index}-${rowCounter}-subheader`}
          text={sectionName}
        />
      </ListSubheader>
    )}
  >
    {description && (
      <ListItem
        role={undefined}
        dense
      >
        <ListItemText
          primary={<MarkdownText
            id={`${index}-${rowCounter}-description`}
            text={description}
          />}
        />
      </ListItem>
    )}
    {items && items.map(renderItem)}
  </List>;
};

Component.defaultProps = {
  renderItem: () => { },
};

Component.propTypes = {
  index: PropTypes.number,
  rowCounter: PropTypes.number,
  sectionName: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
};

export default Component;
