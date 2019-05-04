import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

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
  error: {
    color: "#f44336"
  },
  noError: {

  }
})

class PersonalForm extends React.Component {

  render(){
    const {classes} = this.props

    const label = ( <div> <span>Akceptuje </span> <Link to={'/terms'}>regulamin</Link> <span> oraz </span> <Link to={'/privacy'}>politykę prywatności</Link> </div> )
    return (
      <div>
      <Typography component="h2" variant="h4" className={classes.title}>
        Uzupełnij dane
      </Typography>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5} >
          <TextField
            required
            error={this.props.data.errors && !!this.props.data.errors.firstName}
            helperText={this.props.data.errors && !!this.props.data.errors.firstName ? this.props.data.errors.firstName : ""}

            id="standard-dense"
            label="Imię"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            value={this.props.data.firstName}
            name="firstName"
            onChange={this.props.handleChange}
          />

          <TextField
            required
            error={this.props.data.errors && !!this.props.data.errors.lastName}
            helperText={this.props.data.errors && !!this.props.data.errors.lastName ? this.props.data.errors.lastName : ""}
            id="standard-dense"
            label="Nazwisko"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            value={this.props.data.lastName}
            name="lastName"
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5}>
          <TextField
            required
            error={this.props.data.errors && !!this.props.data.errors.email}
            helperText={this.props.data.errors && !!this.props.data.errors.email ? this.props.data.errors.email : ""}
            id="standard-dense"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            value={this.props.data.email}
            name="email"
            onChange={this.props.handleChange}
          />

          <TextField
            error={this.props.data.errors && !!this.props.data.errors.phone}
            helperText={this.props.data.errors && !!this.props.data.errors.phone ? this.props.data.errors.phone : ""}
            required
            id="standard-dense"
            label="Telefon"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            value={this.props.data.phone}
            name="phone"
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5}>
          <TextField
            error={this.props.data.errors && !!this.props.data.errors.description}
            helperText={this.props.data.errors && !!this.props.data.errors.description ? this.props.data.errors.description : ""}
            id="standard-textarea"
            label="Uwagi"
            rows="4"
            multiline
            className={classNames(classes.textArea)}
            margin="dense"
            variant="outlined"
            value={this.props.data.description}
            name="description"
            onChange={this.props.handleChange}
          />
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={32} justify="center" direction="row">
        <Grid item className={classes.item} xs={5}>


          <FormControl required={true} error={true}>
            <FormControlLabel

              control={
                <Checkbox
                  className={this.props.data.errors && !!this.props.data.errors.privacy ? classes.error: classes.noErorr}
                  checked={this.props.data.privacy}
                  onChange={this.props.handleChange}
                  name="privacy"
                  color="primary"
                />
              }
              label={label}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>

    );
  }
}

export default  withStyles(styles)(PersonalForm);
