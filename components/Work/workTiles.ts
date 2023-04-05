export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/demo0.png',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built a',
    title: 'Language Translation API',
    image: {
      src: '/static/images/demo1.png',
      width: 630,
      height: 600,
    },
  },
  {
    description: `A fast.ai based`,
    title: 'Image Classifier',
    image: {
      src: '/static/images/demo5.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `A Real-time`,
    title: 'Stock Ticker in cmd',
    image: {
      src: '/static/images/demo6.png',
      width: 600,
      height: 717,
    },
  },
]
