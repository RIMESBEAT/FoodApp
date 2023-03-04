import React from 'react'
import { ImageBackground, View } from 'react-native'
import UserImage from "../../../assets/userIcon.png"

const CreateAccount = () => {
  return (
      <View>
          <ImageBackground>
               <View>
              <Image source ={UserImage} />
          </View>
          </ImageBackground>
         
    </View>
  )
}

export default CreateAccount