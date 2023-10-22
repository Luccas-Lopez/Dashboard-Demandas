import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Perfil from "../../assets/img-pefil.png";
import Seta from "../../assets/seta.png";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
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
} from "@expo-google-fonts/poppins";

import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";

export function Home() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_100Thin: Poppins_100Thin,
          Poppins_100Thin_Italic: Poppins_100Thin_Italic,
          Poppins_200ExtraLight: Poppins_200ExtraLight,
          Poppins_200ExtraLight_Italic: Poppins_200ExtraLight_Italic,
          Poppins_300Light: Poppins_300Light,
          Poppins_300Light_Italic: Poppins_300Light_Italic,
          Poppins_400Regular: Poppins_400Regular,
          Poppins_400Regular_Italic: Poppins_400Regular_Italic,
          Poppins_500Medium: Poppins_500Medium,
          Poppins_500Medium_Italic: Poppins_500Medium_Italic,
          Poppins_600SemiBold: Poppins_600SemiBold,
          Poppins_600SemiBold_Italic: Poppins_600SemiBold_Italic,
          Poppins_700Bold: Poppins_700Bold,
          Poppins_700Bold_Italic: Poppins_700Bold_Italic,
          Poppins_800ExtraBold: Poppins_800ExtraBold,
          Poppins_800ExtraBold_Italic: Poppins_800ExtraBold_Italic,
          Poppins_900Black: Poppins_900Black,
          Poppins_900Black_Italic: Poppins_900Black_Italic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <ScrollView style={styles.container} onLayout={onLayout}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.btn_input}>
          <IconAnt name="search1" size={30} color="#9B9B9B" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Buscar projeto"
          placeholderTextColor="#9B9B9B"
        />
      </View>
      <View style={styles.header_text}>
        <Text style={styles.title1}>Olá</Text>
        <Text style={styles.title2}>Kathryn</Text>
      </View>
      <View style={styles.userbox}>
        <View>
          <Text style={styles.userbox_title}>Seus projetos</Text>
          <Text style={styles.userbox_description}>2 de 4 Completos</Text>
          <Text style={styles.seemore}>Ver Mais</Text>
        </View>
        <Image style={styles.img} source={Perfil} />
      </View>
      <View style={styles.projects_box}>
        <Text style={styles.projects_title}>Daily Review</Text>
        <ScrollView style={styles.projects_container}>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
          <View style={styles.projects_card}>
            <IconIon name="briefcase-sharp" size={30} color="#9B9B9B" />
            <View>
              <Text style={styles.project_name}>Projeto 1</Text>
              <Text style={styles.project_hour_status}>
                10:00 AM &bull; Finalizado{" "}
              </Text>
            </View>
            <Image source={Seta} style={{ marginLeft: 60 }} />
          </View>
        </ScrollView>
        <LinearGradient
          style={{
            height:80,
            width: "100%",
            marginTop: -65,
            borderRadius: 5,
          }}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.5, 0.9]}
          colors={["#ffffff", "#fff0"]}
        ></LinearGradient>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 60
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F6",
    height: 60,
    width: "100%",
    borderRadius: 16,
    gap: 16,
    paddingLeft: 16,
  },
  input: {
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    color: "#9B9B9B",
    width: 150,
  },
  header_text: {
    marginTop: 24,
    marginBottom: 16,
  },
  title1: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
  },
  title2: {
    fontSize: 28,
    lineHeight: 28,
    color: "#0A0909",
  },
  userbox: {
    backgroundColor: "#87E4A7C7",
    borderRadius: 32,
    width: "100%",
    height: 180,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  seemore: {
    color: "#EC7669",
    fontFamily: "Poppins_600SemiBold",
    borderBottomWidth: 2,
    borderBottomColor: "#EC7669",
    maxWidth: 65,
    marginTop: 24,
  },
  userbox_title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    maxWidth: 100,
  },
  userbox_description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    maxWidth: 150,
    opacity: 0.4,
  },
  projects_container: {
    maxHeight: 300,
  },
  projects_title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    marginTop: 20,
  },
  projects_card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 16,
    alignItems: "center",
    backgroundColor: "#F8F8F6",
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 32,
    marginBottom: 8,
  },
  project_name: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
  project_hour_status: {
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    color: "#9B9B9B",
  },
});
