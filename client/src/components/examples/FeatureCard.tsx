import FeatureCard from '../FeatureCard'
import { Smartphone } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-8 bg-background">
      <FeatureCard
        icon={Smartphone}
        title="Mobile Apps"
        description="Track your sleep patterns with our intuitive iOS and Android applications designed for ease of use."
      />
    </div>
  )
}
