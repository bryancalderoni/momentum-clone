import styled from 'styled-components'

export const QuoteContainer = styled.div`
position: fixed;
text-align: center;
bottom: 0;
width: 600px;
left: 50%;
margin-left: -300px;

@media screen and (max-width: 600px){
    width: 350px;
    margin-left: -175px;
}

`

export const Text = styled.div`
font-size: 1.2rem;
margin-bottom: 20px;
`