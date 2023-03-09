import React from 'react'
import styled from 'styled-components/native';
import axios from 'axios'
import {
  View
} from 'react-native'
import Loading from '../components/Loading'

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const FullPost = ({ route, navigation }) => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { id, title } = route.params

  const fetchItems = async () => {
    try {
      navigation.setOptions({
        title
      })
      const { data } = await axios.get('https://6409a641d16b1f3ed6d8bc5f.mockapi.io/posts/' + id + '/')
      setData(data)
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
    <View style={{
      padding: 20,
    }}>
      <PostImage source={{uri: data.imageUrl}}/>
      <PostText>{data.text}</PostText>
    </View>
  )
}
