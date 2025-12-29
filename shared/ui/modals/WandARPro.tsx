import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import TextButton from '@/presentation/atoms/buttons/TextButton';
import Label from '@/presentation/atoms/Label';
import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import { Colors } from '@/shared/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface UpgradeContentProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const WandARPro = ({ onConfirm, onCancel }: UpgradeContentProps) => {
  const features = [
    "Ad free experience",
    "Get 6 additional sell slots",
    "Max post duration increases to 23hrs/6days/4weeks",
    "Additional post duration time can be purchased from anywhere after object has been posted, thereby securing your objects location",
    "All tools unlocked",
    "All presets unlocked",
  ];

  return (
    <LinearGradientBackground style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Label style={{fontSize: 28}}>WandAR Pro</Label>
      <Label style={{fontSize: 22}}>Subscribe for</Label>
      <Label style={{fontSize: 64, color: Colors.light.primaryColor}}>$4.99</Label>
      <Label style={{fontSize: 16}}>or 5,000 coins</Label>
      <Label style={{fontSize: 20, color: Colors.light.primaryColor}}>per month</Label>

      <View style={styles.featuresContainer}>
        <Label style={{alignSelf: 'center', fontSize: 18}}>With your subscription you get</Label>
        {features.map((item, index) => (
          <View key={index} style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.light.primaryColor} />
            <Label style={styles.featureText}>{item}</Label>
          </View>
        ))}
      </View>

      <PrimaryButton label='Subscribe!' styles={{backgroundColor: 'red'}} labelStyle={{fontSize: 18, paddingHorizontal: 80}} onPress={onConfirm}/>

      <TextButton label='Not now' onPress={onCancel} styles={{textDecorationLine: 'underline', fontSize: 18}}/>
    </LinearGradientBackground>
  );
};

const styles = StyleSheet.create({
  featuresContainer: {
    maxWidth: '85%',
    borderRadius: 25,
    backgroundColor: Colors.light.primaryColor + '30',
    padding: 26,
    gap: 12
  },
  featureRow: {
    flexDirection: 'row',
    gap: 5,
  },
  featureText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default WandARPro;