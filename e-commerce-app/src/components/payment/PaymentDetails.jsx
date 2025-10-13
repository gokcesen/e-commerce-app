import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { SiGooglepay, SiApplepay, SiPaypal } from "react-icons/si";
import CreditCardForm from "../forms/CreditCardForm";



const PaymentDetails = () => {
    const paymentMethods = [
        {
          id: "credit-card",
          label: "Credit Card",
          icon: <FaCreditCard  size={28} className="text-gray-600" />,
        },
        {
          id: "paypal",
          label: "PayPal",
          icon: <SiPaypal size={28}  className="text-gray-600"/>,
        },
        {
          id: "apple-pay",
          label: "Apple Pay",
          icon: <SiApplepay  size={28} className="text-gray-600" />,
        },
        {
          id: "google-pay",
          label: "Google Pay",
          icon: <SiGooglepay  size={28}   className="text-gray-600"/> },
      ];

    const [selectedMethod, setSelectedMethod] = useState("credit-card");

    return(
        <>
            <div className="space-y-1">
                {paymentMethods.map((method) => (
                    <label
                    key={method.id}
                    className={`flex items-center justify-between gap-x-20 border rounded-lg p-4 cursor-pointer transition max-w-[600px]
                        ${
                        selectedMethod === method.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300 bg-white"
                        }`}
                    >
                    <div className="flex items-center space-x-4">
                        {method.icon}
                        <span className="font-medium text-gray-800">{method.label}</span>
                    </div>
                    <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={() => setSelectedMethod(method.id)}
                        className="w-4 h-4 accent-blue-600 bg-white"
                    />
                    </label>
                ))}
            </div>

            {selectedMethod === "credit-card" && (
                <div className="mt-8 border rounded max-w-[600px]">
                    <CreditCardForm />
                </div>
                )}

                {selectedMethod === "paypal" && (
                <div className="mt-4 p-4 border rounded max-w-[600px]">
                    <p>You will be redirected to PayPal to complete the payment.</p>
                </div>
                )}

                {selectedMethod === "apple-pay" && (
                <div className="mt-4 p-4 border rounded max-w-[600px]">
                    <p>Use Apple Pay on your device to pay securely.</p>
                </div>
                )}

                {selectedMethod === "google-pay" && (
                <div className="mt-4 p-4 border rounded max-w-[600px]">
                    <p>Use Google Pay to complete your purchase easily.</p>
                </div>
            )}
        </>
    );
}

export default PaymentDetails;
