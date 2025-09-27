import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css"
import IconButton from "./IconButton";


const ProfileDetails = () => {
  return (
    <View className="items-center">
     
      <Image 
      className='max-h-20 max-w-20 rounded-full'
      source={require('../assets/images/imagenOkarun.png')}
      />
      
       <Text className='text 2xl font-bold'>Erick Ojeda</Text> 
       <Text className='text-xL font-bold text-blue-800 font-comic'> Estudiante </Text>
       <View className="flex-row justify-center space-x-4 mt-4">

       <IconButton 
          icon="square-instagram" 
          pulsar={() => console.log('Instagram')} 
          enlace="https://www.instagram.com/ale_x_chz?igsh=MXV3NTAydWZkdWxteg%3D%3D" 
        />
            
        <IconButton 
        icon="square-github" 
        pulsar={() => console.log('GitHub')} 
        enlace="https://github.com/xwlspider" 
        color={'green'} 
        />
        
        <IconButton 
        icon="square-facebook" 
        pulsar={() => console.log('Facebook')} 
        color={'#1877F2'} 
        />

        <IconButton 
        icon="square-twitter" 
        pulsar={() => console.log('Twitter')} 
        color={'#1DA1F2'} 
        />

       </View>
    </View>
  )
}

export default ProfileDetails
