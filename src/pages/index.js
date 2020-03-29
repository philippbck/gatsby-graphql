import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br /><br />
    <h1>AWESOME EXTERNAL GRAPHQL RESULT</h1>
    <div className="headline-separator"></div>
    <br /><br />
    <Projects></Projects>
  </Layout>
)

export default IndexPage
