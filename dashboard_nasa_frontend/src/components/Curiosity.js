import { Card } from "react-bootstrap"

export default function Curiosity(props) {
  const { curInfo } = props
  return (
    <>
      <Card
        className="border-0"
        style={{ width: "36rem", marginTop: 20, backgroundColor: "#9c6644", color: "wheat", fontFamily: "cursive" }}
      >
        <Card.Img variant="top" src={curInfo.img_src} height={200} style={{ objectFit: "contain" }} />
        <Card.Body>
          <Card.Title>name: {curInfo.rover.name}</Card.Title>
          <Card.Text>
            status: {curInfo.rover.status}
            <br />
            launch_date: {curInfo.rover.launch_date}
            <br />
            landing_date: {curInfo.rover.landing_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
