import { Card, ListGroup } from "react-bootstrap"

export default function Opportunity(props) {
  const { oppInfo } = props
  return (
    <>
      <Card
        className="border-0"
        style={{ width: "36rem", marginTop: 20, backgroundColor: "#9c6644", color: "wheat", fontFamily: "cursive" }}
      >
        <Card.Img variant="top" src={oppInfo.img_src} height={200} style={{ objectFit: "contain" }} />
        <Card.Body>
          <Card.Title>name {oppInfo.rover.name}</Card.Title>
          <Card.Text>
            status: {oppInfo.rover.status}
            <br />
            launch_date: {oppInfo.rover.launch_date}
            <br />
            landing_date: {oppInfo.rover.landing_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
