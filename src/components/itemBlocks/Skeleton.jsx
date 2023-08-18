import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={508}
    viewBox="0 0 300 508"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="25" y="265" rx="0" ry="0" width="250" height="22" />
    <rect x="0" y="312" rx="12" ry="12" width="300" height="115" />
    <rect x="25" y="18" rx="0" ry="0" width="250" height="215" />
    <rect x="0" y="466" rx="20" ry="20" width="300" height="41" />
    <rect x="0" y="437" rx="0" ry="0" width="300" height="20" />
  </ContentLoader>
)

export default Skeleton
