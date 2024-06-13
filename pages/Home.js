import React, { useState, useEffect } from "react";
import colors from '../Colors';
import SearchBar from "react-native-dynamic-search-bar";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'appNameFont': require('../assets/fonts/GreatVibes-Regular.ttf'),
  });
};

const Home = ({ progress }) => {
    const navigation = useNavigation();

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
    async function loadResourcesAndDataAsync() {
        try {
        // Load fonts
        await fetchFonts();
        } catch (e) {
        console.warn(e);
        } finally {
        setFontLoaded(true);
        SplashScreen.hideAsync();
        }
    }

    loadResourcesAndDataAsync();
    }, []);

    if (!fontLoaded) {
        return null; // Return null while fonts are loading
    }
  
    const data = [
        { id: '1', title: 'Quick Story', color: colors.item1 },
        { id: '2', title: 'Create Story', color: colors.item2 },
        { id: '3', title: 'My Stories', color: colors.item3 },
        { id: '4', title: 'Item 4', color: colors.item4 }
    ];

    const renderItem = ({ item }) => (
        <View style={[styles.gridItem, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.appName}>Wonder Verse</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.grid}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    section1: {
        height: 80,
        backgroundColor: colors.primary,
        // alignItems: 'center',
        // alignContent: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
    },
    appName: {
        color: colors.topic1,
        fontStyle: 'normal',
        fontSize: 48,
        fontFamily: 'appNameFont',
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
    },
    grid: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10,
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: ( Dimensions.get('window').width / 2 - 30 ) / 2, // Approx half width
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    itemText: {
        color: colors.topic1,
        fontSize: 16,
        fontFamily: 'Roboto',
    }
});

export default Home;
