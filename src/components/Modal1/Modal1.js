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
} from './Modal1Elements'

const Modal1 = ({ openModal, onClose}) => {

  if (!openModal) return null;

  return (
    <SignUpOverlay onClick={onClose}>
      <SignUpContainer>
        <SignUpImage src={cupcake} alt="cupcake" />
        <SignUpRight>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Content>
            <ModalHeader>Chocolate Cupcake</ModalHeader>
            <ModalText>Delicious soft chocolate cake with whipped ganache</ModalText>
            <ModalText>Calories: 1000</ModalText>
            <ModalText>Ingredients: Eggs, sugar, flour, etc...</ModalText>
          </Content>
          {/* <ButtonContainer>
            <BtnSelect>Submit Order</BtnSelect>
            <BtnSelect2>Cancel</BtnSelect2>
          </ButtonContainer> */}
        </SignUpRight>
      </SignUpContainer>
    </SignUpOverlay>
  )
}

export default Modal1;