import React from "react";
import { Pressable, Linking } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

interface SkillButtonProps {
  pulsar:() => void;
    icon: string; 
  library?: "Ionicons" | "AntDesign"; // librería del icono
  variant?: "primary" | "secondary" | "small";
  enlace?: string;
}



const SkillButton = ({ icon, library = "Ionicons" , pulsar, enlace,variant}: SkillButtonProps) => {

    const handlePress = () => {
        if (enlace) {
          Linking.openURL(enlace);   // abrir el enlace si existe
        } else {
          pulsar();                  // ejecutar la función pulsar
        }
      }; 

  const iconSize = variant === "small" ? 20 : 28;

  return (
   
    <Pressable 
    onPress={handlePress} 
    className="p-4 rounded-xl m-2 items-center justify-center bg-blue-500"
  >
    {library === "Ionicons" && <Ionicons name={icon as any} size={iconSize} color="white" />}
    {library === "AntDesign" && <AntDesign name={icon as any} size={iconSize} color="white" />}
  </Pressable>
    
  );
};

export default SkillButton;