import { css } from '@emotion/react'

export default function AppCard() {
  return <div css={S}>
    <strong>지혜쌤 <span>SCSS공부가</span> 필요해</strong>
    
  </div>
}

const S = css`
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  strong {
    color: red;
    span{
      color: blue;
      font-size: 10px;
    }
  }

  //style 작업 SCSS로 작성해주세요!
`
