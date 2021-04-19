import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {render, fireEvent, screen   } from '@testing-library/react-native';
import FlipWrapper from '../FlipWrapper';

const resetGame = jest.fn();
jest.mock('../flip-card/Card', () => {});

describe('FlipWrapper Test Suits', () => {
  test('Test component with no tiles', async () => {
    const props = {
      cards: [],
      reset: jest.fn(),
    };
    const {debug} = render(<FlipWrapper {...props} />);
    debug();
  });

  test('Test component with tiles', async () => {
    const props = {
      cards: [60, 60, 39, 39, 7, 7, 53, 53],
      reset: jest.fn(),
    };
    const {debug} = render(<FlipWrapper {...props} />);
   // debug();
  });

  test('Test component with fire event', async () => {
    const props = {
      cards: [2,2,5,5],
      reset: jest.fn(),
    };
    const {debug, getByText} = render(<FlipWrapper {...props} />);
    //debug();   
    fireEvent.press(getByText('Restart'));
  });


});
