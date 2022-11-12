import { useEffect, useState } from "react"
import NasaContext from "./utils/NasaContext"
import { Route, Routes } from "react-router-dom"
import CuriosityPage from "./pages/CuriosityPage"
import SpiritPage from "./pages/SpiritPage"

import OpportunityPage from "./pages/OpportunityPage"
import HomePage from "./pages/HomePage"
function App() {
  const [curiosity, setCuriosity] = useState([])
  const [spirit, setSpirit] = useState([])
  const [opportunity, setOpportunity] = useState([])

  const [rovers, setRovers] = useState([])

  useEffect(() => {
    curiosity_data()
    spirit_data()
    opportunity_data()
    recent_photos()
  }, [])

  const curiosity_data = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/curiosity")
      const data = await res.json()

      setCuriosity(data.photos)
    } catch (error) {}
  }

  const recent_photos = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/photos`)
      const data = await res.json()

      setRovers(data)
    } catch (error) {}
  }
  const spirit_data = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/spirit")
      const data = await res.json()

      setSpirit(data.photos)
    } catch (error) {}
  }
  const opportunity_data = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/opportunity")
      const data = await res.json()

      setOpportunity(data.photos)
    } catch (error) {}
  }

  const store = {
    curiosity,
    spirit,
    opportunity,
    rovers,
  }

  return (
    <NasaContext.Provider value={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curiosity" element={<CuriosityPage />} />
        <Route path="/spirit" element={<SpiritPage />} />
        <Route path="/opportunity" element={<OpportunityPage />} />
      </Routes>
    </NasaContext.Provider>
  )
}

export default App
