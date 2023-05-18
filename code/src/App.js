import React from 'react';
import { ThoughtFeed } from 'components/ThoughtFeed';
import { NewThought } from 'components/NewThought';

export const App = () => {
  return (
    <>
      <NewThought />
      <ThoughtFeed />
    </>
  )
}