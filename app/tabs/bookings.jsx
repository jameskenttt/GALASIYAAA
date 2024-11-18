import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router'; 

const Bookings = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">Your Bookings</Text>

        <View className="grid grid-cols-2 gap-4 mb-4">
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
            <Text className="text-center font-semibold">Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
            <Text className="text-center font-semibold">Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
            <Text className="text-center font-semibold">Car Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
            <Text className="text-center font-semibold">Trains</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold mb-2">Suggested Places to Visit</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          {['place1.jpg', 'place2.jpg', 'place3.jpg'].map((place, index) => (
            <View key={index} className="mr-2">
              <Image
                source={require(`../assets/${place}`)} 
                className="w-40 h-28 rounded-lg"
              />
              <Text className="text-center mt-1">Place {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

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

export default Bookings;