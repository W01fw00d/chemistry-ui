import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import Typography from '../atoms/typography.jsx';
import IconButton from '../atoms/iconButton.jsx';
import Checkbox from '../atoms/checkbox.jsx';

export default function RecipeIngredientsList({ className, ingredients }) {
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

  const SectionListItem = ({ sectionName, items }) => (
    <>
      <MaterialListItem key={sectionName} role={undefined} dense>
        <ListItemText id={`checkbox-list-section-${sectionName}`} primary={sectionName} />
      </MaterialListItem>
      {items.map(ListItem)}
    </>
  );

  const ListItem = ({ code, quantity, name, isOptional, alternatives }) => {
    rowCounter++;

    const label = quantity ? `${quantity} ${name}` : name;

    return (
      <MaterialListItem key={code} role={undefined} dense button onClick={handleToggle(rowCounter)}>
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

  return ingredients && ingredients.length > 0 ? (
    <List className={`${classes.root} ${className}`}>{ingredients.map(SectionListItem)}</List>
  ) : (
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
