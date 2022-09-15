import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import TableCompany from "./tables/TableCompany"

const Home = () => {
  return (
    <div>
      <Card>
          <TableCompany />
      </Card>
    </div>
  )
}

export default Home
