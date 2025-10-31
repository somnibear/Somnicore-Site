import ProductCard from '../ProductCard'
import appImage from '@assets/generated_images/Sleep_tracker_app_interface_ad2f3cd3.png'

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProductCard
        image={appImage}
        title="Sleep Tracker App"
        description="Our mobile application provides comprehensive sleep analysis with real-time tracking and personalized insights."
        features={[
          "Real-time sleep cycle monitoring",
          "Personalized sleep recommendations",
          "Integration with health platforms"
        ]}
      />
    </div>
  )
}
