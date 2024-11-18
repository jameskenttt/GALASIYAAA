import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router'; 

const notificationsData = [
  { id: 1, message: "Your flight to Paris has been confirmed.", date: "2024-11-15" },
  { id: 2, message: "You have a new message from customer support.", date: "2024-11-14" },
  { id: 3, message: "Your hotel reservation in New York is confirmed.", date: "2024-11-13" },
  { id: 4, message: "Don't miss your car rental pickup tomorrow!", date: "2024-11-12" },
  { id: 5, message: "Check out the latest travel deals!", date: "2024-11-11" },
];

const Notification = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">Notifications</Text>

        {notificationsData.map(notification => (
          <View key={notification.id} className="bg-white p-4 rounded-lg shadow mb-2">
            <Text className="font-semibold">{notification.message}</Text>
            <Text className="text-gray-500 text-sm">{notification.date}</Text>
          </View>
        ))}
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

export default Notification;