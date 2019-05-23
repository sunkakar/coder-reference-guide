import React from 'react';
import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


class ModeField extends React.Component {

    constructor(){
        super()
        this.state = {
            mode: 'None'
        } 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render() {
        return (
                <Select
                    value={this.state.mode}
                    onChange={this.handleChange}
                    input={<FilledInput name="mode" id="filled-mode-simple" />}
                >
                    <MenuItem value="">
                    <em>Any Language</em>
                    </MenuItem>
                    <MenuItem value={10}>Python</MenuItem>
                    <MenuItem value={20}>MATLAB</MenuItem>
                    <MenuItem value={30}>C</MenuItem>
                </Select>
        );
    }
}

ModeField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ModeField;