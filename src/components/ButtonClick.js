import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../assets/Variable';

const ButtonClick = props => {
  const containerStyle = [styles.button, props.containerStyle]; // Fusionner les styles du conteneur

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={containerStyle}
      onPress={props.function}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 30,
    width: width * 0.736,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: Variable.colors.primary.default
  },
  buttonText: {
    color: Variable.colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.7
    // Ajoutez ici le style spécifique pour le texte si nécessaire
  },
});

export default ButtonClick;
