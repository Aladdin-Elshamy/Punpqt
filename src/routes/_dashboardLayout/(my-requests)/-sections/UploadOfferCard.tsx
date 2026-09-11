import OrderProtectionList from "../-components/OrderProtectionList"

export const uploadOffer = {
  vendor: 'Elite Printing Co.',
  initials: 'EP',
  product: '1,000 pcs A4 Brochures',
  printing: 180,
  delivery: 80,
}

export default function UploadOfferCard() {
  return (
    <aside className="h-fit rounded-3xl border bg-card relative z-10 p-4 sm:p-8">
      <h2 className="text-xl font-semibold">Selected Offer</h2>
      <div className="my-6 flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
          {uploadOffer.initials}
        </span>
        <div>
          <p className="font-semibold">{uploadOffer.vendor}</p>
          <p className="text-sm text-muted-foreground">{uploadOffer.product}</p>
        </div>
      </div>
      <h3 className="mb-4 border-t pt-4 font-semibold">Cost Breakdown</h3>
      <dl className="space-y-4 text-sm">
        <div className="flex justify-between">
          <dt className="font-semibold text-muted-foreground">Printing Cost</dt>
          <dd className="font-semibold">EGP {uploadOffer.printing}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-semibold text-muted-foreground">Delivery</dt>
          <dd className="font-semibold">EGP {uploadOffer.delivery}</dd>
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-semibold">
          <dt>Total</dt>
          <dd className="text-primary font-medium">
            EGP {uploadOffer.printing + uploadOffer.delivery}
          </dd>
        </div>
      </dl>
      <OrderProtectionList />
    </aside>
  )
}
