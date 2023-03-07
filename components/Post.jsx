import styled from 'styled-components/native';

const PostView = styled.View`
  dispaly: flex;
  algin-items: center;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 1);
  border-bottom-style: solid;
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
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}></PostImage>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
