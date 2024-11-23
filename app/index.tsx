import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Index() {
  const [searchText, setSearchText] = useState("");
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={
        {
          alignContent:"flex-start",
          alignItems:'flex-start'
        }
      }>
      <h1 >Order book</h1>
      <TextInput value={searchText} onChangeText={setSearchText} >

      </TextInput>
      </View>

    <ScrollView>
      <p>hello world</p>
    </ScrollView>
    </View>

  );
}
