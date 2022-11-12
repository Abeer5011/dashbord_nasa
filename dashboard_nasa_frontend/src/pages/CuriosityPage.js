import Immutable from "immutable"
import { useContext } from "react"
import { Col } from "react-bootstrap"
import Curiosity from "../components/Curiosity"
import NasaContext from "../utils/NasaContext"
import styles from "../style/MyStyle.module.css"
import { Link } from "react-router-dom"

export default function CuriosityPage() {
  const { curiosity } = useContext(NasaContext)

  const curiosity1 = Immutable.List(curiosity)

  if (!curiosity1) return <h1>Loading....</h1>
  console.log(curiosity1)

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
            <h4 style={{ color: "white" }}>
              Curiosity is about 3 metres (10 feet) <br /> long and weighs about 900 kg (2,000 pounds), <br /> which
              makes it the longest and heaviest rover on Mars. <br /> (By contrast, the Mars Exploration Rovers,{" "}
            </h4>
            <hr style={{ color: "white" }} />
            {curiosity1.map(curInfo => (
              <Curiosity key={curInfo._id} curInfo={curInfo} />
            ))}
          </div>
        </Col>
      </div>
    </>
  )
}
