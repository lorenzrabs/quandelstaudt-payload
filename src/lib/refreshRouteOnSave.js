'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export const RefreshRouteOnSave = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => {
        router.refresh()
        console.log('Refreshed!')
      }}
      serverURL={process.env.NEXT_PUBLIC_BASE_URL || ''}
    />
  )
}
