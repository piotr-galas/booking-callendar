import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
  },
  description: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  okIcon: {
    paddingTop: theme.spacing.unit * 4,
    fontSize: 100,
    color: theme.palette.primary.main
  }
})

class ThankYou extends React.Component{

  render(){
    console.log(this.props.personalForm)
    const { classes } = this.props;
    const { personalForm } = this.props


    return (
      <div className={classes.root} >
        <Typography variant="h3" component="h3">
          Dziękujemy za rezerwację!
        </Typography>
        <Icon className={classes.okIcon}>check</Icon>
        <Typography className={classes.description} variant="h7" component="h7">
          Na email: {personalForm.email} zostało wysłane potwierdzenie rezerwacji.
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(ThankYou)
