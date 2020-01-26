import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';

// import { linkTo } from '@storybook/addon-links';
import NewsCard from "./NewsCard";

const data = {
  backgroundUrl: 'http://138.68.72.9:8000//images/JeO7OfyE3Rycv4N0WJv4sl9nxDO1KwxhNgePBb97.jpg',
  date: 'Dec 20, 2017 14:12',
  title: 'CCF#4 18-19th of May 2018',
  text: 'Hey you! It\'s been 7 months since we last talked. We miss you, and we hope you miss us. Remember all the good times? Good! Today we\'re happy to announce the dates for next year (18-19th of May) and our first speaker: Anita Sarkeesian from Feminist Frequency! We\'re super excited to be able to bring such a great speaker down to the coast! For those of you who\'ve been thinking about cyborging it up in the near future: Keep a close eye on the Creative Coast Facebook-feed, there\'ll be happiness waiting for you in the coming weeks!',
};

storiesOf('NewsCard', module).add('Simple NewsCard', () => (
  <div style={{height: "100vh", position: 'relative'}} className="d-flex align-items-center justify-content-center">
    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
      <h5 style={{textAlign: "center"}}>Newscard</h5>
      <NewsCard data={data} />
    </div>
  </div>
));
