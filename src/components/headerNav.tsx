// @ts-nocheck
import { Anchor, Avatar, Button, Group, Header, Text} from "@mantine/core"
import Logo from '../images/Logo.png'
const HeaderNav = () => {

  return (
    <>
      <Header height="80px" p="md" style={{backgroundColor:"#faeddf"}}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: "20px" }}>
          <Anchor href="https://nanyangadvertising.com" underline={false}>
            <Group>        
              <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Nanyang Advertising</Text>
              <Avatar src={Logo}></Avatar>
            </Group>
          </Anchor>
          <Anchor href="#LaserMarking" underline={false} style={{ marginLeft: "auto" }}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Marking</Text>
          </Anchor>
          <Anchor href="#LaserEngraving" underline={false}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Engraving</Text>
          </Anchor>
          <Anchor href="#LaserEtching" underline={false}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Etching</Text>
          </Anchor>
          <Anchor href="https://nanyangadvertising.com/contactus" underline={false} style={{ marginLeft: "auto" }}>
                <Button color="green">
                Contact Us
    </Button>
          </Anchor>
        </div>
      </Header>

    </>
  )
}

export default HeaderNav