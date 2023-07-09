

import TripSearch from './components/TripSearch'
import QuickSearch from './components/QuickSearch'
import RecommendedTrips from './components/RecommededTrips'
export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  )
}
