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
        // {
        //   utterance: 'Brane',
        //   response: 'Hello! How can I assist you today?',
        // },

        {
          utterance: 'Hello who are you ?',
          response: 'Hi! This is Brane! your Voice bot from Brane Education How can i Assist you Today ?',
          // route: '/login',
        },
        {
          utterance: 'Hello.',
          response: 'Hi! How can I assist you today?',
          // route: '/login',
        },
        
            {
              utterance: "Hi.",
              response: "Hello! How can I assist you today?"
            },
            {
              utterance: "Hey there",
              response: "Hi! How can I assist you today?"
            },
            {
              utterance: "Good morning Brane.",
              response: "Hey Hiii! Good morning  ! How can I help you?"
            },
            {
              utterance: "Good afternoon Brane.",
              response: "Hey Hiii! Good after noon ! How can I help you?"
            },
            {
              utterance: "Good evening Brane.",
              response: "Hey Hiii! Good evening ! How can I help you?"
            },
        {
            utterance: 'can you please take me to login page',
            route:'/login',
            response: 'Yes, I can take you to the login page. Please proceed to login.',
        },
        {
          utterance: 'please take me to login page',
          route:'/login',
          response: 'Yes, I can take you to the login page. Please proceed to login.',
      },
      {
        utterance: 'Go to login page',
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
          utterance: 'take me to signup page',
          route:'/signup',
          response: 'Yes, I can take you to the signup page. Please proceed With Registration.',
      },
      {
        utterance: 'Go to signup page',
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
        },{
          utterance : "Give me the Parent voice of Julia Harris",
          response  : "Brane education has helped my son alot in his studies.He improved alot in his studies and is now able to score good marks in his exams"
        },
        {
          utterance: "Play today's motivational video",
          response: "I am playing the video"
        },
        {
          utterance: "Play today's video",
          response: "I am playing  Motivational video"
        },
        {
          utterance : "Leaders Voice",
          response  : "This Voice-interactive AI Platform is a game Changer.it revoltionizes education."
        },
        {
          utterance : "Cirriculum Supported by Brane Education",
          response : "we support multiple Boards let me say few Telangana State Board Andhra Pradesh Board Maharastra Board Assam Board "
        },
        {
          utterance : "Boards supported by the platform",
          repsonse : "we support multiple Boards let me say few Telangana State Board Andhra Pradesh Board Maharastra Board Assam Board "
        },
        {
          utterance : "Cirriculum",
          response : "we support multiple Boards let me say few Telangana State Board Andhra Pradesh Board Maharastra Board Assam Board "
        },
        {
          "utterance": "Go to landing page",
          "response": "Okay, I am taking you to the landing page.",
          "route": "/childpage"
        },
        {
          "utterance": "take me to landing page",
          "response": "Okay, I am taking you to the landing page.",
          "route": "/childpage"
        },
        {
          "utterance": "move to landing page",
          "response": "Okay, I am taking you to the landing page.",
          "route": "/childpage"
        },
        {
          "utterance": "roll back to landing page",
          "response": "Okay, I am taking you to the landing page.",
          "route": "/childpage"
        },
        {
          "utterance": "move to landing page",
          "response": "Okay, I am taking you to the landing page.",
          "route": "/childpage"
        },
        {
          "utterance": "what is today's quote",
          "response": "Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success. ",
          "route": "/childpage"
        },
        {
          "utterance": "Today's Inspirational quote",
          "response": "Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.",
          "route": "/childpage"
        },
        {
          "utterance": "say me today's quote",
          "response": "Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.",
          "route": "/childpage"
        }

      ],
    },
    
    // Add more intents here
  ];

  const threshold = 0.7; // Adjust this threshold based on your needs

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

    } 
    else {
      res.status(404).json({ response:'Intent not found' });
    }

  } else {
    res.status(404).json({ response: "Intent not found" });
  }
});

module.exports = bot;

