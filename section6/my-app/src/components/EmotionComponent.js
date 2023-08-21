import { css } from '@emotion/react';
import styled from '@emotion/styled';

/** @jsxImportSource @emotion/react */
const EmotionComponent = () => {
//styledの方でh2のcolor:をprops.blue でblueかredにする
  const Hello = styled.h2`
    color: ${ props => (props.blue ? "blue" : "red")};
  `
//largeFontのfont-size: 54px;
const largeFont = css`
  font-size: 54px;`
//fontRedのcolor: red;とlargeFontを継承
const fontRed = css`
  color: red;
  ${largeFont}
`
  return (
    <>
      <h2
        css={css `
          color: red;
        `}
      >
      Emotionのテスト
      </h2>
      {/* <h2 css={[largeFront, fontRed]}></h2> */}
      <h2 css={fontRed}>
        継承のパターン
      </h2>
      <Hello blue>スタイル用コンポーネント</Hello>
    </>
  )
}

export default EmotionComponent