import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet} from 'react-native';


export function TimeSelect() {
    const [selectedValue, setSelectedValue] = useState('Dias');
  
    return (
      <View style={styles.box}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }
          style={styles.select}
        >
          <Picker.Item label="Dias" value="Dias" />
          <Picker.Item label="Semanas" value="Semanas" />
          <Picker.Item label="Meses" value="Meses" />
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
        width: 100,
    },
    select: {
      backgroundColor: "#F8F8F6",
      width: 112,
      height: "100%",
      borderWidth: 0,
      fontSize: 10
    },
  });