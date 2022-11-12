import Immutable from "immutable"
import { useContext } from "react"
import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Home from "../components/Home"

import Styles from "../style/MyStyle.module.css"

import NasaContext from "../utils/NasaContext"

export default function HomePage() {
  const { rovers } = useContext(NasaContext)

  let list1 = Immutable.List(rovers)

  let list2 = list1.flatMap(x => x.latest_photos)
  const rovers_photos = list2.splice(3, 560)
  if (!rovers_photos) return <h1>Loading.....</h1>

  return (
    <>
      <div className={Styles.bgImg}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            flexDirection: "column",
          }}
        >
          <h5 style={{ marginTop: 200 }}>
            ​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is
            also a dynamic planet with seasons,
            <br /> polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.
          </h5>
          <h6 style={{ marginBottom: 100 }}>
            Mars is one of the most explored bodies in our solar system,
            <br /> and it's the only planet where we've sent rovers to roam the alien landscape.
          </h6>

          <h6>Here some rovers to check it out</h6>
          <h3>Rovers:</h3>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Link to="/curiosity">
            <button className={Styles.nextButton}>
              <span>curiosity</span>
            </button>
          </Link>

          <Link to="/spirit">
            <button className={Styles.nextButton}>
              <span>spirit</span>
            </button>
          </Link>

          <Link to="/opportunity">
            <button className={Styles.nextButton}>
              <span>opportunity</span>
            </button>
          </Link>
        </div>

        <div style={{ textAlign: "center", marginTop: 100, color: "white" }}>
          <div style={{ border: "2px solid white", backgroundColor: "#001219" }}>
            <h3>From the Latest Mars Photos takes from each rovers:</h3>
          </div>
          <Row md={3} className="g-0">
            {rovers_photos.map(rover_photo => (
              <Home key={rover_photo._id} rover_photo={rover_photo} />
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}
