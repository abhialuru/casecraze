import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
 import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function constructMetadata({
  title = 'CaseCraze - Custom high-quality phone cases',
  description = 'create custom high-quality phone cases in seconds.',
  icons = '/fevicon.ico',
  image = '/thumbnail.png'
}:{title?: string, description?: string, image?:string, icons?:string}={}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images : [{url : image}]
    },
    icons,
  } 
}