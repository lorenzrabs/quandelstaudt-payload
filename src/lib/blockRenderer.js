'use client'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Quote from '@/components/Quote' // Adjust the path as necessary
import RichText from '@/components/RichText'

// Error fallback component
const ErrorFallback = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
)

const BlockRenderer = ({ layout }) => {
  const renderBlock = (block) => {
    switch (block.blockType) {
      case 'Quote':
        return <Quote key={block.id} data={block} />
      case 'RichText':
        return <RichText key={block.id} data={block} />
      default:
        return null
    }
  }

  return (
    <>
      {layout.map((block) => (
        <ErrorBoundary key={block.id} FallbackComponent={ErrorFallback}>
          {renderBlock(block)}
        </ErrorBoundary>
      ))}
    </>
  )
}

export default BlockRenderer
