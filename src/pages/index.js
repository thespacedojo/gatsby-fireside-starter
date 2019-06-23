import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Episode from "../components/episode"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allItems(sort: {fields: date_published, order: DESC}) {
        nodes {
          title
          id
          fields {
            slug
          }
          attachments {
            id
            url
          }
          content_html
          summary
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="List of podcasts" />
      <h1>Podcasts</h1>
      { data.allItems.nodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
        ))
      }
    </Layout>
  )
}

export default IndexPage
