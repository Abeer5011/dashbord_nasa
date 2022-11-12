import Immutable from "immutable"
import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Spirit from "../components/Spirit"
import NasaContext from "../utils/NasaContext"
import styles from "../style/MyStyle.module.css"

export default function CuriosityPage() {
  const { spirit } = useContext(NasaContext)
  if (!spirit) {
    return <h1>Loading.....</h1>
  }
  const spirit1 = Immutable.List(spirit)

  console.log(spirit1)
  return (
    <>
      <div className={styles.bgImg}>
        <div>
          <Link to="/">
            <button className={styles.goBackBtn} style={{ marginTop: 100, marginLeft: 50 }}>
              <span>Go Back</span>
            </button>
          </Link>
        </div>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginTop: 100 }}>
            <h5 style={{ color: "white" }}>
              The Spirit and Opportunity rovers <br /> together represented <br /> NASA's Mars Exploration Rover Mission
              (MER), <br /> part of the Mars Exploration Program. <br /> Launched about a month apart in 2003, <br />{" "}
              the twin rovers’ main scientific <br /> objective was to search for a range of rocks <br /> and soil types
              and then look for clues <br /> for past water activity on Mars.
            </h5>
            <hr style={{ color: "white" }} />
            {spirit1.map(spiInfo => (
              <Spirit key={spiInfo._id} spiInfo={spiInfo} />
            ))}
          </div>
        </Col>
      </div>
    </>
  )
}
