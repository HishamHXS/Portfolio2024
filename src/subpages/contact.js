import React from 'react';
import { EMAIL, PHONE } from '../constants';
import '../styles/contact.css'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const subject = formData.get('subject');
        const content = formData.get('content');

        if (!email || !subject || !content) {
            console.log('All fields are required');
            return;
        }

        // Open the user's email client
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        e.target.reset();
    }

    return (
        <div>
            <form className="contact" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" required></textarea>

                <button type="submit">Submit</button>
            </form>
            <p>Email: {EMAIL}</p>
            <p>Phone:{PHONE}</p>
        </div>
    );
}

export default Contact;