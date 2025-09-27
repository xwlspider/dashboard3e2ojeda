
import ProfileDetails from "@/components/ProfileDetails";
import { Text, View } from "react-native";
import "../global.css";


export default function Index() {
  return (
    <View className="flex justify-center items-center bg-stone-800 w-screen h-screen">
    <View className="flex justify-center items-center bg-sky-200 w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
    </View>
  );
}
