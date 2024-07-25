import { useState } from 'react';

const ContactItem = ({ id, name, phone, onDelete, onEdit}) => {
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedPhone, setEditedPhone] = useState(phone);

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        if (editedName.trim() !== '' && editedPhone.trim() !== '') {
            onEdit(id, editedName, editedPhone);
            setEditing(false)
        }
    }

    return (
        <div className='input-result'>
            {editing ? (
                <>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editedPhone}
                        onChange={(e) => setEditedPhone(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <p><b>Имя:</b> {name}</p>
                    <p><b>Номер телефона:</b> {phone}</p>
                </>
            )}
            {!editing && (
                <>
                <button className='btn edit' onClick={handleEdit}>
                    Изменить</button>
                <button className='btn delete' onClick={() => onDelete(id)}>
                    Удалить</button>
                </>
            )}
            {editing && (
                <button className='add-button save' onClick={handleSave}>
                    Сохранить</button>
            )}
        </div>
    )
}

export default ContactItem