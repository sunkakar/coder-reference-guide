import React from 'react';
import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';


class ModeField extends React.Component {

    /*
    constructor(){
        super()
        this.state = {
            mode: 'None'
        }
    }
    */
    render() {
        return (
            <div className='content'>
               THIS IS THE CONTENT
            </div>
        );
    }
}

ModeField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ModeField;