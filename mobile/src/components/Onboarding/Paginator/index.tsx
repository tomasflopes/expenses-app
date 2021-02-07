import React from 'react';
import { useWindowDimensions, View } from 'react-native';

import Animated, { Extrapolate } from 'react-native-reanimated';

import styles from './styles';

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
    image: NodeRequire;
  }[];

  scrollX: Animated.Value<0>;
}
const Paginator: React.FC<Props> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: Extrapolate.CLAMP
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth }]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
