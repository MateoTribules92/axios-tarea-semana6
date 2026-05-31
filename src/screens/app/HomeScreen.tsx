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
import { useAuth } from '../../hooks/useAuth';
import { usePosts } from '../../hooks/usePosts';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';


type HomeScreenNavigationProp = StackScreenProps<AppStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
  const { user } = useAuth();
  const {posts, loading, error} = usePosts();

  //funcion para cerrar sesion
  const handleLogout = ()=>{
    Alert.alert("Cerrar sesión", "Estás seguro?", [
      {text: "Cancelar", style: "cancel"},
      {text: "Salir", style: "destructive", onPress: ()=> logout()},
    ]);
  };

  if(loading) return <LoadingSpinner message='Cargando posts...'/>;
  if(error) return (
    <View style={homeStyles.errorContainer}>
      <Text style={homeStyles.errorText}>{error}</Text>
    </View>
  )

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <View>
          <Text style={homeStyles.greeting}>¡Hola!</Text>
          <Text style={homeStyles.email} numberOfLines={1}>{user?.email}</Text>
        </View>
        <TouchableOpacity style={homeStyles.logoutBtn} onPress={handleLogout}>
          <Text style={homeStyles.logoutText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <Text style={homeStyles.sectionTitle}>Posts </Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
          post={item}
            onPress={() => navigation.navigate('Detail', { postId: item.id, title: item.tittle})}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyles.list}
      />
    </View>
  );
};



