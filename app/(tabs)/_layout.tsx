import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {ImageBackground, Image} from "react-native";

const TabIcon = ({focused, icon, title}: any) => {
    if(focused) {
        return (

            <View style={{marginTop:12}}>
                <ImageBackground
                    source={images.highlight}
                    style={{paddingHorizontal: 1, flexDirection: 'row', minWidth: 100, minHeight: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 9999 , overflow: 'hidden'}}
                >
                    <Image source={icon} tintColor={"#151312"} style={{marginRight: 5}} />
                    <Text className={"text-secondary text-base font-bold "}>{title}</Text>
                </ImageBackground>
            </View>

        )
    } else {
        return (
            <View style={{marginTop:20}}>
                <Image source={icon} tintColor={"#a8b5db"} className={"size-4"}/>
                <Text className={"text-secondary text-base font-semibold ml-2"}>{title}</Text>
            </View>
        )
    }
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: '#0f0d23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '##0f0d23'

                }
            }}
            >
            <Tabs.Screen

                name={"index"}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen

                name={"search"}
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={"saved"}
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Saved"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={"profile"}
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />
                    )
                }}
            />
        </Tabs>
    )
}
export default _Layout
