import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const Dashboard = ({ navigation }) => (
  <Background>
    {/* <Logo /> */}
    <Header>Home</Header>
    <Paragraph>
      You're logged in!
    </Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      Logout
    </Button>
  </Background>
)

export default Dashboard
