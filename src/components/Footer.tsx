import React from 'react'
import styled from '@emotion/styled'

const FooterImgWrapper = styled.div({
  '@media screen and (min-width: 1080px)': {
    top: '-10em',
    position: 'relative'
  }
});

const FooterImg = styled.img({
  width: '100%',
  height: '100%',
  maxHeight: 480,
  objectFit: 'cover'
})

const Footer = () => (
  <FooterImgWrapper>
    <FooterImg 
      src="https://upload.wikimedia.org/wikipedia/commons/6/67/Incendie_Alexandrie_by_Hermann_Goll_1876.jpg"
      alt="" />
  </FooterImgWrapper>
);

export default Footer
