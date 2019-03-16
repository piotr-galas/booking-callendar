import React from 'react';
import Item from './item';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ItemList extends React.Component {
  renderItems(){
    return this.props.items.map(item =>{
       return (
         <Grid key={item.id} onClick={() => this.props.handleSelectItem(item)} item xs={3}>
           <Item item={item} />
         </Grid>
       )
    })
  }

  render(){
    const {classes} = this.props
    return (
      <div>
        <Typography component="h2" variant="h4" className={classes.title}>
          Wybierz przedmiot który chcesz wypożyczyć
        </Typography>
        <Grid container className={classes.root} spacing={32} justify="center" direction="row">
          {this.renderItems()}
        </Grid>
    </div>
    );
  }
}


export default withStyles(styles)(ItemList);
