/** @jsxImportSource @emotion/react */

import { css, jsx, Global, keyframes, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'


const color = 'white'
const Button = styled.button`
padding: 32px;
background-color: hotpink;
font-size: 24px;
border-radius: 4px;
color: black;
font-weight: bold;
&:hover {
    color: white;
}
`

const style = css`
  color: hotpink;
`

const test = css`
    color: black;
`;

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some hotpink text.
        {children}
    </div>
)

const anotherStyle = css({
    textDecoration: 'underline'
})

const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
)

const P = (props) => {
    return (
        <p
            css={{
                margin: 0,
                fontSize: 12,
                lineHeight: '1.5',
                fontFamily: 'Sans-Serif',
                color: 'black'
            }}
            {...props} // <- props contains the `className` prop
        />
    )
}

const ArticleText = (props) => {
    return (
        <P
            css={{
                fontSize: 14,
                fontFamily: 'Georgia, serif',
                color: 'darkgray'
            }}
            {...props} // <- props contains the `className` prop
        />
    )
}

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

const paragraph = css`
  color: turquoise;

//   자기 자신이 header 태그 다음으로 위치한다면 color 값을 green으로 지정할 수 있도록 한다.
  header & {
    color: green;
  }
`


const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`


export default function EmotionExample() {

    let SomeComponent = props => (
        <div className={props.wrapperClassName}>
            in the wrapper!
            <div className={props.className}>{props.children}</div>
        </div>
    )

    return (
        <>
            <Global
                styles={css`
            p {
                color:pink;
                font-weight:bold;
                animation: ${bounce} 0.5s ease-in-out infinite;
            }
        `}
            />
            <div
                css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
            >
                Hover to change color.
            </div>

            <Button>This my button component.</Button>

            <p> 부모요소에 감싸진 자식요소 테스트 </p>
            <SomeComponent>
                <AnotherComponent />
            </SomeComponent>

            <p> Ariticle Text 테스트 </p>
            <P>P 테스트</P>
            <ArticleText>Article 테스트</ArticleText>

            <div>
                <div css={base}>This will be turquoise</div>
                <div css={[danger, base]}>
                    This will be also be turquoise since the base styles overwrite the danger
                    styles.
                </div>
                <div css={[base, danger]}>This will be red</div>
            </div>

            {/* Nested Selectors */}

            <div>
                <header>
                    <p css={paragraph}>This is green since it's inside a header</p>
                </header>
                <p css={paragraph}>This is turquoise since it's not inside a header.</p>
            </div>

            {/* Media Query */}
            <p
                css={css`
                font-size: 30px;
                @media (min-width: 420px) {
                    font-size: 50px;
                }
                `}>
                Some text!
            </p>
            <div className="some-class">This is hotpink now!</div>

            {/* className */}

            <ClassNames>
                {({ css, cx }) => (
                    <SomeComponent
                        wrapperClassName={css({ color: 'green' })}
                        className={css`
          color: hotpink;
        `}
                    >
                        from children!!
                    </SomeComponent>
                )}
            </ClassNames>

        </>
    )
}
