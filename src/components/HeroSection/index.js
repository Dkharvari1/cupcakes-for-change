import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from'../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Cupcakes for Change</HeroH1>
            <HeroP>Help make a difference in the world by buying delicious treats!</HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover} 
                primary="true" 
                dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection