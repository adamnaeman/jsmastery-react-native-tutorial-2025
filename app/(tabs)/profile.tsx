import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";

const Profile = () => {


        const topics = [
            'Mobile Development',
            'Photography',
            'Web Development',
        ]
        const handleTopicPress = (topic: string) => {
            console.log(`Selected topic: ${topic}`);


    }
    return (
        <View className={"bg-primary flex-1 px-10"}>
            <View className={"flex mt-24 items-center flex-1 flex-col gap-5"}>
                <Image source={images.profile} className={"w-[100px] h-[100px] self-center rounded-full border-4 border-white"} />
                <Text className={"text-white text-xl font-bold"}>Username</Text>
                <View className={"flex-col items center justify-center gap-x-1"}>
                    <Text className={"text-white self-center text-sm font-bold mb-5"}>History</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 10}}>
                    {topics.map((topic, index) => (
                        <TouchableOpacity key={index} onPress={() => handleTopicPress(topic)}>
                            <Text className={"text-white text-sm font-bold bg-accent p-8 px-10 m-1 rounded-[10px]"}>{topic}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
export default Profile
