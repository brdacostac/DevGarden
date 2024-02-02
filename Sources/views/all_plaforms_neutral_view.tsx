import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ButtonMultiSelectPlatformComponent from '../components/button_multiselect_platform_component';
import BackNavigationButton from '../components/button_back_navigation_component';

interface AllPlatformsNeutralViewProps {
  navigation: StackNavigationProp<any>;
}

const AllPlatformsNeutralView: React.FC<AllPlatformsNeutralViewProps> = ({ navigation }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
      <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.backButton}>
            <BackNavigationButton onPress={() => navigation.navigate("Login")}/> 
          </View>
          <View style={styles.mainView}>
              <View>
                  <View>
                      <Text style={styles.titleText}>{selectedPlatform}</Text>
                  </View>
              </View>
              <TouchableOpacity style={styles.mainContent} onPress={() => navigation.navigate("AllProjects")}>
                <View >

                </View>                
              </TouchableOpacity>
  
              <View style={styles.slidingButton}>
                <ButtonMultiSelectPlatformComponent onSelect={(platform) => setSelectedPlatform(platform)}></ButtonMultiSelectPlatformComponent>
              </View>  
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#F1F0F0',
  },
  backButton:{
    margin: 20,
  },
  mainView: {
    flex: 1,
    margin: '10%'
  },
  titleText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
  },
  mainContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    height: '50%',
    marginBottom: '10%',
  },
  slidingButton:{
      backgroundColor: '#E7E7E7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      height: '20%',
  }
})

export default AllPlatformsNeutralView;