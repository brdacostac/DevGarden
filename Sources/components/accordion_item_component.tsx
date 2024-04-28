import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

type AccordionItemProps = {
    id: string;
    title: string;
    children?: React.ReactNode;
};
  
const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, children }) => {
    const [ expanded, setExpanded ] = useState(false);
    const { colors } = useTheme();

    function toggleItem(){
        setExpanded(!expanded);
    }

    return (
        <View style={styles.accordContainer}>
            <TouchableOpacity style={styles.accordHeader} onPress={ toggleItem }>
                <Text style={[styles.accordTitle, { color: colors.text }]}>{ id }</Text>
                <Text style={styles.accordTitle}>{ title }</Text>
                {expanded ? (
                    <Image
                        source={require('../assets/icons/chevron_up.png')}
                        style={styles.accordImage}
                    />
                ) : (
                    <Image
                        source={require('../assets/icons/chevron_down.png')}
                        style={[styles.accordImage, { tintColor: colors.text }]}
                    />
                )}
            </TouchableOpacity>
            {expanded && (
                <View style={styles.accordBody}>
                    {children}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    accordContainer: {
      paddingBottom: 4,
      flex: 1,
      height: '100%',
      width: '100%',
    },
    accordHeader: {
      padding: 12,
      backgroundColor: 'white',
      color: 'black',
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    accordTitle: {
      fontSize: 30,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    accordBody: {
      padding: 12,
    },
    accordImage: {
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    },
});
  
export default AccordionItem;