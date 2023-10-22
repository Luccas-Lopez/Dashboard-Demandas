import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet} from 'react-native';


export function Select() {
    const [selectedValue, setSelectedValue] = useState('Urgência');
  
    return (
      <View style={styles.box}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }
          style={styles.select}
        >
          <Picker.Item label="Urgência" value="Urgência" />
          <Picker.Item label="Finalizado" value="Finalizado" />
          <Picker.Item label="Adiado" value="Adiado" />
        </Picker>
      </View>
    );
  }

  const styles = StyleSheet.create({
    box:{
        borderColor: "#F8F8F6",
        borderWidth: 2,
        borderRadius: 20,
        height: 60,
        overflow: "hidden",
        width: 135,
    },
    select: {
      backgroundColor: "#F8F8F6",
      width: 145,
      height: "100%",
      borderWidth: 0,
      fontSize: 10
    },
  });