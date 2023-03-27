import styled from 'styled-components'

export const SignUpContainer = styled.div`
    max-width: 800px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #fff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 500px) {
        flex-direction: column;
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100vh;
    }
`

export const SignUpOverlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
`

export const SignUpImage = styled.img`
    width: 250px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

export const SignUpRight = styled.div`
    width: 100%;
`
export const CloseButton = styled.p`
    position: fixed;
    top: 8px;
    right: 8px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        color: #000;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
`

export const ModalHeader = styled.h1`

`

export const ModalText = styled.p`

`

export const ButtonContainer = styled.div`
    display: flex;
    padding: 1rem 1rem;
`

export const BtnSelect = styled.button`
    width: 100%;
    margin: .5rem;
    padding: 16px 0;
    border: none;
    color: #fff;
    background-color: #000;

    &:hover {
        cursor: pointer;
    }
`

export const BtnSelect2 = styled.button`
    width: 100%;
    margin: .5rem;
    padding: 16px 0;
    border: none;
    color: #fff;
    background-color: #913;

    &:hover {
        cursor: pointer;
    }
`