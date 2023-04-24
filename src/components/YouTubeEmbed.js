import React from "react";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import PropTypes from "prop-types";

// This code was taken from Dev.to and a YouTube tutorial => Details in README
const YoutubeEmbed = ({ src }) => (
  <ResponsiveEmbed aspectRatio="16by9">
    <iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </ResponsiveEmbed>
);

YoutubeEmbed.propTypes = {
  src: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
