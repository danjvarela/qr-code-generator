import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'
import { SiBuymeacoffee } from '@icons-pack/react-simple-icons'
import { Logo } from '@/components/logo'

export function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Logo className="text-2xl mr-2" />
        <h1 className="text-xl font-bold">QR Code Generator</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="https://www.buymeacoffee.com/danwtfizdiz"
          target="_blank"
          className="font-cookie text-xl"
          color="secondary"
          startContent={<SiBuymeacoffee />}
        >
          Buy me a coffee
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
