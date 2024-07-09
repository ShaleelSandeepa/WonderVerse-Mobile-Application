import axios from 'axios';

export const generateStory = async (details) => {
  const { age, gender, storyType, mood, size } = details;
  const prompt = `Generate an ${storyType} story for a ${age}-year-old ${gender} who is feeling ${mood}. 
  Provide a story with word count is less than ${size}. Provide a "title" as the key as simple letters for the story as well. 
  Provide a the story key as "content" in simple letters. Also Display as "The End" in end of the story. 
  Format --> title:[title of the story] -->next line--> content:[content of the story] -->Last Line display--> 'The End'`;

  console.log('Prompt:', prompt); // Log the prompt for debugging

  try {
    const response = await axios.post('https://api.ai21.com/studio/v1/chat/completions', {
      model: 'jamba-instruct',
      messages: [
        { role: 'user', content: prompt }
      ],
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
