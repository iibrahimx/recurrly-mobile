import images from "@/constants/images";
import { styled } from "nativewind";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  const handlePressPlaceholder = (label: string) => {
    Alert.alert("Coming Soon", `${label} feature is not implemented yet.`);
  };

  const handleLogout = () => {
    try {
      // Placeholder logout logic (no auth system yet)
      Alert.alert("Logged Out", "You have been logged out successfully.");
      // In real app: clear tokens / auth.signOut() / navigation reset
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-5 pt-5">
      {/* Header */}
      <View className="items-center mb-4">
        <Text className="text-3xl font-bold text-dark">Settings</Text>
      </View>

      {/* Section: Profile */}
      <View className="items-center rounded-2xl p-4 mb-5">
        <View className="items-center mb-4">
          <Image source={images.avatar} className="size-50 rounded-full" />
        </View>
        <View className="items-center bg-[#f5c542] p-5 rounded-xl shadow-2xl">
          <Text className="text-xl font-semibold text-dark mb-2">
            Ibrahim | theVoid
          </Text>
          <Text className="text-xl text-gray-500">ab.ib@example.com</Text>
        </View>
      </View>

      {/* Section: Preferences */}
      <View className="items-center rounded-2xl p-4 mb-2">
        <Text className="text-2xl font-semibold text-gray-500 mb-3">
          Preferences
        </Text>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("Notifications")}
        >
          <Text className="text-dark">Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("Appearance")}
        >
          <Text className="text-dark">Appearance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("Currency")}
        >
          <Text className="text-dark">Currency</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Support */}
      <View className="items-center rounded-2xl p-4 mb-2">
        <Text className="text-2xl font-semibold text-gray-500 mb-3">
          Support
        </Text>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("Help Center")}
        >
          <Text className="text-dark">Help Center</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("Contact Us")}
        >
          <Text className="text-dark">Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3"
          onPress={() => handlePressPlaceholder("About App")}
        >
          <Text className="text-dark">About App</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity
        className="bg-red-500 rounded-xl py-4 items-center"
        onPress={handleLogout}
      >
        <Text className="text-white font-semibold">Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
