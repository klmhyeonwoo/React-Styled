import React, { useState } from 'react'
import styled, { keyframes, ThemeProvider, createGlobalStyle } from 'styled-components'


const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

// const Button = styled.button`
// /* Adapt the colors based on primary prop */
// background: ${props => props.primary ? "palevioletred" : "white"};
// color: ${props => props.primary ? "white" : "palevioletred"};

// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
// color: tomato;
// border-color: tomato;
// `;

const Button3 = styled.button`
font-size:14px;
width:16em;
height:3em;
background-color: ${({ strong }) => strong === "true" ? "light-gray" : "gray"};
border-radius: 50px;
border:none;
`;

// 

// &는 자기 자신을 의미
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover { 
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

const Test = styled.button.attrs((props) => ({
  disabled: props.state,
}))`
  background: white;
  border:solid;
  border-radius: 50px;
  width: 200px;
  height: 40px;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "black"
  }
}

// Define what props.theme will look like
const defaultTheme = {
  main: "mediumseagreen"
};

const redTheme = {
  main: "red"
};

const greenTheme = {
  main: "green"
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <GlobalStyle />
      <button onClick={() => {
        setTheme(greenTheme)
      }}>green</button>
      <button onClick={() => {
        setTheme(redTheme)
      }}>red</button>
      <div>
        <Button>Normal</Button>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <div>
        <button>other</button>
      </div>

      {/* <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        <PasswordInput placeholder="A bigger password input" size="2em" />
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
        <Test state={true}>테스트 버튼 입니다</Test>
      </div> */}
      <>
        {/* <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div> */}
      </>
      {/* <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
            <Button>button</Button>
            <Button primary>button</Button>
            <TomatoButton as="a" href="https://www.h4vebeauty.com">Tomato Button</TomatoButton>
            <Button3 as={ReversedButton}>hyeonwoo button</Button3>
            <Button3 strong="true">hyeonwoo button</Button3> */}
    </>
  );
}
