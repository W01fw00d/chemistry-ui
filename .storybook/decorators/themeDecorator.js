import React from 'react';
import { ThemeProvider } from '@material-ui/core';

const ThemeDecorator = theme => storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
export default ThemeDecorator;
