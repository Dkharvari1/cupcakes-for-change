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
} from './Modal3Elements'

const Modal3 = ({ openModal, onClose}) => {

  if (!openModal) return null;

  return (
    <SignUpOverlay onClick={onClose}>
      <SignUpContainer>
        <SignUpImage src={cupcake} alt="cupcake" />
        <SignUpRight>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Content>
          <ModalHeader>Raspberry Lemon Cheesecake</ModalHeader>
            <ModalText>Soft raspberry flavored cake that melts in your mouth with a creamy cheesecake frosting with a lemony twist</ModalText>
            <ModalText>Calories: 700</ModalText>
            <ModalText>Ingredients: Eggs, sugar, flour, vanilla extract, etc...</ModalText>
          </Content>
        </SignUpRight>
      </SignUpContainer>
    </SignUpOverlay>
  )
}

export default Modal3;