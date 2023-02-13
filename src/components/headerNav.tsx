// @ts-nocheck
import { Anchor, Avatar, Button, Header, Menu, Modal, NativeSelect, PasswordInput, Text, TextInput } from "@mantine/core"
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { useState } from "react";

const HeaderNav = () => {
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('Student')
  const [user, setUser] = useState([])
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [statusError, setStatusError] = useState('')

  return (
    <>
      <Header height="80px" p="md" style={{backgroundColor:"#faeddf"}}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: "20px" }}>
          <Anchor href="/" underline={false}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Incorporated</Text>
          </Anchor>
          <Anchor href="/" underline={false} style={{ marginLeft: "auto" }}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Marking</Text>
          </Anchor>
          <Anchor href="/" underline={false}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Engraving</Text>
          </Anchor>
          <Anchor href="/" underline={false}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Laser Edging</Text>
          </Anchor>
          <Anchor href="https://nanyangadvertising.com" underline={false} style={{ marginLeft: "auto" }}>
            <Text color="black" style={{fontFamily: `Raleway, sans-serif`,}}>Main Website</Text>
          </Anchor>
        </div>
      </Header>

    </>
  )
}

export default HeaderNav