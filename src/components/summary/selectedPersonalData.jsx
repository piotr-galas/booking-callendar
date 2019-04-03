import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2.4,
    paddingBottom: theme.spacing.unit * 2.4,
    cursor: 'pointer',
    '&:hover': {
     background: theme.palette.grey[50]
    }
  },
})

class SelectedPersonalData extends React.Component{
  get renderFullName(){
    if(this.props.personalForm.firstName !== "" || this.props.personalForm.lastName !== ""){
      return (
        <div>
          {this.props.personalForm.firstName} {this.props.personalForm.lastName}
        </div>
      )
    }else{
      return ""
    }
  }

  get renderEmail(){
    if(this.props.personalForm.email !== ""){
      return (
        <div>
          <br />
          Email: {this.props.personalForm.email}
        </div>
      )
    }else{
      return ""
    }
  }

  get renderPhone(){
    if(this.props.personalForm.phone !== ""){
      return (
        <div>
          <br />
          Telefon: {this.props.personalForm.phone}
        </div>
      )
    }else{
      return ""
    }
  }

  get renderDescription(){
    if(this.props.personalForm.description !== ""){
      return (
        <div>
          <br />
          {this.props.personalForm.description}
        </div>
      )
    }else{
      return ""
    }
  }


  content(){
    if(this.props.personalForm.firstName === "" &&
      this.props.personalForm.lastName === "" &&
      this.props.personalForm.email === "" &&
      this.props.personalForm.phone === "" &&
      this.props.personalForm.description === ""
    ){
      return  "Imie i nazwisko"
    }else{
      return (
        <div>
          {this.renderFullName}
          {this.renderEmail}
          {this.renderPhone}
          {this.renderDescription}
        </div>
      )
    }
  }
  render(){
    const {classes} = this.props

    return (
      <Paper className={classes.root} elevation={1}>
        {this.content()}
      </Paper>)
  }
}

export default withStyles(styles)(SelectedPersonalData)
