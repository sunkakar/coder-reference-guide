import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cardList: {
        padding: "20px",
    }
  });

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
        const { classes } = this.props;

        return (
            <div className={classes.cardList}>
                
                <ContentCard/>
                
            </div>
        );
    }
}

ModeField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModeField);