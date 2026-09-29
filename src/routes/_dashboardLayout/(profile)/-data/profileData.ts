export type UserProfile = {
  name: string
  email: string
  phone: string
  initials: string
}

export type Address = {
  id: string
  label: 'Home' | 'Work' | 'Other'
  street: string
  country: string
  city: string
  area: string
  building: string
  phone: string
  instructions?: string
}

export const initialProfile: UserProfile = {
  name: 'Ahmed Hassan',
  email: 'ahmed.mohamed@email.com',
  phone: '09395787448',
  initials: 'AH',
}

export const initialAddresses: Array<Address> = [
  {
    id: 'addr-1',
    label: 'Home',
    street: '45 Business Avenue',
    country: 'Egypt',
    city: 'Alexandria',
    area: 'Smouha',
    building: 'Building 12',
    phone: '09395787448',
  },
  {
    id: 'addr-2',
    label: 'Work',
    street: '45 Business Avenue',
    country: 'Egypt',
    city: 'Alexandria',
    area: 'Smouha',
    building: 'Building 12',
    phone: '09395787448',
  },
]
