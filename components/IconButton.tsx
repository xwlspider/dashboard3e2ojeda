import { Pressable, Linking } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


interface IconButtonProps { 
  pulsar: () => void;     // Método
  icon: string;           // Cadena
  enlace?: string;        // Cadena opcional
  color?: string; 
}

const IconButton = ({ icon, pulsar, enlace, color }: IconButtonProps) => {
  const finalColor = icon === "square-instagram" ? "#E1306C" : color || "black";
  
  const handlePress = () => {
    if (enlace) {
      Linking.openURL(enlace);   // abrir el enlace si existe
    } else {
      pulsar();                  // ejecutar la función pulsar
    }
  };

  return (
    <Pressable onPress={handlePress} className="p-2 rounded-lg" style={{ backgroundColor: finalColor }}>
      <FontAwesome6 name={icon as any} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;