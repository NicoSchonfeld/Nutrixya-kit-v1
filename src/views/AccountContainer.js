import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import ProfilePage from './pages/profile/profileUser/ProfilePage'

const AccountContainer = () => {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader> */}
      <CardBody>
        <ProfilePage />
      </CardBody>
    </Card>
  )
}

export default AccountContainer
