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
  className,
  handleChange,
  handleClick,
  logo,
  projectData,
  searchValue,
}) => (
  <div className={className}>
    <Grid alignItems="center" container>
      <Grid container item justifyContent="center" xs={2}>
        <DrawerPanel>
          <About
            authorName={authorData.name}
            authorUrl={authorData.url}
            email={authorData.email}
            logo={logo}
            projectName={projectData.name}
            projectUrl={projectData.url}
          />
          <Divider />
        </DrawerPanel>
      </Grid>
      <Grid container item justifyContent="center" xs={6}>
        <form autoComplete="off" noValidate>
          <TextField handleChange={handleChange} id="search" value={searchValue} />
        </form>
      </Grid>
      <Grid container item justifyContent="flex-end" xs={2}>
        <IconButton handleClick={handleClick}>
          <NotificationsIcon />
        </IconButton>
      </Grid>
      <Grid container item justifyContent="flex-start" xs={2}>
        <IconButton handleClick={handleClick}>
          <CheckIcon />
        </IconButton>
      </Grid>
    </Grid>
  </div>
);

Component.defaultProps = {
  authorData: {},
  className: '',
  handleChange: () => {},
  handleClick: () => {},
  logo: {},
  projectData: {},
  searchValue: null,
};

Component.propTypes = {
  authorData: PropTypes.shape({
    email: About.propTypes.email,
    name: About.propTypes.authorName,
    url: About.propTypes.authorUrl,
  }),
  className: PropTypes.string,
  handleChange: TextField.propTypes.handleChange,
  handleClick: IconButton.propTypes.handleClick,
  logo: About.propTypes.logo,
  projectData: PropTypes.shape({
    name: About.propTypes.projectname,
    url: About.propTypes.projectUrl,
  }),
  searchValue: TextField.propTypes.value,
};

export default Component;
