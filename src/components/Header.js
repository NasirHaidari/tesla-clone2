import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import LanguageIcon from '@material-ui/icons/Language'
import { useSelector } from 'react-redux'
function Header() {
  const [BurgerState, setBurgerState] = useState(false)
  const cars = useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <a href='https://www.tesla.com/sv_se'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        <a href='https://www.tesla.com/sv_se/models'>Model S</a>
        <a href='https://www.tesla.com/sv_se/model3'>Model 3</a>
        <a href='https://www.tesla.com/sv_se/modelx'>Model X</a>
        <a href='https://www.tesla.com/sv_se/modely'>Model Y</a>
      </Menu>

      <RightMenu>
        <p onClick={() => setBurgerState(true)}>
          <span className='menyNav'>Meny</span>
        </p>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightMenu>
      <BurgerNav show={BurgerState}>
        <CloseWrapper onClick={() => setBurgerState(false)}>
          <CustomClose />
        </CloseWrapper>

        <li>
          <a href='https://www.tesla.com/sv_se/models'>Model S</a>
        </li>

        <li>
          <a href='https://www.tesla.com/sv_se/model3'>Model 3</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se/modelx'>Model X</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se/modely'>Model Y</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Bilar i lager</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Begagnade bilar i lager</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Inbyte</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Provkör</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Vagnpark och bilpolicy</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Powerwall</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Energi</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Kommersiell energi</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Elleverantör</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Laddning</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Hitta oss</a>
        </li>
        <li>
          <a href='https://www.tesla.com/sv_se'>Support</a>
        </li>

        <li>
          <a href='https://www.tesla.com/sv_se'>
            <LanguageIcon />
            <span> Sverige</span>
          </a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  img {
    width: 115px;
    height: 15px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  p {
    cursor: pointer;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  text-align: start;

  flex-direction: column;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  span {
    padding-left: 20px;
    top: 0;
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
