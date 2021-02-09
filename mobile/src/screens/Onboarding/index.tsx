import React, { useState, useRef, useContext } from 'react';

import {
  Animated,
  FlatList,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Extrapolate } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

import OnboardingItem from '../../components/OnboardingItem';

import onboardingData from '../../utils/onboardingData';

import theme from '../../styles';
import styles from './styles';

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();

  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  async function nextStep() {
    if (currentIndex == onboardingData.length - 1) {
      await AsyncStorage.setItem('firstTime', 'no');
      navigation.navigate('Root');
    } else {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  }

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

      <View style={styles.nextIconContainer}>
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={currentIndex * 50}
          tintColor={theme.colors.primary}
          backgroundColor={theme.colors.secondary}
          style={styles.animatedCircle}
          rotation={0}
        />

        <TouchableWithoutFeedback onPress={nextStep}>
          {currentIndex == 2 ? (
            <Feather name="check" style={styles.icon} />
          ) : (
            <Feather name="arrow-right" style={styles.icon} />
          )}
        </TouchableWithoutFeedback>
      </View>

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

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [
              theme.colors.secondaryDark,
              theme.colors.primary,
              theme.colors.secondaryDark
            ],
            extrapolate: Extrapolate.CLAMP
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[styles.dot, { width: dotWidth, backgroundColor }]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Onboarding;
