/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import Spinning from './Spinning';
// import { Loading } from './Loading'

const API = 'https://project-happy-thoughts-api-5u3xa3b6hq-lz.a.run.app/thoughts'

export const ThoughtFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  const HandleLike = (thoughtId) => {
    fetch(`${API}/${thoughtId}/like`, { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        const UpdateHearts = thoughtsList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtsList(UpdateHearts)
      })
  };

  return (
    <>
      <section className="main-container">
        {!loading && thoughtsList.map((thought) => {
          return (
            <div key={thought._id} className="card">
              <p className="post-text">{thought.message}</p>
              <button type="button" className={thought.hearts === 0 ? 'noLikesBtn' : 'likesBtn'} onClick={() => HandleLike(thought._id)}>
                <span role="img" aria-label="Like this post">💗</span>
              </button>
              <span className="sum-hearts">x {thought.hearts}</span>
              <p className="date"> {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          )
        })}
      </section>
      {loading && (<Spinning />)}
    </>
  )
};