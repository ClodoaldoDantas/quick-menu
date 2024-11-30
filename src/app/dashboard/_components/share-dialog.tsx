'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Share2Icon, SquareArrowOutUpRightIcon } from 'lucide-react'
import { CopyToClipboard } from './copy-to-clipboard'
import { QrCodeDisplay } from './qr-code-display'

export function ShareDialog({ establishmentId }: { establishmentId: string }) {
  const url = new URL(
    `/menu/${establishmentId}`,
    window.location.origin,
  ).toString()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Share2Icon className="size-6" />
          <span className="hidden sm:block">Compartilhar</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Compartilhe seu cardápio</DialogTitle>
          <DialogDescription>
            Compartilhe o link abaixo com seus clientes para que eles possam
            visualizar seu cardápio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <QrCodeDisplay value={url} />

          <Button asChild className="w-full" variant="outline">
            <a href={url} target="_blank" rel="noreferrer">
              <SquareArrowOutUpRightIcon className="size-6" />
              Acessar a página
            </a>
          </Button>

          <CopyToClipboard value={url} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
