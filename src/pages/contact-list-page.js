import React, {Component} from 'react';
import ContactList from '../components/contact-list';
import { fetchContacts, deleteContact } from '../actions/contact-actions';
import {  connect } from 'react-redux';

 class ContactListPage extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return (
            <div>
                <h1>List of Contacts </h1>
                <ContactList contacts={this.props.contacts}  deleteContact={this.props.deleteContact} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contactStore.contacts
    }
}

export default  connect(mapStateToProps, {fetchContacts, deleteContact})(ContactListPage);