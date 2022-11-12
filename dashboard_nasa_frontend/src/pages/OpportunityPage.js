import Immutable from "immutable"
import { useContext } from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Opportunity from "../components/Opportunity"
import NasaContext from "../utils/NasaContext"
import styles from "../style/MyStyle.module.css"

export default function CuriosityPage() {
  const { opportunity } = useContext(NasaContext)
  console.log(opportunity)

  const opportunity1 = Immutable.List(opportunity)
  console.log(opportunity1)
  if (!opportunity1) {
    return <h1>Loading.....</h1>
  }
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
              The Mars Exploration Rovers mission featured two identical, <br /> golf-cart-sized, <br /> solar-powered
              rovers: Spirit and Opportunity. <br /> Spirit landed at Gusev Crater on Jan. 4, 2004. <br /> Opportunity
              landed on
              <br /> the opposite side of Mars at Meridiani <br /> Planum on Jan. 24, 2004 PST (Jan. 25 EST). <br />{" "}
              Both rovers were managed <br /> for NASA by NASA's Jet Propulsion Laboratory in Pasadena, <br />{" "}
              California.
            </h5>
            <hr style={{ color: "white" }} />

            {opportunity1.map(oppInfo => (
              <Opportunity key={oppInfo._id} oppInfo={oppInfo} />
            ))}
          </div>
        </Col>
      </div>
    </>
  )
}
