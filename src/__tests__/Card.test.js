import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {render, fireEvent, screen} from '@testing-library/react-native';
import Card from '../flip-card/Card';

describe('App Test Suits', () => {
  test('Test app', async () => {
    const props = {
      card: {value: 79},
      onFlipItem: jest.fn(),
      openCard: jest.fn(),
    };

    const {debug, queryAllByA11yValue, findByTestId, findByText} = render(
      <Card {...props} />,
    );
    expect(queryAllByA11yValue(props.card.value)).toBeDefined();
    //expect(findByTestId('onpress')).toBeDefined();
    //fireEvent(findByTestId('onpress'), 'press');

    //const button = findByText('79');
    //fireEvent(button, 'press');
    //expect(button).toBeTruthy();
    //debug();
  });
});
