import React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: '20px',
        outline: 'none',
      },
});


class ContentModal extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    handleOpen() {
      this.setState({ open: true });
    };
  
    handleClose(){
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
          <Button onClick={this.handleOpen}>Read More</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={{top: '45%', left: '37%'}} className={classes.paper}>
              <Typography type="title" id="modal-title">
                Text in a modal
              </Typography>
              <Typography type="subheading" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          </Modal>
        </div>
      );
    }
  }
  /*
  SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  */
  
  export default withStyles(styles)(ContentModal);