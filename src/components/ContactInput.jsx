import { useState } from 'react';

const ContactInput = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleAddContact = () => {
        if (name.trim() !== '' && phone.trim() !== '') {
            onAddContact(name, phone);
            setName('');
            setPhone('');
        }
    };

    return (
        <div className="contact-input">
            <input className='input-value'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Введите имя'
            />
            <input className='input-value'
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Введите номер'
            />
            <button className='add-button' onClick={ handleAddContact}>Добавить</button>
        </div>
    );
};

export default ContactInput