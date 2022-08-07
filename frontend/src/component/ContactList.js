import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const ContactList = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        getContacts();
    },[]);

    const getContacts = async () => {
        const response = await axios.get('http://localhost:5000/contacts');
        setContact(response.data);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-small is-success">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th className="has-text-centered">No</th>
                        <th className="has-text-centered">Name</th>
                        <th className="has-text-centered">Phone</th>
                        <th className="has-text-centered">Email</th>
                        <th className="has-text-centered">Gender</th>
                        <th className="has-text-centered">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact.id}>
                            <td>{index + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.gender}</td>
                            <td>
                                <button className="button is-small is-info">Edit</button>
                                <button className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ContactList