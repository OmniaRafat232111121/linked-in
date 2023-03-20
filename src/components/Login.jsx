import React,{useEffect} from 'react'
import styled from 'styled-components'
// import { signInAPi } from '../redux/actions'
import { connect } from "react-redux";
import { signInAPI } from '../redux/actions';
import {useNavigate} from 'react-router-dom'
const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.user && navigate("/home");
  }, [props.user]);

   
  return (
    <Container>
       <Nav>
       <a href="/index.html">
          <Image src="/images/login-logo.svg" alt="" />
        </a>
        <div>
            <Join>Join in</Join>
            <SIgnIn>Sign in</SIgnIn>
        </div>
       </Nav>
       <Section>
        <Hero>
            <h1> Welcome to your Professional Community</h1>
            <ImageHero src="/images/login-hero.svg"/>
            <Form>
            <Google onClick={()=>props.signIn()}>
                <ImageICon src="/images/google.svg" />
                 Sign in with Google
            </Google>
        </Form>
        </Hero>
        
       </Section>
    </Container>
  )
}
const Container =styled.div`
margin:0;
padding:0;
`
const Nav =styled.nav`
max-width:1200px;
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
& > a{
    width:120px;
    height:35px;
@media (max-width: 768px) {
        padding: 10px;
      }
}
`
const Image=styled.img`
width:100px;

`

const Join =styled.a`
font-size:16px;
padding:10px 15px;
border-radius:10px;
color:rgba(0, 0, 0, 0.6);
margin-right:12px;
cursor:pointer;
&:hover{
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
}
`;
const SIgnIn =styled.a`
color:#0a66c2;
box-shadow:inset 0 0 0 1px #0a66c2;
padding: 10px 15px;
border-radius:20px;
cursor:pointer;
font-weight:600;
transation-duration:3s;
line-height:20px;
&:hover{
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
}

`
const Section=styled.div`
display:flex;
align-content:start;
flex-wrap:wrap;
padding:100px;
min-height:700px;
width: 100%;
max-width: 1128px;
margina:auto;
position: relative;
padding-bottom:130px;
padding-top:30px;
@media (max-width: 768px) {
   display:grid;
   grid-template-columns: 2fr 60px;
   grid-gap:40px;
   padding:40px;
   
  }
`
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 400;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  
  }
`;
const ImageHero=styled.img`
    with:100%;
    max-width: 700px;
    height: 670px;
    position: absolute;
    top: 30px;
    right: -150px;
    @media (max-width: 768px) {
      top: 300px;
      width: initial;
      position: initial;
      height: initial;

    }
`
const Form=styled.div`
margin-top: 100px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google=styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
  inset 0 0 0 1px rgb(0 0 0 / 0%);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
cursor:pointer;
&:hover {
  background-color: rgba(207, 207, 207, 0.25);
  color: rgba(0, 0, 0, 0.75);
}
`;
const ImageICon=styled.img`

`;
const mapStateToProps=(state)=>{
  return{
    user:state.user.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signIn :()=>dispatch(signInAPI())
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
