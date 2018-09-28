import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi There!</h1>
    <p>My name is Heather.</p>
    <p>I am so excited to build cool things!!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
