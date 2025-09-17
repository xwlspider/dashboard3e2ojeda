
import { Text, View } from "react-native";

import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
  
    <View className="flex-1 justify-center items-center bg-yellow-100 w-screen h-screen" >
      <Text className="italic">Edit app/index.tsx to edit this screen.</Text>
    </View>
    </View>
  );
}
