// src/components/ContactSection.js
import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import database from 'C:/Users/PC Mart/Desktop/porfolio real/port/src/firebase';


const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messagesRef = ref(getDatabase(), 'messages');
    push(messagesRef, form)
      .then(() => {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <section id="contact">
      <div className="container mt-5">
        <h1 style={{color:'#FFFFFF'}}><strong>Contact</strong></h1>
        <div className="contact-info mb-4">
          <p style={{color:'#FFFFFF'}}>Email: razakhanboss519@gmail.com</p>
          <p style={{color:'#FFFFFF'}}>Phone: 03352336898</p>
          <p style={{color:'#FFFFFF'}}>
            Social Media:
            <a style={{color:'#FFFFFF'}} href="https://www.instagram.com/raxa_anu/?igsh=MWpnaWloaThucHhnYg%3D%3D" target="_blank" rel="noopener noreferrer"> Instagram</a> 
          
                    <a style={{color:'#FFFFFF'}} href="https://www.linkedin.com/in/raza-ali-khan-361321245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mb-3" onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
              <div className="form-group">
                <label htmlFor="name" style={{color:'#FFFFFF'}} >Name</label>
                <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{color:'#FFFFFF'}}>Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{color:'#FFFFFF'}}>Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" value={form.message} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" style={{ borderRadius: '5px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
