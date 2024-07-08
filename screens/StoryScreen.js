// screens/StoryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { generateStory } from '../services/StoryService.js';
// import StoryReader from '../components/StoryReader';
// import ARBackground from '../components/ARBackground';
// import BackgroundMusic from '../components/BackgroundMusic';

const StoryScreen = ({ route }) => {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const { details } = route.params;

  useEffect(() => {
    const fetchStory = async () => {
      const generatedStory = await generateStory(details);
      setStory(generatedStory);
      setLoading(false);
    };

    fetchStory();
  }, [details]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* <ARBackground />
          <StoryReader story={story} />
          <BackgroundMusic musicFile={require('../assets/musics/twinkle.mp3')} /> */}
        </>
      )}
    </View>
  );
};

export default StoryScreen;
