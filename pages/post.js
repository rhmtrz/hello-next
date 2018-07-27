
import Layout from '../src/component/my-layout'; 
import { withRouter } from 'next/router'; 

const linkStyle = {
  marginRight: 15
}

const Content = withRouter((props) => {
  return(<div>
    <h1>{props.router.query.title}</h1>
    <h3>This is the page content</h3>
  </div>)
})

const Page = () => {
  return (
    <div>
      <Layout>
        <Content />
      </Layout>
    </div>
  )
}

export default Page;