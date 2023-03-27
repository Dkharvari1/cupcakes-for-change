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
} from './SignUpElements'

const SignUp = ({ openModal, onClose}) => {

  if (!openModal) return null;

  return (
    <SignUpOverlay onClick={onClose}>
      <SignUpContainer>
        {/* <SignUpImage src={cupcake} alt="cupcake" /> */}
        <SignUpRight>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Content>
            <ModalHeader>Order</ModalHeader>
            <ModalText>yooooooosadada</ModalText>
            <ModalText>yooooooosadada</ModalText>
          </Content>
          <ButtonContainer>
            <BtnSelect>Submit Order</BtnSelect>
            <BtnSelect2>Cancel</BtnSelect2>
          </ButtonContainer>
        </SignUpRight>
      </SignUpContainer>
    </SignUpOverlay>
  )
}

export default SignUp;