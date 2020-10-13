import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

const Label = ({title}) => {
  return <Text style={styles.text}>{title}</Text>;
};

Label.propTypes = {
  /**
   * label title
   */
  title: PropTypes.string.isRequired,
};

export {Label};
