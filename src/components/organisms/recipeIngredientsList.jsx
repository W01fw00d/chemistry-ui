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

import IconButton from '../atoms/iconButton.jsx';
import Checkbox from '../atoms/checkbox.jsx';

export default function RecipeIngredientsList({ className, ingredients }) {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();

  const [checked, setChecked] = useState([0]);

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

  const ListItem = ({ code, name, isOptional, alternatives }, id) => {
    const labelId = `checkbox-list-label-${code}`;

    return (
      <MaterialListItem key={code} role={undefined} dense button onClick={handleToggle(id)}>
        <ListItemIcon>
          <Checkbox value={checked.indexOf(id) !== -1} />
        </ListItemIcon>
        <ListItemText id={labelId} primary={isOptional ? `${name}` : `${name} (required)`} />
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

  return <List className={`${classes.root} ${className}`}>{ingredients.map(ListItem)}</List>;
}

RecipeIngredientsList.defaultProps = {
  className: '',
  ingredients: [],
};

RecipeIngredientsList.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.any,
};
