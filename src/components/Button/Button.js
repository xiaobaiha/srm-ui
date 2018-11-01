import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class MButton extends React.Component {
  render() {
    const {children, disabled, ...rest} = this.props;
    return (
      <Button>{children}</Button>
    );
  }
}

MButton.propTypes = {
    type: PropTypes.string
};

module.exports =  MButton;