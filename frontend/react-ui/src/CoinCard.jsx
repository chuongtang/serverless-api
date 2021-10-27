
import { Card, ListGroup, ListGroupItem, Row, Col, Stack } from 'react-bootstrap'

const CoinCard = (coin, coin.quote) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{coin.name}</Card.Title>
        <Card.Text>
          {coin.name} is currently ranked #{coin.cmc_rank} on the CoinMarkteCap. With total {coin.quote.volume_24h} volume of transaction in the last 24hrs. <br></br> At current update, there are total of {coin.circulating_supply} units in circulating supply.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Symbol{coin.symbol}</ListGroupItem>
        <ListGroupItem>Current Price in USD: {coin.quote.USD.price}</ListGroupItem>
        <ListGroupItem>Market ranking: {coin.cmc_rank}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
};
export default CoinCard;