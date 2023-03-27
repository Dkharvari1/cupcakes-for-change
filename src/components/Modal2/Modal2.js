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
} from './Modal2Elements'

const Modal2 = ({ openModal, onClose}) => {

  if (!openModal) return null;

  return (
    <SignUpOverlay onClick={onClose}>
      <SignUpContainer>
        <SignUpImage src={cupcake} alt="cupcake" />
        <SignUpRight>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Content>
            <ModalHeader>Vanilla</ModalHeader>
            <ModalText>Soft vanilla cake that melts in your mouth with a creamy vanilla frosting</ModalText>
            <ModalText>Calories: 900</ModalText>
            <ModalText>Ingredients: Eggs, sugar, flour, vanilla extract, etc...</ModalText>
          </Content>
        </SignUpRight>
      </SignUpContainer>
    </SignUpOverlay>
  )
}

export default Modal2;