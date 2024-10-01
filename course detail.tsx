import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const courses = {
  starters: {
    title: 'Starters',
    description: 'Explore a variety of delicious starters to kick off your meal. Our selection includes:',
    dishes: [
      { name: 'Bruschetta with Tomato and Basil', description: ' Freshly toasted slices of baguette topped with a zesty mixture of ripe tomatoes, garlic, basil, and olive oil. A light, refreshing Italian starter that’s full of flavor. Price:R150' },
      { name: 'Caprese Salad Skewers', description: 'ini skewers of fresh mozzarella, cherry tomatoes, and basil leaves, drizzled with balsamic glaze. A simple yet elegant appetizer that captures the essence of Mediterranean cuisine. Price:R180' },
      { name: 'Mini Spinach and Feta Puffs', description: 'Flaky puff pastry filled with a savory spinach and feta cheese mixture. These bite-sized Greek-inspired snacks are crispy on the outside and creamy on the inside. Price:R50' },
    ],
  },
  mainCourse: {
    title: 'Main Course',
    description: 'Enjoy our range of hearty and flavorful main courses. Choose from:',
    dishes: [
      { name: 'Grilled Salmon with Lemon Butter Sauce', description: ' Fresh, flaky salmon fillet grilled to perfection and drizzled with a rich lemon butter sauce. Served with roasted asparagus and garlic mashed potatoes for a balanced, elegant meal. Price:R350' },
      { name: 'Vegan Buddha Bowl', description: 'A vibrant, plant-based bowl packed with quinoa, roasted sweet potatoes, avocado, sautéed kale, chickpeas, and a drizzle of tahini dressing. This nutrient-dense meal is as delicious as it is healthy. Price:R175' },
      { name: 'Barbecue Ribs', description: 'Fall-off-the-bone tender ribs smothered in a smoky, tangy barbecue sauce. Served with a side of coleslaw and baked beans, this is the ultimate comfort food for barbecue lovers.. Price:R352' },
    ],
  },
  dessert: {
    title: 'Dessert',
    description: 'Indulge in our sweet and delectable desserts:',
    dishes: [
      { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey molten center. Price:R152' },
      { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked sponge and mascarpone cream. Price:R170' },
      { name: 'Cheesecake', description: 'Creamy cheesecake served with a strawberry compote. Price:R270' },
    ],
  },
};

const CourseDetailScreen = ({ route }) => {
  const { courseType } = route.params;
  const course = courses[courseType];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {course.dishes.map((dish, index) => (
        <View key={index} style={styles.dishContainer}>
          <Text style={styles.dishTitle}>{index + 1}. {dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'nude',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7D4CC1',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  dishContainer: {
    marginBottom: 20,
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 16,
  },
});

export default CourseDetailScreen;
