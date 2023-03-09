import styled from 'styled-components/native';

const PostView = styled.View`
  dispaly: flex;
  algin-items: center;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 1);
  border-bottom-style: solid;
  width: 100%;

`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PostDate = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

const truncateTitle = (str) => {
  if (str.length > 50) {
    return str.substring(0, 50) + '...';
  }
  return str
}

export const Post = ({ title, imageUrl, createdAt }) => {
  const date = Date(createdAt).toString().slice(4, 21)
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}></PostImage>
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{date}</PostDate>
      </PostDetails>
    </PostView>
  );
};
