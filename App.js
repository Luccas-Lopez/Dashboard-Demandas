import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.btn_input}>
          <Icon name="search1" size={30} color="#9B9B9B" />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Buscar projeto" placeholderTextColor="#9B9B9B"/>
      </View>
      <View style={styles.header_text}>
          <Text style={styles.title1}>Olá</Text>
          <Text style={styles.title2}>Katrin</Text>
      </View>
      <View style={styles.userbox}>
        <View>
          <Text style={styles.userbox_title}>
          Seus projetos
          </Text>
          <Text style={styles.userbox_description}>
          2 de 4 Completos
          </Text>
        </View>
        <Image
        
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 24,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F6",
    maxHeight: 56,
    width: '100%',
    borderRadius: 16,
    gap: 16,
    paddingLeft: 16,
  },
  input: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#9B9B9B',
    width: 150,
  },
  header_text: {
    marginTop: 24,
  },
  title1: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold'
  },
  title2: {
    fontSize: 28,
    lineHeight: 28,
    color: "#0A0909"
  },
  userbox: {
    backgroundColor: "#87E4A7C7",
    width: "100%",
    height: 180,
  }

});
