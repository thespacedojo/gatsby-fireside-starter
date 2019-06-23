import React from "react"
import { Link } from "gatsby"

const Episode = ({episode}) => {
  return (
    <div>
      <h2><Link to={`/${episode.fields.slug}`}>{episode.title}</Link></h2>
      <audio src={episode.attachments[0].url} controls="controls">
      Your browser does not support the audio element.
      </audio>
      <div>{episode.summary}</div>
    </div>
  )
}

export default Episode
