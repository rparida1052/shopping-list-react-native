import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "../../theme";

export default function CounterLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{title:"Counter Screen",headerRight:()=>{
                return (
                  <Link href={"/counter/history"} asChild>
                    <Pressable hitSlop={20}>
                      <MaterialIcons
                        name="history"
                        size={32}
                        color={theme.colorGrey}
                      />    
                    </Pressable>
                  </Link>
                );
            }}}/>
            <Stack.Screen name="history"/>
        </Stack>
    )
}