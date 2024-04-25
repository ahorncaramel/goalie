import React, { useState } from 'react';
import { View,
    TextInput,
    Button,
    StyleSheet} 
    from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

const CreateGaol = () => {
    const [title, setTitle] = useState('');
    const [specific, setSpecific] = useState('');
    const [measurable, setMeasurable] = useState('');
    const [achievable, setAchievable] = useState('');
    const [relevant, setRelevant] = useState('');
    const [timeBound, setTimeBound] = useState('');

    const handleSubmit = () => {
        //handle from submission
    };

    return (
        <View>
            <TextInput 
            style={styles.input}
            onChangeText = {setTitle}
            placeholder='Title'
            value={title}
            maxLength={50}
            />
            <TextInput 
            style={styles.input}
            placeholder='Specific'
            value={specific}
            onChangeText={setSpecific}
            />
            <TextInput 
            style={styles.input}
            placeholder='Measurable'
            value={measurable}
            onChangeText={setMeasurable}
            />
            <TextInput 
            style={styles.input}
            placeholder='Achievable'
            value={achievable}
            onChangeText={setAchievable}
            />
            <TextInput 
            style={styles.input}
            placeholder='Relevant'
            value={relevant}
            onChangeText={setRelevant}
            />
            <DatePicker 
            value ={time}
            mode = "date"
            display ="default"
            onChange={(event, selectedDate) => {
                setTime(currentDate);
            }}
            
            />
            <Button title='Submit' onPress={handleSubmit}/>
        </View>
)} // end of CreateGoal
