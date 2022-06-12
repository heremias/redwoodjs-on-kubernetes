import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const KubedPage = () => {
  return (
    <>
      <MetaTags title="Kubed" description="Kubed page" />

      <h1>KubedPage</h1>
      <div className="grid">
        <p>
          Find me in <code>./web/src/pages/KubedPage/KubedPage.tsx</code>
        </p>
        <p>
          My default route is named <code>kubed</code>, link to me with `
          <Link to={routes.kubed()}>Kubed</Link>`
        </p>
      </div>
    </>
  )
}

export default KubedPage
