import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  RefreshControl,
  TouchableOpacity,

} from 'react-native';
import { Post } from '../components/Post'
import Loading from '../components/Loading'
import React from 'react';
import axios from 'axios';


export const Home = ({ navigation }) => {

  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const fetchItems = async () => {
    try {
      const { data } = await axios.get('https://6409a641d16b1f3ed6d8bc5f.mockapi.io/posts/')
      setItems(data)
      setLoading(true)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchItems()
  }, [])



  if (loading) {
    return (
      <Loading />
      
    )
  }

  return (
    // <View style={styles.container}>
    <View>
        <FlatList 
          refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchItems}/>}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
            <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title })}
            >
              <Post
                title={item.title}
                imageUrl={item.imageUrl}
                createdAt={item.createdAt} 
            />
            </TouchableOpacity>
          }
        />
    </View>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'green',
//     width: 100,
//     height: 100,
//   },

// "https://gamemag.ru/images/cache/News/News167810/80fd56ef24-1_350x250.jpg"