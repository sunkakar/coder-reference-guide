import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    card: {
      minWidth: 275,
      maxWidth: 300,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
});


class ContentCard extends React.Component {

    
    constructor(){
        super()
        this.state = {
           //Empty stateless
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='content-card'>
               <Card className={classes.card}>
                   <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        LibraryName
                    </Typography>
                    <Typography variant="h5" component="h2">
                        function_name()
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Language
                    </Typography>
                        <Typography variant="body2" component="p">
                            A small description of the function. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read More</Button>
                    </CardActions>
               </Card>
            </div>
        );
    }
}


export default withStyles(styles)(ContentCard);