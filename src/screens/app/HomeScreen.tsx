import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AppStackParamList } from '../../navigation/typeNavigation';
import { homeStyles } from '../../styles/appStyle';
import { Card } from '../../components/ui/Card';
import { logout } from '../../services/authService';


type HomeScreenNavigationProp = StackScreenProps<AppStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {

  //funcion para cerrar sesion
  const handleLogout = ()=>{
    Alert.alert("Cerrar sesión", "Estás seguro?", [
      {text: "Cancelar", style: "cancel"},
      {text: "Salir", style: "destructive", onPress: ()=> logout()},
    ]);
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <View>
          <Text style={homeStyles.greeting}>¡Hola!</Text>
          <Text style={homeStyles.email} numberOfLines={1}></Text>
        </View>
        <TouchableOpacity style={homeStyles.logoutBtn} onPress={handleLogout}>
          <Text style={homeStyles.logoutText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <Text style={homeStyles.sectionTitle}>Posts </Text>

      <FlatList
        data={[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate('Detail', { postId: 1, title: ""})}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyles.list}
      />
    </View>
  );
};



