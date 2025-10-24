import { WorldMap } from '@/components/ui/map'

const mapData = {
  dots: [
    {
      start: {
        lat: 39.9042,
        lng: 116.4074,
        label: "北京"
      },
      end: {
        lat: 31.2304,
        lng: 121.4737,
        label: "上海"
      },
    },
    {
      start: {
        lat: 39.9042,
        lng: 116.4074,
        label: "北京"
      },
      end: {
        lat: 22.3193,
        lng: 114.1694,
        label: "香港"
      },
    },
    {
      start: {
        lat: 31.2304,
        lng: 121.4737,
        label: "上海"
      },
      end: {
        lat: 1.3521,
        lng: 103.8198,
        label: "新加坡"
      },
    },
    {
      start: {
        lat: 39.9042,
        lng: 116.4074,
        label: "北京"
      },
      end: {
        lat: 37.7749,
        lng: -122.4194,
        label: "旧金山"
      },
    },
    {
      start: {
        lat: 31.2304,
        lng: 121.4737,
        label: "上海"
      },
      end: {
        lat: 35.6762,
        lng: 139.6503,
        label: "东京"
      },
    },
    {
      start: {
        lat: 22.3193,
        lng: 114.1694,
        label: "香港"
      },
      end: {
        lat: 51.5074,
        lng: -0.1278,
        label: "伦敦"
      },
    },
  ]
}

export function GlobalMap() {
  return (
    <section id="global-network" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="center grid-header">
          <h2 className="h2 reveal">全球服务网络</h2>
          <p className="p reveal grid-subtitle">
            覆盖全球主要城市，为您提供稳定、高速的AI服务体验
          </p>
        </div>
        <div className="reveal mt-8">
          <WorldMap
            dots={mapData.dots}
            lineColor="#7c3aed"
            showLabels={true}
            animationDuration={2}
            loop={true}
          />
        </div>
      </div>
    </section>
  )
}
