import React, { useState } from 'react';

export const NewThought = () => {
  const [newThought, setNewThought] = useState('');

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    if (newThought.length < 5) {
      return alert('Get on that keyboard, more than 5 characters, please!')
    } else if (newThought.length > 140) {
      return alert('Are you some sort of hacker?! No more than 140 characters, please!')
    } else {
      const Submit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      };
      fetch('https://project-happy-thoughts-api-5u3xa3b6hq-lz.a.run.app/thoughts', Submit)
        .then((response) => response.json())
        .then(() => {
          setNewThought('');
          setTimeout(() => window.location.reload(), 3000)
        })
    }
  };

  return (
    <section className="main-container">
      <form onSubmit={HandleFormSubmit} className="form-card">
        <label htmlFor="newThought" className="head-thought">What is making you happy right now?
          <textarea
            id="newThought"
            type="text"
            placeholder="Type your happy thoughts here..."
            rows="4"
            cols="40"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />
        </label>
        <p className={newThought.length > 140 ? 'counter' : 'counter'}>{newThought.length} / 140</p>
        <button className="submitBtn" type="submit">
          <span>
            <span className="heart" role="img" aria-label="heart"> 💗 </span>
            Send happy thought
            <span className="heart" role="img" aria-label="heart"> 💗 </span>
          </span>
        </button>
      </form>
    </section>
  )
};