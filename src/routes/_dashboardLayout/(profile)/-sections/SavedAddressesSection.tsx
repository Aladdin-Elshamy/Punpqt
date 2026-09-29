import { useState } from 'react'
import AddressCard from '../-components/AddressCard'
import AddAddressCard from '../-components/AddAddressCard'
import AddressFormDialog from '../-components/AddressFormDialog'
import { initialAddresses, type Address } from '../-data/profileData'

export default function SavedAddressesSection() {
  const [addresses, setAddresses] = useState<Array<Address>>(initialAddresses)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState<Address | null>(null)

  function handleAddNew() {
    setEditingAddress(null)
    setIsDialogOpen(true)
  }

  function handleEdit(address: Address) {
    setEditingAddress(address)
    setIsDialogOpen(true)
  }

  function handleDelete(id: string) {
    setAddresses((prev) => prev.filter((item) => item.id !== id))
  }

  function handleSave(savedAddress: Address) {
    setAddresses((prev) => {
      const exists = prev.some((item) => item.id === savedAddress.id)
      if (exists) {
        return prev.map((item) =>
          item.id === savedAddress.id ? savedAddress : item,
        )
      }
      return [...prev, savedAddress]
    })
  }

  return (
    <section aria-label="Saved Addresses" className="mt-2 bg-white p-6 sm:p-7 rounded-3xl">
      <h2 className="text-xl font-semibold tracking-tight text-foreground mb-7.5">
        Saved Addresses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        <AddAddressCard onClick={handleAddNew} />
      </div>

      <AddressFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={editingAddress}
        onSave={handleSave}
      />
    </section>
  )
}
