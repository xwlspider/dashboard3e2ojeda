import React from "react";
import { Text, View } from "react-native";
import SkillButton from "./SkillButton"; 


const MoreDetails = () => {
  return (
    <View className="mt-6 bg-blue-950 rounded-2xl p-4 items-center w-80">
    
      <Text className="text-amber-300 text-lg font-semibold mb-3">Destreza</Text>

    <View className="flex-row flex-wrap justify-center">
      <SkillButton icon="java"
       library="AntDesign" 
       pulsar={() => {}} 
       enlace="https://www.java.com/es/download/help/whatis_java.html"/>  

      <SkillButton icon="logo-react" 
      library="Ionicons" 
      pulsar={() => {}} 
      enlace="https://reactnative.dev/"/>   

      <SkillButton icon="coffee" 
      library="AntDesign" 
      pulsar={() => {}}  />

      <SkillButton icon="logo-nodejs"
       library="Ionicons" 
       pulsar={() => {}}
       enlace="https://lenguajejs.com/javascript/"/>    
        
    </View>

 
      <Text className="text-amber-200 text-lg font-semibold mt-5">Semi Senior </Text>
      <Text className="text-amber-100 font-bold mt-1">Ayer funcionaba</Text>
    </View>
  );
};

export default MoreDetails;
