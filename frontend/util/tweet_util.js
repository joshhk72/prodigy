import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const tweetRegex = /\[https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status\/(\d+)\]$/g;

export const replaceTweets = str => {
  return str.replace(tweetRegex, 
    "\n<tweet id=$2 />"
  );
};

export const renderTweets = () => {
  const tweets = document.querySelectorAll("tweet");
  tweets.forEach(tweet => {
    ReactDOM.render(<TwitterTweetEmbed tweetId={tweet.id} />, tweet);
  })
};