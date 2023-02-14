import { Anchor, Burger, Header, Text, Drawer, Modal, Avatar, Group, Button } from "@mantine/core"
import { useState } from "react";
import Logo from '../images/Logo.png'

const DrawerNav = () => {
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);

  return (
    <>
      <Header height={80} p="md" style={{ backgroundColor: "#faeddf" }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: "20px" }}>
          <Burger opened={opened} onClick={() => setOpened(true)} />
          <Anchor style={{ marginLeft: "auto" }} href="https://nanyangadvertising.com" underline={false}>
            <Group style={{ marginLeft: "auto" }}>
              <Text color="black" style={{ fontFamily: `Raleway, sans-serif` }}>Nanyang Advertising</Text>
              <Avatar src={Logo}></Avatar>
            </Group>
          </Anchor>
        </div>
      </Header>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Nanyang Advertising"
        padding="xl"
        size="sm"
      >
        <Anchor href="#LaserMarking" underline={false} style={{ margin: "2px" }}>
          <Text style={{ fontFamily: `Raleway, sans-serif` }} color="black">Laser Marking</Text>
        </Anchor>
        <Anchor href="#LaserEngraving" underline={false} style={{ margin: "2px" }}>
          <Text style={{ fontFamily: `Raleway, sans-serif` }} color="black">Laser Engraving</Text>
        </Anchor>
        <Anchor href="#LaserEtching" underline={false} style={{ margin: "2px" }}>
          <Text style={{ fontFamily: `Raleway, sans-serif` }} color="black">Laser Etching</Text>
        </Anchor>
        <Anchor href="https://nanyangadvertising.com/contactus" underline={false} style={{ margin: "2px" }}>
          <Text style={{ fontFamily: `Raleway, sans-serif` }} color="black">Contact Us</Text>
        </Anchor>
      </Drawer>
    </>
  )
}

export default DrawerNav