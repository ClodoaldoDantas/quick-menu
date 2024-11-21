import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'

export function QrCodeDisplay({ value }: { value: string }) {
  const qrCodeRef = useRef<HTMLDivElement>(null)

  function handleDownload() {
    const canvas = qrCodeRef.current?.querySelector('canvas')

    if (!canvas) {
      return
    }

    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')

    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'qrcode.png'

    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div ref={qrCodeRef} className="self-center">
        <QRCodeCanvas size={200} value={value} />
      </div>

      <Button onClick={handleDownload} variant="outline">
        <DownloadIcon className="size-6" />
        Baixar QR Code
      </Button>
    </div>
  )
}
