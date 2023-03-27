import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-1.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = ({
    toggleModal1,
    toggleModal2,
    toggleModal3,
}) => {
  return (
    <ServicesContainer id="services">
    <ServicesH1>Flavors of the Month!</ServicesH1>
    <ServicesWrapper>
        <ServicesCard onClick={toggleModal1}>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Chocolate</ServicesH2>
            <ServicesP>Delicious soft chocolate cake with a whipped ganache</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={toggleModal2}>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Vanilla</ServicesH2>
            <ServicesP>Soft vanilla cake that melts in your mouth with a cream vanilla frosting</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={toggleModal3}>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Raspberry Lemon Cheesecake</ServicesH2>
            <ServicesP>Soft raspberry flavored cake that melts in your mouth with a cream cheesecake frosting with a lemony twist</ServicesP>
        </ServicesCard>
    </ServicesWrapper>


    </ServicesContainer>
  )
}

export default Services