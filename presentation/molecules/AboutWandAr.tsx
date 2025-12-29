import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Asumiendo que estos vienen de tu configuración global
const FontFamilies = { PantonBold: 'Panton-Bold' };
const Colors = { 
  light: { text: '#FFFFFF' }, 
  warning: '#FF0000', 
  accent: '#00AEEF' 
};

const WandARInfoScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.label}>
        Welcome to WandAR!!{"\n"}
        Leave your augmented reality objects in real world locations for everyone to see.
      </Text>

      <Text style={[styles.label, styles.sectionMargin]}>
        <Text style={styles.warningText}>Warning!!</Text> Posting adult or offensive content may result in the removal of your account.
      </Text>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Report System:</Text>
        <Text style={styles.label}>
          If you see any adult or offensive objects, you will have the ability to 
          <Text style={styles.blueTitle}> Report </Text> 
          this object to the WandAR team for review. If the object is indeed in violation, the object will be removed from the servers. If your post is reported, it will be blocked from view during the review process and you will be given a warning. Three offenses will result in your account being removed from the WandAR platform.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Object Locations:</Text>
        <Text style={styles.label}>
          The real world location an object can be posted in is a first come first serve bases. You will have to wait until an object is unposted to use that same location. Objects cannot be posted within 3 meters of another object.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Public Vs Private Posts:</Text>
        <Text style={styles.label}>
          Posting an object publicly will allow all users to view the object. However, if you don’t want everyone to see your post, you can choose to post your object privately for just the friends you wish to view it. To toggle between viewing public objects and objects that are meant just for you, click the Pub/Priv button on the Homescreen.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Coins:</Text>
        <Text style={styles.label}>
          Use in-app coins to make all your in-app purchases from sell slots to post duration, and even to pay for a subscription. Go to your Account Page now to purchase coins.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Sell Slots:</Text>
        <Text style={styles.label}>
          Sell Slots represent the amount of objects you can sell on the in-app WandAR Store. Three slots are granted at signup and more can be purchased at any time for 500 coins. Also, you will receive an additional six sell slots if you subscribe to WandAR Pro.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>Post Duration:</Text>
        <Text style={styles.label}>
          Objects that are posted are automatically unposted after a set time. The free version of WandAR grants you a maximum of 23 hours, 6 days, and 2 weeks post time with the option to purchase more time when posting an object. WandAR Pro grants users a maximum of 23 hours, 6 days, and 4 weeks post time with the option to purchase more time after posting an object, thereby securing your objects location in the real world.
        </Text>
      </View>

      <View style={styles.sectionMargin}>
        <Text style={styles.blueTitle}>WandAR Pro:</Text>
        <Text style={styles.label}>
          Subscribe to WandAR Pro for $4.99 or 5,000 coins per month and receive the following:{"\n\n"}
          • An ad free experience{"\n"}
          • Access to all the preset objects{"\n"}
          • Access to more tool options for creating objects (ie more colours, text fonts, shapes){"\n"}
          • Six additional sell slots to sell your best objects on the WandAR Store{"\n"}
          • Post your objects for longer periods of time. Up to five weeks for free{"\n"}
          • The ability to purchase more post time, after posting and from anywhere, thereby securing your objects location without having to be on location to repost.
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 16
  },
  label: {
    fontFamily: FontFamilies.PantonBold,
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 22,
  },
  sectionMargin: {
    marginTop: 25,
  },
  warningText: {
    color: Colors.warning,
  },
  blueTitle: {
    fontFamily: FontFamilies.PantonBold,
    fontSize: 16,
    color: Colors.accent,
    marginBottom: 4,
  },
});

export default WandARInfoScreen;