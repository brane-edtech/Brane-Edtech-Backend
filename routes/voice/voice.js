const express = require('express');
const stringSimilarity = require('string-similarity');

const bot = express();

bot.get("/", (req, res) => {
  // Simulate processing intent and generating a response
  const { query } = req.query;
  const intents = [
    {
      name: 'Greetings',
      utterances: [
        {
          utterance: 'Hello welocome to brane education platform',
          response: 'Hello! How can I assist you today?',
          // route: '/login',
        },
        {
            utterance: 'can you please take me to login page',
            route:'/login',
            response: 'Yes, I can take you to the login page. Please proceed to login.',
        },
        {
          utterance: 'open login page',
          route:'/login',
          response: 'Yes, I can take you to the login page. Please proceed to login.',
        },
        {
            utterance: 'can you please take me to signup page',
            route:'/signup',
            response: 'Yes, I can take you to the signup page. Please proceed With Registration.',
        },
        {
          utterance: 'open signup page',
          route:'/signup',
          response: 'Yes, I can take you to the signup page. Please proceed With Registration.',
        },
        {

          utterance: "what are platform features",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "Features of platform",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "What does the platform offers",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "Say me the features of platform",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "Say me the services of platform",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "tell me the services offered by the  platform",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        },

        {

          utterance: "explain platform services",

          response: "Dashboard, Dynamic time table, Learning Networks, Little Masters, Video Based Dictionary, General Search.",
          

        }

      ],
    },
    // Add more intents here
  ];

  const threshold = 0.6; // Adjust this threshold based on your needs

  const matchedIntents = intents.filter((intent) =>
    intent.utterances.some((item) =>
      stringSimilarity.compareTwoStrings(item.utterance.toLowerCase(), query.toLowerCase()) >= threshold
    )
  );

  if (matchedIntents.length > 0) {
    let bestMatch = null;
    let bestMatchScore = 0;

    // Find the best match for each matched intent
    matchedIntents.forEach((intent) => {
      intent.utterances.forEach((item) => {
        const score = stringSimilarity.compareTwoStrings(item.utterance.toLowerCase(), query.toLowerCase());
        if (score > bestMatchScore) {
          bestMatchScore = score;
          bestMatch = item;
        }
      });
    });

    if (bestMatch) {
      res.json({
        response: bestMatch.response,
        route: bestMatch.route,
      });
    } else {
      res.status(404).json({ response: 'Intent not found.' });
    }
  } else {
    res.status(404).json({ response: 'Intent not found.' });
  }
});

module.exports = bot;
