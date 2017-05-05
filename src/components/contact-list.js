import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import ContactCard from './contact-cards';

export default function ContactList({contacts, deleteContact}) {
    console.log(contacts)
    return (
        <Card.Group>
            {contacts.map(contact => ( 
                    <ContactCard key={contact._id} contact={contact}  deleteContact={deleteContact} />
                    
                 ))}
        </Card.Group>
    )
}