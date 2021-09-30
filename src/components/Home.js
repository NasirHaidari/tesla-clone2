import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        description='Boka ett virtuellt möte'
        backgroundImg='model-3.jpg'
        lefBtnText='anpassad beställning'
        rightBtnText='bilar i lager'
        txt='Läs mer om Tesla för företag'
      />

      <Section
        title='Model Y'
        description='Boka ett virtuellt möte'
        backgroundImg='model-y.jpg'
        lefBtnText='anpassad beställning'
        rightBtnText='provkör'
      />
      <Section
        title='Model S'
        description='Boka ett virtuellt möte'
        backgroundImg='model-s.jpg'
        lefBtnText='anpassad beställning'
        rightBtnText='Bilar i lager'
      />

      <Section
        title='Model X'
        description='omgående leverans'
        backgroundImg='model-x.jpg'
        lefBtnText='anpassad beställning'
        rightBtnText='bilar i lager'
      />
      <Section
        title='Solenergi och Powerwall'
        description='Kraft till allt '
        backgroundImg='solar-panel.jpg'
        lefBtnText='läs mer'
      />

      <Section
        title='Tillbehör'
        description=''
        backgroundImg='accessories.jpg'
        lefBtnText='Handla nu'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
