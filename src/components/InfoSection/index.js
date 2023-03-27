import React from 'react'
import {Button} from '../ButtonElements';
import { 
    Column2, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, 
    primary, 
    dark, 
    dark2,
    showBtn,
    toggleModal,
    whereButton
}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {showBtn ?
                            <>
                            <BtnWrap>
                                <a href={whereButton} style={{ textDecoration: 'none' }}></a>
                                <Button to="home" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact="true" 
                                offset={-80} 
                                primary={primary ? 1 : 0} 
                                dark={dark ? 1 : 0} 
                                dark2={dark2 ? 1 : 0}
                                onClick={toggleModal}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                            </>
                            : null
                            }
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection