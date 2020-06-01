import React from 'react';

type YoutubePlayerProps = {
  title: string;
  embedUrl: string;
  width?: string;
  height?: string;
};

export const YoutubePlayer: React.FC<YoutubePlayerProps> = (
  props: YoutubePlayerProps,
) => {
  const { title, embedUrl, width, height } = props;

  return (
    <iframe
      title={title}
      width={width ?? '100%'}
      height={height ?? '300'}
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
