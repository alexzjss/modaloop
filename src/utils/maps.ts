import type { CollectionPoint } from '../data/collectionPoints'

export const mapEmbedUrl = (point: CollectionPoint) =>
  `https://www.google.com/maps?q=${point.latitude},${point.longitude}&z=15&output=embed`

export const mapsRouteUrl = (point: CollectionPoint) =>
  `https://www.google.com/maps/dir/?api=1&destination=${point.latitude},${point.longitude}`
