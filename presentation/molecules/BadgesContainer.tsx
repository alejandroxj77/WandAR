import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Label from '../atoms/Label';

const DATA = [
  { id: '1', title: 'My Badge 1' },
  { id: '2', title: 'My Badge 2' },
  { id: '3', title: 'My Badge 3' },
  { id: '4', title: 'My Badge 4' },
  { id: '5', title: 'My Badge 5' },
  { id: '6', title: 'My Badge 6' },
  { id: '7', title: 'My Badge 7' },
  { id: '8', title: 'My Badge 8' },
  { id: '9', title: 'My Badge 9' },
];

const BadgeItem = ({ title= '[title]' }) => (
  <View style={styles.itemContainer}>
    <View style={styles.badgeCircle}>
      <MaterialCommunityIcons name="trophy-variant" size={40} color="white" />
    </View>
    <Label style={styles.badgeText}>{title}</Label>
  </View>
);

export default function BadgesContainer() {
  return (
    <View style={styles.screen}>
      <ScrollView 
        style={styles.card} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Label style={styles.title}>Badges</Label>

        <View style={styles.gridContainer}>
          {DATA.map((item) => (
            <BadgeItem key={item.id} title={item.title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: 250,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#0095da',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  itemContainer: {
    width: '33.33%', 
    alignItems: 'center',
  },
  badgeCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0095da',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  badgeText: {
    color: '#0095da',
    fontSize: 13,
    textAlign: 'center',
  },
});