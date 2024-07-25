import ContactItem from './ContactItem';

const ListOfContacts = ({ contacts, onDelete, onEdit }) => (
    <div className="contact-list">
        {contacts.map((contact) => (
            <>
                <ContactItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                onDelete={onDelete}
                onEdit={onEdit}
                />
                <hr />
            </>
            
        ))}
    </div>
);

export default ListOfContacts
