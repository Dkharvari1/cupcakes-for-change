import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree} from '../components/InfoSection/Data';
import Modal1 from '../components/Modal1/Modal1';
import Modal2 from '../components/Modal2/Modal2';
import Modal3 from '../components/Modal3/Modal3';
import Modal4 from '../components/Modal4/Modal4';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import SignUp from '../components/SignUp/SignUp';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    const toggleModal = () => {
      setOpenModal(true);
    }

    const onClose = () => {
      setOpenModal(false);
    }

    const toggleModal1 = () => {
      setOpenModal1(true);
    }

    const onClose1 = () => {
      setOpenModal1(false);
    }

    const toggleModal2 = () => {
      setOpenModal2(true);
    }

    const onClose2 = () => {
      setOpenModal2(false);
    }

    const toggleModal3 = () => {
      setOpenModal3(true);
    }

    const onClose3 = () => {
      setOpenModal3(false);
    }

    const toggleModal4 = () => {
      setOpenModal4(true);
    }

    const onClose4 = () => {
      setOpenModal4(false);
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} toggleModal={toggleModal} />
        <Navbar toggle={toggle} toggleModal={toggleModal} />
        <SignUp openModal={openModal} onClose={onClose} />
        <Modal1 openModal={openModal1} onClose={onClose1} />
        <Modal2 openModal={openModal2} onClose={onClose2} />
        <Modal3 openModal={openModal3} onClose={onClose3} />
        <Modal4 openModal={openModal4} onClose={onClose4} />
        <HeroSection />
        <InfoSection {...homeObjOne} toggleModal={toggleModal4} />
        {/* <InfoSection {...homeObjTwo} /> */}
        <Services toggleModal1={toggleModal1} toggleModal2={toggleModal2} toggleModal3={toggleModal3} />
        <InfoSection {...homeObjThree} />
        <Footer />
    </>
  )
}

export default Home