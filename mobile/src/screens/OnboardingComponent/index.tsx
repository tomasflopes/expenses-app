import React from 'react';

import { Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingComponent: React.FC = props => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#cbf2f5',
          image: (
            <Image
              source={require('../../assets/logo.png')}
              resizeMode="contain"
              style={{ width: 200, height: 200 }}
            />
          ),
          title: 'Management',
          subtitle:
            "Approach to manage a company's interaction with current and potential customers"
        },
        {
          backgroundColor: '#cbf2f5',
          image: (
            <Image
              source={require('../../assets/logo.png')}
              resizeMode="contain"
              style={{ width: 200, height: 200 }}
            />
          ),
          title: 'Data analysis',
          subtitle:
            "It uses data analysis about customers' history with a company to improve business relationships with customers"
        }
      ]}
    />
  );
};

export default OnboardingComponent;
