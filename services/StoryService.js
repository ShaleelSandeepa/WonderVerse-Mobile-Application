import axios from 'axios';

export const generateStory = async (details) => {
  const { age, gender, storyType, mood } = details;
  const prompt = `Generate an ${storyType} story for a ${age}-year-old ${gender} who is feeling ${mood}.`;

  console.log('Prompt:', prompt); // Log the prompt for debugging

  try {
    const response = await axios.post('https://api.ai21.com/studio/v1/chat/completions', {
      model: 'jamba-instruct',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 150,
      temperature: 1,
      top_p: 1
    }, {
      headers: {
        'Authorization': `Bearer jUdr3mVmew3BsUULxtAChu3zOmXGanw3`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data); // Log the response for debugging

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating story:', error.response ? error.response.data : error.message);
    throw error; // Handle or propagate the error as needed
  }
};
