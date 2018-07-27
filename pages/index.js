import Layout from '../src/component/my-layout'; 
import Link from 'next/link'; 

const PostLink = (props) => {
  return(
    <li>
      <Link as={`/p/${props.id}`} href={`/post?${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

const Index = () => {
  return (
    <div>
      <Layout>
        <h1>My Webpage</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello next.js" />
          <PostLink id="learn-nextjs" title="Learning Next.js is very intresting" />
          <PostLink id="deploy-nextjs" title="First learn next.js and then go to study ReactJS" />
        </ul>
        <h1>This is Index page</h1>
      </Layout>
    </div>
  )
}

export default Index;