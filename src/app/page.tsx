'use client'

import { Button } from '@nextui-org/react'
import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function Home() {
  const downloadQrCode = () => {
    const canvas = document.querySelector('#qrcode') as HTMLCanvasElement
    if (!canvas) throw new Error('<canvas> not found in the DOM')

    const pngUrl = canvas.toDataURL('image/png')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'QR code.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-2">
      <div className="p-2 border-2">
        <QRCodeCanvas
          value="https://danjvarela.com"
          includeMargin
          id="qrcode"
        />
      </div>
      <Button onClick={downloadQrCode}>Download</Button>
    </main>
  )
}
