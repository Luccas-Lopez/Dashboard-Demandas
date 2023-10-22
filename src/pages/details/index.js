import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Perfil from "../../assets/img-pefil.png";
import Seta from "../../assets/seta.png";
import { LinearGradient } from "expo-linear-gradient";
import { Select } from "../../Components/Select";
import { TimeSelect } from "../../Components/TimeSelect";
import Lampada from "../../assets/lampada.png";
import Megafone from "../../assets/megafone.png";
import Pessoa from "../../assets/pessoa.png";

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

import IconIon from "react-native-vector-icons/Ionicons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";

export function Details() {

  const [appReady, setAppReady] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [iconColor, setIconColor] = useState("#FF0000");

  const [horario, setHorario] = useState("");

  const handleHorarioChange = (text) => {
    const cleanedText = text.replace(/\D/g, "");

    if (!cleanedText || cleanedText.length > 4) {
      setHorario(cleanedText);
      return;
    }

    let formattedHorario = "";

    if (cleanedText.length > 2) {
      formattedHorario = `${cleanedText.slice(0, 2)}:${cleanedText.slice(2)}`;
    } else {
      formattedHorario = cleanedText;
    }

    setHorario(formattedHorario);
  };

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

  const handleInputChange = (text) => {
    setInputValue(text);
    if (text.length > 0) {
      setIconColor("#00FF00");
    } else {
      setIconColor("#FF0000");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 24,
      paddingTop: 60,
    },
    search: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F8F8F6",
      height: 60,
      width: "100%",
      borderRadius: 16,
      paddingLeft: 16,
    },
    input: {
      fontSize: 18,
      fontFamily: "Poppins_500Medium",
      color: "#000",
      width: 200,
      height: "100%",
      paddingLeft: 12,
    },
    header_text: {
      marginTop: 24,
      marginBottom: 16,
    },
    title1: {
      fontSize: 28,
      fontFamily: "Poppins_600SemiBold",
    },

    projects_title: {
      fontFamily: "Poppins_500Medium",
      fontSize: 20,
      marginTop: 20,
      marginBottom: 8,
    },

    inputIcon: {
      color: iconColor,
    },
    inputs: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      gap: 5,
    },
    timeinput: {
      fontSize: 18,
      fontFamily: "Poppins_500Medium",
      paddingTop: 8,
      paddingLeft: 8,
    },
    card_necess: {
      width: 112,
      height: 100,
      backgroundColor: "#F8F8F6",
      fontFamily: "Poppins_500Medium",
      color: "#000",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: 8,
      borderRadius: 16,
    },
    buttons_container: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    necessity_name: {
      fontSize: 12,
    },
    notifications: {
      paddingLeft: 16,
      fontFamily: "Poppins_500Medium",
      color: "#000",
      width: 230,
    },
  });

  return (
    <ScrollView style={styles.container} onLayout={onLayout}>
      <View style={styles.header_text}>
        <Text style={styles.title1}>Nova Demanda</Text>
      </View>
      <Text style={styles.projects_title}>Tipo do Projeto</Text>
      <View style={styles.search}>
        <IconIon name="briefcase-sharp" size={24} color="#9B9B9B" />

        <TextInput
          style={styles.input}
          placeholder="Nome do Projeto"
          placeholderTextColor="#000"
          value={inputValue}
          onChangeText={handleInputChange}
        />

        <IconMaterial name="line-scan" size={24} style={styles.inputIcon} />
      </View>

      <Text style={styles.projects_title}>Urgência & Tempo esperado</Text>
      <View style={styles.inputs}>
        <View style={styles.projects_box}>
          <View style={styles.search}>
            <IconAwesome name="exclamation" size={24} color="#9B9B9B" />

            <Select />
          </View>
        </View>
        <View style={styles.projects_box}>
          <View style={styles.search}>
            <IconIon name="calendar" size={24} color="#9B9B9B" />
            <TextInput
              style={styles.timeinput}
              placeholder="0"
              keyboardType="numeric"
              placeholderTextColor="#000"
            />
            <TimeSelect />
          </View>
        </View>
      </View>
      <Text style={styles.projects_title}>Necessidades </Text>
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.card_necess}>
          <Image
            source={Lampada}
            style={{ width: 56, height: 50, objectFit: "contain" }}
          />
          <Text style={styles.necessity_name}>Identidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card_necess}>
          <Image
            source={Megafone}
            style={{ width: 56, height: 50, objectFit: "contain" }}
          />
          <Text style={styles.necessity_name}>Anúncios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card_necess}>
          <Image
            source={Pessoa}
            style={{ width: 66, height: 50, objectFit: "contain" }}
          />
          <Text style={styles.necessity_name}>Desenvolvimento</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.projects_title}>Notificações </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        <View style={styles.projects_box}>
          <View style={styles.search}>
            <TouchableOpacity>
              <IconAwesome5 name="bell" size={24} color="#9B9B9B" />
            </TouchableOpacity>

            <TextInput
              placeholder="HH:MM"
              placeholderTextColor="#000"
              value={horario}
              onChangeText={handleHorarioChange}
              keyboardType="numeric"
              maxLength={5}
              style={styles.notifications}
            />
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: "#1BD15D2B", height: 60, width: 60, alignItems: "center", justifyContent: "center", borderRadius: 20}}>
            <IconFeather name="plus" size={24} color="#1BD15D" />
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
