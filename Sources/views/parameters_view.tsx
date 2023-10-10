import { SafeAreaView, StyleSheet, Text, TouchableOpacity,Switch, View, Image } from 'react-native';
import { I18nextProvider, useTranslation } from "react-i18next"; // A ajouter pour le multi langue
import '../service/i18n';
import ParametersButton from '../components/settings_buttons_component';
import IconComponent from '../components/icon_component';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


export default function App() {
    const {t} = useTranslation();     // A ajouter pour le multi langue

    // DropDownPicker

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: t('supportedLanguages.en'), value: t('supportedLanguages.en')},
    {label: t('supportedLanguages.fr'), value: t('supportedLanguages.fr')},
    {label: t('supportedLanguages.pt'), value: t('supportedLanguages.pt')}
  ]);

    // Switch

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <SafeAreaView style={styles.container}>
      <div style={styles.container_bis}>
        <div style={styles.part}>
          <IconComponent iconSource={require('./assets/internet.svg')} />
          <Text>{t('parameters.language')}</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            searchable={true}/>
        </div>
        <div style={styles.part}>
          <IconComponent iconSource={require('./assets/half-moon-shape.svg')}/>
          <Text>{t('parameters.night_mode')}</Text>
          <Switch trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}/>
        </div>
          <TouchableOpacity style={styles.part}>
            <View>
            <IconComponent iconSource={require('./assets/link.svg')}/>
            <Text>{t('parameters.link_account')}</Text>
          </View>
        </TouchableOpacity>
        <div>
          {/* ListView */}
        </div>
      </div>
      <ParametersButton title={t('parameters.log_out')} iconSource={require('./assets/logout.svg')}/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F1F0F0',
    },
    container_bis: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      display: 'flex',
      paddingLeft: 5,
      paddingRight: 6,
    },
    part:{
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      padding: 10,
      display: 'flex',
      flexDirection: 'row'
    }
  });