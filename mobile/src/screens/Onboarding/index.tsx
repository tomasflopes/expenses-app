import React, { useState, useRef } from 'react';

import {
  Animated,
  FlatList,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import { Extrapolate } from 'react-native-reanimated';

import OnboardingItem from '../../components/OnboardingItem';

import onboardingData from '../../utils/onboardingData';

import styles from './styles';

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <View style={styles.paginator}>
        {onboardingData.map((item, index) => {
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
    </View>
  );
};

export default Onboarding;
