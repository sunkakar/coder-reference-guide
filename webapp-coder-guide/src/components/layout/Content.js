import React from 'react';
import PropTypes from 'prop-types';


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