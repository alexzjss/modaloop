import type { CollectionPoint } from '../data/collectionPoints'

export const mapEmbedUrl = (point: CollectionPoint) =>
  `https://www.google.com/maps?q=${encodeURIComponent(point.address)}&z=16&output=embed`

export const mapsRouteUrl = (point: CollectionPoint) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(point.address)}`
