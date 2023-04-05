import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
  }

  const inputStyles = {
    backgroundColor: 'black',
    color: 'white',
    marginLeft: 10,
    padding: '8px 12px',
    borderRadius: 5,
    border: '4px solid white',
    width: '100%',
    maxWidth: 500,
  }
  const labelStyles = {
    display: 'block',
    marginBottom: 10,
    fontWeight: 'bold',
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" style={labelStyles}>
        <span style={{ display: 'inline-block', width: 100 }}>Name:</span>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyles}
          required
        />
      </label>
      <br />

      <label htmlFor="email" style={labelStyles}>
        <span style={{ display: 'inline-block', width: 100 }}>Email:</span>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
          required
        />
      </label>
      <br />

      <label htmlFor="message" style={labelStyles}>
        <span style={{ display: 'inline-block', width: 100 }}>Message:</span>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyles}
          required
        ></textarea>
      </label>
      <br />

      <center>
        <button
          type="submit"
          style={{
            marginTop: 10,
            padding: '10px 20px',
            borderRadius: 5,
            backgroundColor: '#cc02aa',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Send
        </button>
      </center>
    </form>
  )
}

export default ContactForm
