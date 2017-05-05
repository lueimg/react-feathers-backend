import React, {Component} from 'react';
import ContactForm from '../components/contact-form';
import {Redirect} from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newContact, saveContact, fetchContact, updateContact } from '../actions/contact-actions';

class ContactFormPage extends Component {

    state = {
        redirect: false
    }
componentDidMount() {
    const { _id } = this.props.match.params;
    if(_id){
        this.props.fetchContact(_id)
    } else {
        this.props.newContact();
    }
}

submit = (contact) => {
  if(!contact._id) {
    return this.props.saveContact(contact)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  } else {
    return this.props.updateContact(contact)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }
}

    render() {
        return (
            <div>
                {this.state.redirect ? 
                    <Redirect to="/" />: 
                    <ContactForm  
                        contact={this.props.contact} 
                        loading={this.props.loading}
                        onSubmit={this.submit}
                />}
                
            </div>
        );
    }

}

const mapStateToProps = ({contactStore}) => {
    return {
        contact: contactStore.contact,
        errors: contactStore.errors
    }
}

export default connect(
  mapStateToProps, {newContact, saveContact, fetchContact, updateContact})(ContactFormPage);