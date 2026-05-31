import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/typeNavigation';
import { detailStyles } from '../../styles/appStyle';
import { usePostDetail } from '../../hooks/usePosts';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';

type DetailScreenNavigationProp = StackScreenProps<AppStackParamList, 'Detail'>;


export const DetailScreen = ({ navigation, route }: DetailScreenNavigationProp) => {
  const { postId } = route.params;
  const {post, loading, error } = usePostDetail(postId);

  if(loading) return <LoadingSpinner message='Cargando detalle...'/>;
    if(error) return (
      <View style={detailStyles.errorContainer}>
        <Text style={detailStyles.errorText}>{error || 'Dato no encontrado'}</Text>
      </View>
    )

  return (
    <ScrollView style={detailStyles.container} contentContainerStyle={detailStyles.content}>
      <View style={detailStyles.meta}>
        <View style={detailStyles.badge}>
          <Text style={detailStyles.badgeText}>Post #{post?.id}</Text>
        </View>
        <Text style={detailStyles.userId}>Autor: Usuario {post?.id} </Text>
      </View>

      <Text style={detailStyles.title}>{post?.tittle}</Text>

      <View style={detailStyles.divider} />

      <Text style={detailStyles.bodyLabel}>Contenido</Text>
      <Text style={detailStyles.body}>{post?.body}</Text>
    </ScrollView>
  );
};



