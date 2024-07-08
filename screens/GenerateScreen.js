import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GenerateScreen = ({navigation}) => {

    const [details, setDetails] = useState({ age: '', gender: '', storyType: '', mood: '' });

    const handleChange = (key, value) => {
        setDetails({ ...details, [key]: value });
    };

    return (

        <View>
            <Text>Age:</Text>
      <TextInput onChangeText={(text) => handleChange('age', text)} />
      <Text>Gender:</Text>
      <TextInput onChangeText={(text) => handleChange('gender', text)} />
      <Text>Story Type:</Text>
      <TextInput onChangeText={(text) => handleChange('storyType', text)} />
      <Text>Mood:</Text>
      <TextInput onChangeText={(text) => handleChange('mood', text)} />
      <Button title="Generate Story" onPress={() => navigation.navigate('Story', { details })} />
        </View>

    );
};

export default GenerateScreen;