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
import { Share2Icon } from 'lucide-react'
import { CopyToClipboard } from './copy-to-clipboard'

export function ShareDialog({ establishmentId }: { establishmentId: string }) {
  const url = new URL(`/menu/${establishmentId}`, window.location.origin)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Share2Icon className="size-5" />
          Compartilhar
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

        <div>
          <CopyToClipboard value={url.toString()} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
