import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Colors';
import Field from '../components/Field';

const GenerateScreen = ({navigation}) => {

    const [details, setDetails] = useState({ 
        age: '', 
        gender: '', 
        storyType: '', 
        mood: '',
        size: ''
    });

    const handleChange = (key, value) => {
        setDetails({ ...details, [key]: value });
    };

    const ageItems = [
        { label: 'Select age', value: '' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '10', value: '10' },
        { label: '12', value: '12' },
        { label: '14', value: '14' },
        { label: '16', value: '16' },
        { label: '18', value: '18' }
    ];

    const genderItems = [
        { label: 'Select gender', value: '' },
        { label: 'boy', value: 'boy' },
        { label: 'girl', value: 'girl' }
    ];
    
    const storyTypeItems = [
        { label: 'Select story type', value: '' },
        { label: 'adventure', value: 'adventure' },
        { label: 'mystery', value: 'mystery' },
        { label: 'fantasy', value: 'fantasy' },
        { label: 'sci-fi', value: 'sci-fi' },
        { label: 'horror', value: 'horror' },
        { label: 'comedy', value: 'comedy' },
        { label: 'romance', value: 'romance' }
    ];
    
    const moodItems = [
        { label: 'Select mood', value: '' },
        { label: 'happy', value: 'happy' },
        { label: 'sad', value: 'sad' },
        { label: 'excited', value: 'excited' },
        { label: 'scared', value: 'scared' },
        { label: 'angry', value: 'angry' },
        { label: 'curious', value: 'curious' },
        { label: 'bored', value: 'bored' }
    ];

    const sizeItems = [
        { label: 'Select story size', value: 0 },
        { label: 'small', value: 200 },
        { label: 'medium', value: 300 },
        { label: 'large', value: 400 }
    ];
    

    return (

        <View style={styles.container}>

            <Field
                fieldName={'Age'} 
                selectedValue={details.age}
                onValueChange={(value) => handleChange('age', value)}
                items={ageItems} />
            <Field
                fieldName={'Gender'} 
                selectedValue={details.gender}
                onValueChange={(value) => handleChange('gender', value)} 
                items={genderItems} />
            <Field 
                fieldName={'Story Type'} 
                selectedValue={details.storyType}
                onValueChange={(value) => handleChange('storyType', value)}
                items={storyTypeItems} />
            <Field 
                fieldName={'Mood'} 
                selectedValue={details.mood}
                onValueChange={(value) => handleChange('mood', value)} 
                items={moodItems} />
            <Field 
                fieldName={'Size'} 
                selectedValue={details.size}
                onValueChange={(value) => handleChange('size', value)} 
                items={sizeItems} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Story', { details })}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Generate Story</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 15
    },

    fields: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginTop: 15
    },

    fieldName: {
        color: colors.text1,
        height: 'auto',
        flex: 0.3,
        textAlignVertical: 'center',
        fontSize: 16

    },

    picker: {
        color: colors.text1,
        tintColor: colors.text1,
        flex: 1
    },

    button: {
        borderRadius: 10,
        backgroundColor: 'dodgerblue',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 200,
        alignSelf: 'center',
        marginTop: 100,
        elevation: 8
    },

    buttonText: {
        fontSize: 16,
        color: colors.text1,
        textAlign: 'center',
    },
});

export default GenerateScreen;