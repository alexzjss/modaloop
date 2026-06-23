const EARTH_RADIUS_KM = 6371
const toRadians = (degrees: number) => (degrees * Math.PI) / 180

export function distanceInKm(
  from: { latitude: number; longitude: number },
  to: { latitude: number; longitude: number },
) {
  const deltaLatitude = toRadians(to.latitude - from.latitude)
  const deltaLongitude = toRadians(to.longitude - from.longitude)
  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(toRadians(from.latitude)) *
      Math.cos(toRadians(to.latitude)) *
      Math.sin(deltaLongitude / 2) ** 2

  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export function formatDistance(distance: number) {
  return distance < 1 ? `${Math.round(distance * 1000)} m` : `${distance.toFixed(1).replace('.', ',')} km`
}
