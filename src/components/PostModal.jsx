import React,{useState} from "react";
import styled from "styled-components";
import {connect} from 'react-redux'
const PostModal = (props) => {
    const [editior,seEditor]=useState("");
    const [assetArea,setAssetArea]=useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const handleChange=()=>{

    }
  return (
    <>
     {props.showModal && 
     <Container>
        <Content>
          <Header>
          <h2>Create a Post</h2>
            <button>
                <img src="/images/close-icon.svg"/>
            </button>
          </Header>
          <ShareContent>
         <UserInfo>
         {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
         </UserInfo>
         <Editor>
            <textarea 
            value={editior}
            placeholder="What do you want to talk about ?"
            onChange={(e)=>seEditor(e.target.value)}
            autoFocus={true}
            />
              {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label
                        style={{
                          cursor: "pointer",
                          display: "block",
                          marginBottom: "15px",
                        }}
                        htmlFor="file"
                      >
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="img" />
                    )}
                  </UploadImage>
                  ):(
                    assetArea === "media" && (
                        <>
                          <input
                            style={{ width: "100%", height: "30px" }}
                            type="text"
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                            placeholder="Please input a video link"
                          />
                          {videoLink && (
                            <ReactPlayer width="100%" url={videoLink} />
                          )}
                        </>
                      )
                    )}

                  
            
         </Editor>

          </ShareContent>
        </Content>
        </Container>
}
        </>

  );
}
                          
const Container=styled.div`

`;
const Content=styled.div`

`;
const Header=styled.div`
`;
const UserInfo=styled.div``;
const ShareContent=styled.div``;
const Editor=styled.div`
`;
const mapStateToProps = (state) => {
    return {
      user: state.user.user,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return{

    }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(PostModal);