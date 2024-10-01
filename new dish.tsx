import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { Picker } from '@react-native-picker/picker'; 

const AddDishScreen = () => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [course, setCourse] = useState('Starters');  // Default course

  const handleAddDish = async () => {
    if (dishName && dishDescription && dishPrice) {
      const newDish = {
        name: dishName,
        description: dishDescription,
        price: dishPrice,
      };

      try {
        // Retrieve existing courses from AsyncStorage
        const existingCoursesJSON = await AsyncStorage.getItem('courses');
        const existingCourses = existingCoursesJSON ? JSON.parse(existingCoursesJSON) : {
          Starters: [],
          'Main Course': [],
          Dessert: [],
        };

        // Add the new dish to the correct course
        existingCourses[course].push(newDish);

        // Save the updated courses object back to AsyncStorage
        await AsyncStorage.setItem('courses', JSON.stringify(existingCourses));

        Alert.alert('Dish Added', `Dish Name: ${dishName}\nDescription: ${dishDescription}\nPrice: R${dishPrice}\nCourse: ${course}`);
        
        // Clear the input fields after submission
        setDishName('');
        setDishDescription('');
        setDishPrice('');
        setCourse('Starters');  // Reset to default course
      } catch (error) {
        Alert.alert('Error', 'Failed to save dish. Please try again.');
      }
    } else {
      Alert.alert('Input Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Price (in Rands)"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"  // Numeric keyboard for price input
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} color="#7D4CC1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7D4CC1',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default AddDishScreen;
