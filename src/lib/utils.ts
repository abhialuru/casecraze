import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
 import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function constructMetadata({
  title = 'CaseCraze - Custom high-quality phone cases',
  description = 'create custom high-quality phone cases in seconds.',
  icons = '/fevicon.ico'
}:{title?: string, description?: string, icons?:string}={}): Metadata {
  return {
    title,
    description,
    icons
  } 
}