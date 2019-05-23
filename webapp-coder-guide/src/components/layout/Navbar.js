import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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