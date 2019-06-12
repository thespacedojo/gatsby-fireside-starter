import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Podcast from "../components/podcast"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allItems(sort: {fields: date_published, order: DESC}) {
        nodes {
          title
          id
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="List of podcasts" />
      <h1>Podcasts</h1>
      { data.allItems.nodes.map((podcast) => (
        <Podcast key={podcast.id} podcast={podcast} />
        ))
      }
    </Layout>
  )
}

export default IndexPage
