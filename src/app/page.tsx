'use client'

import { Button, Card, CardBody, CardFooter, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Copy, Download } from 'lucide-react'
import { z } from 'zod'

const validUrl = z.string().url({ message: 'not a valid url' })

export default function Home() {
  const [value, setValue] = useState('')
  const [copied, setCopied] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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

  const copyQrCode = () => {
    const canvas = document.querySelector('#qrcode') as HTMLCanvasElement
    if (!canvas) throw new Error('<canvas> not found in the DOM')

    canvas.toBlob((blob) => {
      if (!blob) return
      navigator.clipboard
        .write([
          new ClipboardItem({
            [blob?.type]: blob,
          }),
        ])
        .then(() => {
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 5000)
        })
    }, 'image/png')
  }

  useEffect(() => {
    const parsedValue = validUrl.safeParse(value)
    if (value && !parsedValue.success) {
      setErrorMessage(parsedValue.error.formErrors.formErrors[0])
    } else {
      setErrorMessage('')
    }
  }, [value])

  return (
    <main className="container max-w-[1024px] pt-8">
      <div className="flex flex-col gap-8">
        <div className="flex-[0.5]">
          <div className="flex flex-col gap-2">
            <Input
              id="url"
              placeholder="https://example.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label={<span className="font-semibold">Website URL</span>}
              labelPlacement="outside"
              isInvalid={!!errorMessage}
              errorMessage={errorMessage}
              size="lg"
            />
          </div>
        </div>

        <Card className="flex-[0.5]">
          <CardBody className="flex flex-col items-center space-y-4">
            {value && !errorMessage ? (
              <QRCodeCanvas
                value="https://danjvarela.com"
                id="qrcode"
                size={256}
                includeMargin
                className="w-full"
              />
            ) : (
              <div className="rounded-lg aspect-square w-[128px] bg-default-100" />
            )}
          </CardBody>
          <CardFooter className="flex flex-col gap-2 mb-2">
            {(!value || errorMessage) && (
              <p className="text-primary">
                Type a valid url to generate a QR Code
              </p>
            )}
            <Button
              className="w-full max-w-xs"
              startContent={<Copy className="w-4 h-4" />}
              isDisabled={!value || !!errorMessage}
              onClick={copyQrCode}
            >
              {copied ? 'Copied to clipboard' : 'Copy'}
            </Button>
            <Button
              className="w-full max-w-xs"
              startContent={<Download className="w-4" />}
              onClick={downloadQrCode}
              isDisabled={!value || !!errorMessage}
            >
              Download
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
