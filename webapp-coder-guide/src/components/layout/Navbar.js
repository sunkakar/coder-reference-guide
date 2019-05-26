import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Searchbar from './Searchbar';
import Modefield from './ModeField';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    justify: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchAppBar extends React.Component {

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
        const { classes } = this.props;

    
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <InputLabel htmlFor="filled-mode-simple">Mode: </InputLabel>
                
                {/* Modefield Component */}
                <Modefield/>
                
                <div className={classes.grow} />
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    Algorithm Look Up
                </Typography>
                <div className={classes.grow} />
                
                {/* Searchbar Component */}
                <Searchbar/>
                
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);