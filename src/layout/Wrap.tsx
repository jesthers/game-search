import { css } from '@emotion/react'

export default function Wrap({ children }: JSX.ElementChildrenAttribute) {
  return <div css={S}>{children}</div>
}

const S = css``
