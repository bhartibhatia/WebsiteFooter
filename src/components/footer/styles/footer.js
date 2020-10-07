import styled from 'styled-components'

export const Container = styled.div` 
padding: 80px 60px;
background: radial-gradient(circle, rgba(93,39,251,1) 0% ,rgba(112,71,247,1) 100%);
`

export const Wrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
max-width:1000px;
margin: 0 auto;
background-color: lightblue;
padding: 10px;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
padding:5px;
background-color:grey;
 `

export const Row = styled.div`
display:grid;
grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
grid-gap:20px;

@media(max-width:1000px){
    grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
}
 `

export const Link = styled.div`
color:lightblue;
margin-bottom:20px;
text-size:18px;
text-decoration:none;

&:hover{
    color:#ff9c00;
    transition:200ms ease-in;
}`

export const Title = styled.div`
font-size:24px;
color:#fff;
margin-bottom:40px;
font-weight:bold;
 `
