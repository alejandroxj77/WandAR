import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface ObjectContentProps {
  price: number | string;
  objectName: string;
}

const ObjectContent: React.FC<ObjectContentProps> = ({ price, objectName }) => {
  return (
    <View style={styles.card}>
      
      <View style={styles.priceRow}>
        <Text style={styles.priceText}>{price}</Text>
        <MaterialIcons name="monetization-on" size={20} color="#FFC107" />
      </View>

      <View style={styles.circleContainer}>
        <View style={styles.circlePlaceholder} />
      </View>

      <Text style={styles.objectName}>{objectName}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 12,
    width: Dimensions.get('window').width / 3.3,
    height: Dimensions.get('window').width / 3.3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF',
    marginRight: 4,
  },
  circleContainer: {
    alignItems: 'center',
  },
  circlePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4A90A4',
  },
  objectName: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default ObjectContent;