import React from 'react'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { Logo } from '@/components/logo'
import { BuyMeCoffee } from '@/components/buy-me-coffee'

export function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Logo className="text-2xl mr-2" />
        <h1 className="md:text-xl font-bold">QR Code Generator</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="hidden md:block">
          <BuyMeCoffee />
        </div>
      </NavbarContent>
    </Navbar>
  )
}
