'use client'

import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: React.PropsWithChildren<{}>) {
  return <NextUIProvider>{children}</NextUIProvider>
}
