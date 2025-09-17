import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css"

const ProfileDetails = () => {
  return (
    <View>
     
      <Image 
      className='max-h-20 max-w-20 rounded-full'
      source={require('../assets/images/icon.png')}
      />
       <Text className='text 2xl font-bold'>Erick Ojeda</Text> 
       <Text className='text-xL font-bold text-gray-400'> Estudiante </Text>
    </View>
  )
}

export default ProfileDetails
