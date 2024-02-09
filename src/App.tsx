import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {
  const [headerType, setHeaderType] = React.useState(1)

  const handleHeaderType = (headerId: number ) => setHeaderType(headerId)

  return (
    <>
      <Header headerId={headerType} />
      <Main handleHeaderType ={handleHeaderType}/>
      <Footer />
    </>
  )
}

export default App;