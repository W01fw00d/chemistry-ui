import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import Typography from '../atoms/typography.jsx';
import Checkbox from '../atoms/checkbox.jsx';

export default function Component({ className, steps }) {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    message: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
      paddingBottom: '20px',
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
        <ListItemText
          id={`checkbox-list-label-${code}`}
          primary={step}
        />
      </MaterialListItem>
    );
  };

  const SectionListItem = ({ sectionName, description, items }, code) => (
    <>
      <MaterialListItem
        key={`${sectionName}-${code}`}
        role={undefined}
        dense
      >
        <ListItemText
          id={`checkbox-list-section-${sectionName}-${code}`}
          primary={sectionName}
        />
      </MaterialListItem>
      {description && (
        <MaterialListItem
          key={`${description}-${code}`}
          role={undefined}
          dense
        >
          <ListItemText
            id={`checkbox-list-section-${description}-${code}`}
            primary={`* ${description}`}
          />
        </MaterialListItem>
      )}
      {items && items.map(ListItem)}
    </>
  );

  return steps && steps.length > 0 ? (
    <List className={`${classes.root} ${className}`}>
      {steps.map(SectionListItem)}
    </List>
  ) : (
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
