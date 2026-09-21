import { useState } from 'react'
import { useNavigate, useParams } from '@tanstack/react-router'
import { Download, Expand } from 'lucide-react'
import revisionImage from '#/assets/revision.png'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '#/components/ui/dialog'
import { cn } from '#/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import RequestChangesDialog from './RequestChangesDialog'
import SampleApprovedDialog from '../-components/SampleApprovedDialog'
import SampleImage from '../-components/SampleImage'

const revisionImages = {
  'revision-1': revisionImage,
  'revision-2': revisionImage,
} as const
type Revision = keyof typeof revisionImages

export default function SamplePreview() {
  const [activeTab, setActiveTab] = useState<Revision>('revision-2')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isChangesOpen, setIsChangesOpen] = useState(false)
  const [isApprovedOpen, setIsApprovedOpen] = useState(false)
  const [isRevisionSend, setIsRevisionSend] = useState(false)
  const navigate = useNavigate()
  const { orderId } = useParams({ strict: false })
  const activeImage = revisionImages[activeTab]
  const activeRevision = activeTab.replace('-', ' ')

  const downloadActiveImage = () => {
    const link = document.createElement('a')
    link.href = activeImage
    link.download = `sample-${activeTab}.png`
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <Card className="gap-0 rounded-2xl border-black/5 bg-white py-6 shadow-sm">
      <CardContent className="px-5 sm:px-6">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as Revision)}
          className="relative z-10 min-w-0 gap-7 font-atyp"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <TabsList className="h-12! rounded-2xl bg-[#F3F3F5] p-1">
              <TabsTrigger
                value="revision-1"
                className={cn(
                  'min-h-9 flex-none rounded-xl px-4 py-2 text-xs font-semibold',
                  activeTab === 'revision-1'
                    ? 'bg-white text-primary!'
                    : 'text-muted-foreground',
                )}
              >
                Revision 1
              </TabsTrigger>
              <TabsTrigger
                value="revision-2"
                className={cn(
                  'min-h-9 flex-none rounded-xl px-4 py-2 text-xs font-semibold',
                  activeTab === 'revision-2'
                    ? 'bg-white text-primary!'
                    : 'text-muted-foreground',
                )}
              >
                Revision 2{' '}
                <Badge className="h-5 bg-primary px-1.5 text-xs font-normal text-white">
                  Latest
                </Badge>
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                aria-label="Expand sample"
                variant="secondary"
                size="icon"
                className="size-8 rounded-xl bg-[#777777] text-white hover:bg-[#666666]"
                onClick={() => setIsPreviewOpen(true)}
              >
                <Expand />
              </Button>
              <Button
                aria-label="Download sample"
                variant="secondary"
                size="icon"
                className="size-8 rounded-xl bg-[#777777] text-white hover:bg-[#666666]"
                onClick={downloadActiveImage}
              >
                <Download />
              </Button>
            </div>
          </div>
          <TabsContent value="revision-1">
            <SampleImage revisionImage={revisionImages['revision-1']} />
          </TabsContent>
          <TabsContent value="revision-2">
            <SampleImage revisionImage={revisionImages['revision-2']} />
          </TabsContent>
        </Tabs>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button
            className="h-11 w-full rounded-xl sm:w-70"
            onClick={() => setIsApprovedOpen(true)}
          >
            Approve Sample
          </Button>
          <Button
            variant="outline"
            className="h-11 w-full rounded-xl border-primary bg-white font-normal text-primary hover:text-white hover:bg-primary hover:border-0 sm:w-50"
            onClick={() => setIsChangesOpen(true)}
          >
            Request Changes
          </Button>
        </div>
      </CardContent>
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-h-[95vh] max-w-[calc(100%-2rem)] overflow-auto rounded-2xl bg-black/95 p-3 sm:max-w-5xl sm:p-5">
          <DialogTitle className="sr-only">
            {activeRevision} sample preview
          </DialogTitle>
          <DialogDescription className="sr-only">
            Enlarged preview of the currently selected sample revision.
          </DialogDescription>
          <img
            src={activeImage}
            alt={`Enlarged ${activeRevision} sample preview`}
            className="mx-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
          />
        </DialogContent>
      </Dialog>
      <Dialog open={isChangesOpen} onOpenChange={setIsChangesOpen}>
        <RequestChangesDialog onSend={() => {
          setIsRevisionSend(true)
        }} />
      </Dialog>
      <Dialog open={isApprovedOpen} onOpenChange={setIsApprovedOpen}>
        <SampleApprovedDialog
          title='Sample Approved Successfully'
          description='Your sample has been approved successfully. The order has moved to the Production stage.'
          onBackToOrderDetails={() => {
            setIsApprovedOpen(false)
            if (orderId)
              navigate({
                to: '/active-orders/$orderId/order-details',
                params: { orderId },
              })
          }}
        />
      </Dialog>
      <Dialog open={isRevisionSend} onOpenChange={setIsRevisionSend}>
        <SampleApprovedDialog
          title='Revision Request Sent'
          description='Your requested changes have been sent successfully. The printer will upload a new revision and notify you once it is ready.'
          onBackToOrderDetails={() => {
            setIsRevisionSend(false)
            if (orderId)
              navigate({
                to: '/active-orders/$orderId/order-details',
                params: { orderId },
              })
          }}
        />
      </Dialog>
    </Card>
  )
}
