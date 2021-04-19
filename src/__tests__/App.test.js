import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {render, fireEvent, screen} from '@testing-library/react-native';
import App from '../../App';

jest.mock('../FlipWrapper', () => () => <div>Mock Component</div>);

describe('App Test Suits', () => {
  test('Test app', async () => {
    const {debug, getByText} = render(<App />);
    //debug();
  });
});
