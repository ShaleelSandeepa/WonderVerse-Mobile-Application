// screens/StoryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { generateStory } from '../services/StoryService.js';
import colors from '../Colors';
// import StoryReader from '../components/StoryReader';
// import ARBackground from '../components/ARBackground';
// import BackgroundMusic from '../components/BackgroundMusic';

const StoryScreen = ({ route }) => {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const { details } = route.params;
  const [detailedStory, setDetails] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchStory = async () => {
      const generatedStory = await generateStory(details);
      setStory(generatedStory);
      setLoading(false);

      const { title, content } = extractTitleAndContent(story);
      setDetails({ title, content });
    };

    fetchStory();
  }, [details]);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* <ARBackground />
          <StoryReader story={story} />
          <BackgroundMusic musicFile={require('../assets/musics/twinkle.mp3')} /> */}
          <Text style={styles.title}>{story.split("content:")[0].split("title:")[1].trim()}</Text>
          <Text style={styles.content}>{story.split("content:")[1].trim()}</Text>
          {/* <Text>{detailedStory.content}</Text> */}
          {/* <Text>{story}</Text> */}
          {/* {console.log(detailedStory.title)} */}
        </>
      )}
    </View>
    </ScrollView>
  );
};

const extractTitleAndContent = (text) => {
  const titleMatch = text.match(/title:'.*'/);
  const contentMatch = text.match(/content:'.*'[\s\S]*The end/);

  const title = titleMatch ? titleMatch[0] : '';
  const content = contentMatch ? contentMatch[0] : '';

  return { title, content };
};

const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: colors.secondary,
    color: colors.text1,
    padding: 10,
    borderRadius: 5,
    margin: 10
  },

  content: {
    margin: 10,
    fontSize: 16,
    textAlign: 'justify'
  }

});

export default StoryScreen;
