import { Anchor, Burger, Header, Text, Drawer, Modal, Avatar, Group } from "@mantine/core"
import { useState } from "react";

const DrawerNav = () => {
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);

  return (
    <>
      <Header height={80} p="md" style={{backgroundColor:"#faeddf"}}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: "20px" }}>
          <Burger opened={opened} onClick={() => setOpened(true)} />
        </div>
      </Header>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Laser Incorporated"
        padding="xl"
        size="sm"
      >
        <Anchor href="./" underline={false} style={{ margin: "2px" }}>
          <Text color="black">Laser Marking</Text>
        </Anchor>
        <Anchor href="/" underline={false} style={{ margin: "2px" }}>
          <Text color="black">Laser Engraving</Text>
        </Anchor>
        <Anchor href="/" underline={false} style={{ margin: "2px" }}>
          <Text color="black">Laser Edging</Text>
        </Anchor>
      </Drawer>
    </>
  )
}

export default DrawerNav