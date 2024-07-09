import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../Colors';

const Field = ({fieldName, selectedValue, onValueChange, items}) => {
    
    return (
        <View style={styles.fields}>
            <Text style={styles.fieldName}>{fieldName}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={styles.picker}
                dropdownIconColor={colors.text1}
            >
                {items.map((item, index) => (
                    <Picker.Item key={index} label={item.label} value={item.value} />
                ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({

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
    }
});

export default Field;