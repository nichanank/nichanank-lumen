import React from 'react';
import styled from '@emotion/styled';
import GalleryGrid from './GalleryGrid';

const Gallery = styled.div`
  text-decoration: none;
  margin: 0;
  padding: 2rem 1rem;
`

const GalleryComposition = props => {
  return (
    <Gallery key={props.id}>
      <GalleryGrid photos={props.photos} />
    </Gallery>
  )
}

export default GalleryComposition;