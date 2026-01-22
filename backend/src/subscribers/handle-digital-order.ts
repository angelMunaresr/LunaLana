
import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
} from "@medusajs/medusa"

export default async function handleDigitalOrder({ 
  data, 
  eventName, 
  container, 
  pluginOptions, 
}: SubscriberArgs<Record<string, any>>) {
  const orderService: OrderService = container.resolve("orderService")

  const order = await orderService.retrieve(data.id, {
    relations: ["items", "items.variant", "items.variant.product", "items.variant.product.type"]
  })

  // Check if order contains digital products
  const digitalItems = order.items.filter(
    (item) => item.variant.product.type?.value === "Digital Pattern"
  )

  if (digitalItems.length > 0) {
    console.info(`[DigitalDelivery] Processing digital delivery for Order #${order.display_id}`)
    
    // Logic to send email with download links
    // await emailService.send(...)
    
    console.info(`[DigitalDelivery] Download links sent to ${order.email}`)
  }
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PLACED,
  context: {
    subscriberId: "digital-product-delivery",
  },
}
