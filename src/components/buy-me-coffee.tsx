import Link from 'next/link'
import { SiBuymeacoffee } from '@icons-pack/react-simple-icons'
import { Button } from '@nextui-org/react'

export function BuyMeCoffee() {
  return (
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
  )
}
