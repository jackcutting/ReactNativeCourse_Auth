import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({
  label,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  onChangeText,
  placeholder,
  secureTextEntry,
  selectTextOnFocus,
  value
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize || 'none'}
        autoCorrect={autoCorrect || false}
        keyboardType={keyboardType || 'default'}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        selectTextOnFocus={selectTextOnFocus || false}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
