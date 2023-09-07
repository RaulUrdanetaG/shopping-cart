export interface Root {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  metacritic: number
  parent_platforms: ParentPlatform[]
  genres: Genre[]
  esrb_rating: EsrbRating
  short_screenshots: ShortScreenshot[]
}

export interface ParentPlatform {
  platform: Platform
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface EsrbRating {
  id: number
  name: string
  slug: string
}

export interface ShortScreenshot {
  id: number
  image: string
}


