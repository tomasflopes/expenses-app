import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';

import styles from './styles';

interface Props {
  item: {
    id: string;
    title: string;
    description: string;
    image: NodeRequire;
  };
}
const OnboardingItem: React.FC<Props> = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width: width - 80, resizeMode: 'contain' }]}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
