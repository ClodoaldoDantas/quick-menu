import { QRCodeSVG } from 'qrcode.react'

export function QrCodeDisplay({ value }: { value: string }) {
  return (
    <div className="w-full flex justify-center">
      <QRCodeSVG size={200} value={value} />
    </div>
  )
}
