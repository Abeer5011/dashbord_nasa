import { Card, Col } from "react-bootstrap"
import styles from "../style/MyStyle.module.css"

export default function Home(props) {
  const { rover_photo } = props

  return (
    <>
      <Col style={{ width: 300 }}>
        <div className={styles.card}>
          <img alt="..." src={rover_photo.img_src} className={styles.card_image} />
          <h3 className={styles.card_title}>{rover_photo.rover.name}</h3>
        </div>
      </Col>
    </>
  )
}
