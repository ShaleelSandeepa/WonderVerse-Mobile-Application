import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Colors';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

const GenerateScreen = ({navigation}) => {

    const [details, setDetails] = useState({ 
        age: '', 
        gender: '', 
        storyType: '', 
        mood: '' 
    });

    const handleChange = (key, value) => {
        setDetails({ ...details, [key]: value });
    };

    return (

        <View style={styles.container}>
            <View style={styles.fields}>
                <Text style={styles.fieldName}>Age</Text>
                <Picker
                    selectedValue={details.age}
                    onValueChange={(itemValue) => handleChange('age', itemValue)}
                    style={styles.picker}
                    dropdownIconColor={colors.text1}
                >
                    <Picker.Item label="Select age" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="14" value="14" />
                    <Picker.Item label="16" value="16" />
                    <Picker.Item label="18" value="18" />
                </Picker>
            </View>

            <View style={styles.fields}>
                <Text style={styles.fieldName}>Gender</Text>
                <Picker
                    selectedValue={details.gender}
                    onValueChange={(itemValue) => handleChange('gender', itemValue)}
                    style={styles.picker}
                    dropdownIconColor={colors.text1}
                >
                    <Picker.Item label="Select gender" value="" />
                    <Picker.Item label="boy" value="boy" />
                    <Picker.Item label="girl" value="girl" />
                </Picker>
            </View>

            <View style={styles.fields}>
                <Text style={styles.fieldName}>Story Type</Text>
                <Picker
                    selectedValue={details.storyType}
                    onValueChange={(itemValue) => handleChange('storyType', itemValue)}
                    style={styles.picker}
                    dropdownIconColor={colors.text1}
                >
                    <Picker.Item label="Select story type" value="" />
                    <Picker.Item label="adventure" value="adventure" />
                    <Picker.Item label="mystery" value="mystery" />
                    <Picker.Item label="fantasy" value="fantasy" />
                    <Picker.Item label="sci-fi" value="sci-fi" />
                    <Picker.Item label="horror" value="horror" />
                    <Picker.Item label="comedy" value="comedy" />
                    <Picker.Item label="romance" value="romance" />
                </Picker>
            </View>

            <View style={styles.fields}>
                <Text style={styles.fieldName}>Mood</Text>
                <Picker
                    selectedValue={details.mood}
                    onValueChange={(itemValue) => handleChange('mood', itemValue)}
                    style={styles.picker}
                    dropdownIconColor={colors.text1}
                >
                    <Picker.Item label="Select mood" value="" />
                    <Picker.Item label="happy" value="happy" />
                    <Picker.Item label="sad" value="sad" />
                    <Picker.Item label="excited" value="excited" />
                    <Picker.Item label="scared" value="scared" />
                    <Picker.Item label="angry" value="angry" />
                    <Picker.Item label="curious" value="curious" />
                    <Picker.Item label="bored" value="bored" />
                </Picker>
            </View>

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