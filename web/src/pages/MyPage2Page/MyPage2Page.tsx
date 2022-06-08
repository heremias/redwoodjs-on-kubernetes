import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyPage2Page = () => {
  return (
    <>
      <MetaTags title="MyPage2" description="MyPage2 page" />

      <h1>MyPage2Page</h1>
      <p>
        Find me in <code>./web/src/pages/MyPage2Page/MyPage2Page.tsx</code>
      </p>
      <p>
        My default route is named <code>myPage2</code>, link to me with `
        <Link to={routes.myPage2()}>MyPage2</Link>`
      </p>
    </>
  )
}

export default MyPage2Page
