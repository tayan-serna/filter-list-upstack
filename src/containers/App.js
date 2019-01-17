// @vendors
import React from 'react';

// @components
import PostCard from './post-card';
import Filter from './filter';

import './style.scss';

export default () => (
  <section className="list-container">
    <Filter />
    <PostCard />
  </section>
);
