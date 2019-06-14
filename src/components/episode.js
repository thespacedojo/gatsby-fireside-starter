import React from "react"

const Episode = ({episode}) => {
  return (
    <div>
      <h2>{episode.title}</h2>
      <audio src={episode.attachments[0].url} controls="controls">
      Your browser does not support the audio element.
      </audio>
    <div dangerouslySetInnerHTML={{__html: episode.content_html}} />
    </div>
  )
}

export default Episode
