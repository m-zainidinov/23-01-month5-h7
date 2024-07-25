import { useState } from 'react';
import ListOfContacts from './ListOfContacts';
import ContactInput from './ContactInput';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
  
    const handleAddContact = (name, phone) => {
        const newContact = {
            id: Date.now().toString(),
            name,
            phone,
        };
        setContacts([...contacts, newContact]);
    };
  
    const handleDelete = (id) => {
        setContacts((prevContacts)=>
            prevContacts.filter((contact) =>
                contact.id !== id));
    };
  
    const handleEditContact = (id, newName, newPhone) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === id ? { ...contact, name: newName, phone: newPhone } : contact
            )
        );
    };
  
    return (
        <div className="contact-list">
            <ContactInput onAddContact={handleAddContact} />
            <h1>Мои контакты</h1>
            <hr />
            <ListOfContacts
                contacts={contacts}
                onDelete={handleDelete}
                onEdit={handleEditContact}
            />
        </div>
    );
  };
  
export default ContactList