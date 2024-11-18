import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router'; 

const Profile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: require('../assets/profile.jpg'), 
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row items-center justify-center p-4 bg-white shadow-md">
        <Image
          source={user.profilePicture} 
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
        <View className="ml-4">
          <Text className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</Text>
          <Text className="text-gray-600">{user.email}</Text>
        </View>
      </View>

      <View className="p-4">
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-center font-semibold">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-center font-semibold">Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-center font-semibold">My Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-center font-semibold">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 p-4 rounded-lg shadow mb-2">
          <Text className="text-center text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-around bg-white p-4 shadow-md">
        <Link href="./home">
          <Text className="text-center text-blue-500">Home</Text>
        </Link>
        <Link href="./bookings">
          <Text className="text-center text-blue-500">Bookings</Text>
        </Link>
        <Link href="./notifications">
          <Text className="text-center text-blue-500">Notifications</Text>
        </Link>
        <Link href="./profile">
          <Text className="text-center text-blue-500">Profile</Text>
        </Link>
      </View>
    </View>
  );
};

export default Profile;