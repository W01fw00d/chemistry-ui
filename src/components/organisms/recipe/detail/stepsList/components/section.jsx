import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader as Subheader,
  ListItem as Item,
  ListItemText as Text,
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
      <Subheader
        component="div"
        className={`${classes.subheader}`}
      >
        <MarkdownText
          id={`${index}-${rowCounter}-subheader`}
          text={sectionName}
        />
      </Subheader>
    )}
  >
    {description && (
      <Item
        role={undefined}
        dense
      >
        <Text
          primary={<MarkdownText
            id={`${index}-${rowCounter}-description`}
            text={description}
          />}
        />
      </Item>
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
