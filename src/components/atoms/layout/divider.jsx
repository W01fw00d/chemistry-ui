import React from 'react';
import PropTypes from 'prop-types';

import { Divider } from '@material-ui/core';

const Component = ({ className }) => <Divider className={className} />;

Component.defaultProps = {
    className: '',
};

Component.propTypes = {
    className: PropTypes.string,
};

export default Component;
