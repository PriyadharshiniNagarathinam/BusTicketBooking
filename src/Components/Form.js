import React, { useState } from 'react';
import "../App.css";


const ControlledForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const formContainer = {
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }

    const form = {
        display: "flex",
        flexDirection: "column"
    }

    const label = {
        marginBottom: "8px"
    }

    const textField = {
        padding: "8px",
        marginBbottom: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px"
    }

    const buttonStyle = {
        backgroundColor: "#4caf50",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container" style={formContainer}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={form}>
                <label style={label}>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={textField}/>
                <br />
                <label style={label}>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={textField}/>
                <br />
                <label style={label}>Email</label>
                <input style={textField} type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                <br />
                <label style={label}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} style={textField}></textarea>
                <br />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};
export default ControlledForm;
