import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { signOutAPI } from '../redux/actions';

const Header = (props) => {
     console.log(props.user)
  return (
    <Container>
    <Content>
        <Logo>
            <a href="/home">
            <img src="/images/home-logo.svg" alt="" />

            </a>
        </Logo>
        <Search>
            <div>
                <input
                type="text"
                placeholder='search'
                />
                <SearchIcon>
                <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
            </div>
        </Search>
        <Nav>
            <NavListwrapper>
                <NavList>
                    <a>
                    <img src="/images/nav-home.svg" alt="" />
                        <span>Home</span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                    <img src="/images/nav-network.svg" alt="" />
                        <span>my Network</span>
                    </a>
                </NavList>
                <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />

                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />

                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
               {props.user  ?  (
                    <img src={props.user} />
               ):
               (
                <img src="/images/user.svg" alt="" />
               )}

                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
               <a>
                <img src="/images/nav-work.svg"/>
                <span>
                    work 
                    <img src="/images/down-icon.svg" alt="" />
                </span>
               </a>
            </Work>
            </NavListwrapper>
        </Nav>

    </Content>
    </Container>
  )
}
const Container=styled.div`
background-color: #fff;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 30px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
@media (max-width: 767px) {
  padding: 15px;
}
`;
const Content=styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;



`;
const Logo=styled.span`
margin-right: 8px;
font-size: 0px;
`;
const Search=styled.div`
opacity:1;
& > div{
    max-width:280px;
}
input{
    border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
}

`;
const SearchIcon=styled.div` 
width: 40px;
position: absolute;
z-index: 1;
top: 40px;
left: 280px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
top:25px;
}
`;
const Nav=styled.nav`
margin-left: auto;
display: block;
@media (max-width: 768px) {
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  width: 100%;
}
`;

const NavListwrapper=styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

padding:10px;
margin-top:10px;
.active {
  span:after {
    content: "";
    transform: scaleX(1);
    border-bottom: 2px solid var(--white, #fff);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    border-color: rgba(0, 0, 0, 0.9);
  }
`;
const NavList=styled.li`
display:flex;
align-items:center;
a{
    align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-wight:400;
    line-height:1.5;
    position:relative;
    min-height: 60px;
    min-width: 80px;
    span {
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
      }
      @media (max-width: 768px) {
        min-width: 70px;
      }
      &:hover,
      &:active {
        a {
          span {
            color: rgba(0, 0, 0, 0.9);
          }
        }
}
`;
const SignOut=styled(NavList)`
position: absolute;
top: 45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
cursor: pointer;
@media (max-width: 767px) {
  position: absolute;
  top: -45px;
  right: 15px;
  background: #eee;
}
`;
const User=styled(NavList)`
position:relative;
 a > svg {
    width:24px;
    border-radius:50%;
 }
 a > img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
 }
 span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
      background-color:rgb(102 102 102);
      margin-top:10px;
    }
    &:hover{
        ${SignOut} > a{
            color:#fff;
            position:absoulete;
            top:20px;

        }
    }
`
const Image=styled.img `

`

const Work=styled(User) `
border-left: 1px solid rgba(0, 0, 0, 0.08);
@media (max-width: 575px) {
  display: none;
}
`;


const mapStateToProps=(state)=>{
    return{
      user:state.user.user
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOutAPI()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Header);