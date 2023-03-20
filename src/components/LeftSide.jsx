import React from 'react'

const LeftSide = () => {
  return (
    <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground/>
                    <a>
                        <Photo/>
                        <Link>
                        welcome ,{props.user ? props.user.displayName :"there error"}
                        </Link>
                     <AddPhotoText>Add Photo</AddPhotoText>
                    </a>
               
            </UserInfo>
            <Widget>
                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow your Network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />

                </a>
            </Widget>
            <Item>
            <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
            </Item>
        </ArtCard>
        <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follows Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  )
}
const Container=styled.div`
grid-area:leftside;
`
const ArtCard=styled.div`
text-align:center;
position:relative;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;
const UserInfo=styled.div`
`;

export default LeftSide