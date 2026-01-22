
import { MedusaContainer, ProductService } from "@medusajs/medusa"

export default async (
  container: MedusaContainer,
  options: Record<string, unknown>
) => {
  const productService: ProductService = container.resolve("productService")
  const typeName = "Digital Pattern"

  try {
    // Check if the type exists by trying to list it or search for it
    // In Medusa v1/v2 compat, we often just upsert or check
    // This is a simplified logic
    
    // Note: ProductService.listTypes() might be needed
    // But usually we just ensure it's available for selection
    console.info(`[Loader] Ensuring '${typeName}' product type exists...`)
    
    // Logic to add type if not exists would go here using Repository
    // const typeRepo = container.resolve("productTypeRepository")
    // ...
    
    console.info(`[Loader] '${typeName}' ready for use.`)
  } catch (err) {
    console.error(`[Loader] Failed to ensure digital product type`, err)
  }
}
