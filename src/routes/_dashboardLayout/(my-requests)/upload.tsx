import { createFileRoute } from '@tanstack/react-router'
import Header from './-sections/Header'
import UploadFilesForm from './-sections/UploadFilesForm'
import UploadOfferCard from './-sections/UploadOfferCard'

export const Route = createFileRoute('/_dashboardLayout/(my-requests)/upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
      <Header
        title="Upload Files"
        description="Please upload all the necessary files for your printing request."
      />
      <div className="grid items-start gap-6 font-atyp lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <UploadFilesForm />
        <UploadOfferCard />
      </div>
    </div>
  )
}
