import React from 'react';
import PropTypes from 'prop-types';

import { NotificationsOutlined as NotificationsIcon, Check as CheckIcon } from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid.jsx';
import Divider from '../../../atoms/layout/divider.jsx';
import IconButton from '../../../atoms/buttons/icon.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import About from '../../about.jsx';
import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  authorData,
  projectData,
  logo,
  className,
  searchValue,
  handleChange,
  handleClick,
}) => (
  <div className={className}>
    <Grid container alignItems="center">
      <Grid item xs={2} container justifyContent="center">
        <DrawerPanel>
          <About
            logo={logo}
            projectName={projectData.name}
            authorName={authorData.name}
            email={authorData.email}
            authorUrl={authorData.url}
            projectUrl={projectData.url}
          />
          <Divider />
        </DrawerPanel>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <form noValidate autoComplete="off">
          <TextField id="search" value={searchValue} handleChange={handleChange} />
        </form>
      </Grid>
      <Grid item xs={2} container justifyContent="flex-end">
        <IconButton handleClick={handleClick}>
          <NotificationsIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} container justifyContent="flex-start">
        <IconButton handleClick={handleClick}>
          <CheckIcon />
        </IconButton>
      </Grid>
    </Grid>
  </div>
);

Component.defaultProps = {
  authorData: {},
  projectData: {},
  logo: {},
  className: '',
  searchValue: null,
  handleChange: () => {},
  handleClick: () => {},
};

Component.propTypes = {
  authorData: PropTypes.shape({
    name: About.propTypes.authorName,
    email: About.propTypes.email,
    url: About.propTypes.authorUrl,
  }),
  projectData: PropTypes.shape({
    name: About.propTypes.projectname,
    url: About.propTypes.projectUrl,
  }),
  logo: About.propTypes.logo,
  className: PropTypes.string,
  searchValue: TextField.propTypes.value,
  handleChange: TextField.propTypes.handleChange,
  handleClick: IconButton.propTypes.handleClick,
};

export default Component;
