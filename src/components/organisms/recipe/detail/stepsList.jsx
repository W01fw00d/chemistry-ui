import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader,
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import Typography from '../../../atoms/typography.jsx';
import Checkbox from '../../../atoms/fields/checkbox.jsx';

export default function Component({ className, steps }) {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      'margin-bottom': 0,
    },
    message: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
      paddingBottom: '20px',
    },
    subheader: {
      color: '#A9A8AD',
      'font-size': 'medium',
    },
  }));
  const classes = useStyles();

  const [checked, setChecked] = useState([]);

  let rowCounter = -1;

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const ListItem = (step, code) => {
    rowCounter += 1;

    return (
      <MaterialListItem
        key={code}
        role={undefined}
        dense
        button
        onClick={handleToggle(rowCounter)}
      >
        <ListItemIcon>
          <Checkbox value={checked.indexOf(rowCounter) !== -1} />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-${code}`} primary={step} />
      </MaterialListItem>
    );
  };

  const SectionListItem = ({ sectionName, description, items }, key) =>
    items && (
      <List
        key={`list-${key}`}
        className={`${classes.root} ${className}`}
        subheader={(
          <ListSubheader
            key={`subheader-${key}`}
            component="div"
            className={`${classes.subheader}`}
          >
            <div>{sectionName}</div>
          </ListSubheader>
        )}
      >
        {description && (
        <MaterialListItem
          key={`description-${key}`}
          role={undefined}
          dense
        >
          <ListItemText
            primary={`* ${description}`}
          />
        </MaterialListItem>
        )}
        {items.map(ListItem)}
      </List>
    );

  return steps && steps.length > 0 ?
    steps.map(SectionListItem)
  : (
    <Typography variant="body1" className={classes.message}>
      No steps required
    </Typography>
  );
}

Component.defaultProps = {
  className: '',
  steps: [],
};

Component.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
};
