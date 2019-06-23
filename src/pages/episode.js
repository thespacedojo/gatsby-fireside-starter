import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Episode from "../components/episode"
import SEO from "../components/seo"

const EpisodePage = ({data}) => {
  const episode = data.items
  return (
    <Layout>
      <SEO title="List of podcasts" />
      <Episode key={episode.id} episode={episode} />
      <div dangerouslySetInnerHTML={{__html: episode.content_html}} />
    </Layout>
  )
}

export const query = graphql`
query EpisodeQuery($slug: String!) {
  items(fields: {slug:{eq: $slug}}) {
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

`

export default EpisodePage
