import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: "4q0hc30r",
  dataset: "production",
  apiVersion: "v2025-01-07",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
