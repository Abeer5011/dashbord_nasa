import { Card, ListGroup } from "react-bootstrap"

export default function Spirit(props) {
  const { spiInfo } = props
  return (
    <>
      <Card
        className="border-0"
        style={{ width: "36rem", marginTop: 20, backgroundColor: "#9c6644", color: "wheat", fontFamily: "cursive" }}
      >
        <Card.Img variant="top" src={spiInfo.img_src} height={200} style={{ objectFit: "contain" }} />
        <Card.Body>
          <Card.Title>name: {spiInfo.rover.name}</Card.Title>
          <Card.Text>
            {" "}
            status: {spiInfo.rover.status}
            <br />
            launch_date: {spiInfo.rover.launch_date}
            <br />
            landing_date: {spiInfo.rover.landing_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
