"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export function PayPalCheckout({ amount }: { amount: string }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // In a real app, you would fetch the Client ID from your backend/env
  const initialOptions = {
    clientId: "test", // "test" uses the sandbox
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="w-full z-0">
      <PayPalScriptProvider options={initialOptions}>
        {success ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
                <h3 className="font-serif text-xl mb-2">¡Pago Exitoso!</h3>
                <p className="text-sm">Tu patrón está en camino a tu email.</p>
            </div>
        ) : (
            <PayPalButtons
                style={{ 
                    layout: "vertical",
                    color: "black",
                    shape: "rect",
                    label: "pay"
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "USD",
                                    value: amount,
                                },
                                description: "Patrón CrochetHub",
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                    if (actions.order) {
                        const details = await actions.order.capture();
                        console.log("Pago completado por " + details.payer?.name?.given_name);
                        setSuccess(true);
                    }
                }}
                onError={(err) => {
                    console.error(err);
                    setError("Hubo un error con el pago. Inténtalo de nuevo.");
                }}
            />
        )}
        {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}
      </PayPalScriptProvider>
    </div>
  );
}
