import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader,
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import Typography from '../../../atoms/typography.jsx';
import IconButton from '../../../atoms/buttons/icon.jsx';
import Checkbox from '../../../atoms/fields/checkbox.jsx';

export default function RecipeIngredientsList({ className, ingredients }) {
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

  const ListItem = ({ code, quantity, name, isOptional, alternatives }, key) => {
    rowCounter += 1;

    const label = quantity ? `${quantity} ${name}` : name;

    return (
      <MaterialListItem
        id={`${code}-${key}-${rowCounter}`}
        key={`${code}-${key}-${rowCounter}`}
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
          primary={isOptional ? `(${label})` : `${label}`}
        />
        {alternatives && alternatives.length > 0 && (
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </MaterialListItem>
    );
  };

  const SectionListItem = ({ sectionName, items }, key) => (
    <List
      key={`list-${key}`}
      className={`${classes.root} ${className}`}
      subheader={(
        <ListSubheader
          key={`subheader-${key}`}
          component="div"
          className={`${classes.subheader}`}
        >
          {sectionName}
        </ListSubheader>
      )}
    >
      {items.map(ListItem)}
    </List>
  );

  return ingredients && ingredients.length > 0 ?
      ingredients.map(SectionListItem)
    : (
      <Typography variant="body1" className={classes.message}>
        No ingredients required
      </Typography>
  );
}

RecipeIngredientsList.defaultProps = {
  className: '',
  ingredients: [],
};

RecipeIngredientsList.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.any,
};
