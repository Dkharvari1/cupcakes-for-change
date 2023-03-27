import React from 'react'
import cupcake from '../../images/svg-3.svg'
import {
  SignUpOverlay,
  SignUpContainer,
  SignUpImage,
  SignUpRight,
  CloseButton,
  Content,
  ModalHeader,
  ModalText,
  ButtonContainer,
  BtnSelect,
  BtnSelect2
} from './Modal4Elements'

const Modal4 = ({ openModal, onClose}) => {

  if (!openModal) return null;

  return (
    <SignUpOverlay onClick={onClose}>
      <SignUpContainer>
        {/* <SignUpImage src={cupcake} alt="cupcake" /> */}
        <SignUpRight>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Content>
          <ModalHeader>Our Mission</ModalHeader>
            <ModalText>In response to the tragic recurring mass shootings seen in the United States, 100% of profits from this July/August fundraiser will be donated to <span style={{color: '#e68ed4'}}>MARCH FOR OUR LIVES (a survivor led, policy driven nonprofit)</span> to combat gun violence.</ModalText>
          </Content>
        </SignUpRight>
      </SignUpContainer>
    </SignUpOverlay>
  )
}

export default Modal4;