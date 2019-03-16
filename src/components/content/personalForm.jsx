import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: 'flex'

  },
  textArea: {
    width: "100%"
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
})

class PersonalForm extends React.Component {

  render(){
    const {classes} = this.props

    return (
      <div>
      <Typography component="h2" variant="h4" className={classes.title}>
        Uzupłnij dane
      </Typography>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5} direction="row" justify="space-around">
          <TextField
            required
            id="standard-dense"
            label="Imie"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
          />

          <TextField
            required
            id="standard-dense"
            label="Nazwisko"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5} direction="row" justify="space-around">
          <TextField
            required
            id="standard-dense"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
          />

          <TextField
            required
            id="standard-dense"
            label="Telefon"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5} direction="row" justify="space-around">
          <TextField
            id="standard-textarea"
            label="Uwagi"
            rows="4"
            multiline
            className={classes.textArea}
            margin="dense"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>

    );
  }
}

export default  withStyles(styles)(PersonalForm);
