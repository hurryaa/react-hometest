import { useId, useMemo } from "react"
import { motion } from "framer-motion"
import DottedMap from "dotted-map"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

type MapPoint = {
  lat: number
  lng: number
  label?: string
}

type MapConnection = {
  start: MapPoint
  end: MapPoint
}

export interface WorldMapProps {
  dots?: MapConnection[]
  lineColor?: string
  showLabels?: boolean
  labelClassName?: string
  animationDuration?: number
  pulse?: boolean
}

const MAP_WIDTH = 800
const MAP_HEIGHT = 400
const LABEL_WIDTH = 140
const LABEL_HEIGHT = 32

const projectPoint = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * MAP_WIDTH
  const y = ((90 - lat) / 180) * MAP_HEIGHT

  return { x, y }
}

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const horizontalDistance = Math.abs(start.x - end.x)
  const verticalLift = Math.max(40, horizontalDistance * 0.25)

  const controlX = (start.x + end.x) / 2
  const controlY = Math.min(start.y, end.y) - verticalLift

  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`
}

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  showLabels = true,
  labelClassName,
  animationDuration = 1.8,
  pulse = true,
}: WorldMapProps) {
  const { theme } = useTheme()

  const map = useMemo(() => new DottedMap({ height: 200, grid: "diagonal" }), [])

  const svgBackground = useMemo(
    () =>
      map.getSVG({
        radius: 0.26,
        color: theme === "dark" ? "#f5f5f540" : "#0f172a30",
        shape: "circle",
        backgroundColor: theme === "dark" ? "#020617" : "#ffffff",
      }),
    [map, theme]
  )

  const labelClasses = cn(
    "rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-950/80 dark:text-slate-100 dark:ring-slate-700/60",
    labelClassName
  )

  const gradientBaseId = useId()
  const gradientId = useMemo(
    () => `world-map-gradient-${gradientBaseId.replace(/[:]/g, "")}`,
    [gradientBaseId]
  )

  return (
    <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl border border-border/40 bg-white dark:bg-slate-950">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgBackground)}`}
        alt="World map background"
        className="absolute inset-0 h-full w-full select-none object-cover"
        draggable={false}
      />

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="relative z-10 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="12%" stopColor={lineColor} stopOpacity="0.85" />
            <stop offset="88%" stopColor={lineColor} stopOpacity="0.85" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((connection, index) => {
          const start = projectPoint(connection.start.lat, connection.start.lng)
          const end = projectPoint(connection.end.lat, connection.end.lng)
          const path = createCurvedPath(start, end)
          const delay = index * 0.2

          const renderLabel = (point: MapPoint, key: string) => {
            if (!showLabels || !point.label) {
              return null
            }

            const x = clamp(point.x - LABEL_WIDTH / 2, 0, MAP_WIDTH - LABEL_WIDTH)
            const y = clamp(point.y - LABEL_HEIGHT - 12, 0, MAP_HEIGHT - LABEL_HEIGHT)

            return (
              <motion.g
                key={key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.2, duration: 0.4, ease: "easeOut" }}
              >
                <foreignObject x={x} y={y} width={LABEL_WIDTH} height={LABEL_HEIGHT}>
                  <div className="flex h-full items-center justify-center">
                    <span className={labelClasses}>{point.label}</span>
                  </div>
                </foreignObject>
              </motion.g>
            )
          }

          return (
            <g key={`${connection.start.lat}-${connection.end.lat}-${index}`} className="pointer-events-none select-none">
              <motion.path
                d={path}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: animationDuration, delay, ease: "easeInOut" }}
              />

              {[start, end].map((point, pointIndex) => (
                <g key={`${point.x}-${point.y}-${pointIndex}`}>
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r={3}
                    fill={lineColor}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: delay + pointIndex * 0.1 }}
                  />

                  {pulse && (
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r={6}
                      fill="none"
                      stroke={lineColor}
                      strokeWidth={1}
                      initial={{ scale: 0.6, opacity: 0.4 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatDelay: 1.4,
                        ease: "easeOut",
                        delay: delay + pointIndex * 0.2,
                      }}
                    />
                  )}
                </g>
              ))}

              {renderLabel({ ...connection.start, ...start }, `start-label-${index}`)}
              {renderLabel({ ...connection.end, ...end }, `end-label-${index}`)}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
