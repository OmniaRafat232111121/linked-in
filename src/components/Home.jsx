import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
const Home = () => {
  return (
 <Container>
  <Section>
   <h5>
    <a>Hiring in a hurry? - </a>
   </h5>
   <p>
          Find talented pros in record time with Upwork and keep business
          moving.
    </p>

  </Section>
  <LayOut>
    <LeftSide/>
    <Main/>
    <RightSide/>
   

  </LayOut>
 </Container>
  );
}
const Container=styled.div`
padding-top: 100px;
max-width: 100%;
`;
const Section=styled.section`
min-height:50px;
text-align:center;
display:flex;
justify-content:center;
text-decoration:underline;
h5{
    color: #0a66c2;
    font-size: 14px;
}
a{
    font-weight:700;
   
}
p{
    
        font-size: 14px;
        color: #434649;
        font-weight: 600;
}
@media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 5px;
    
  }
`; 
const LayOut=styled.div`
display:grid;
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap:25px;
row-gap:25px;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

`
export default Home