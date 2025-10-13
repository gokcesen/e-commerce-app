import { useState } from "react";

const PaymentDetails = () => {
    const paymentMethods = [
        {
          id: "credit-card",
          label: "Credit Card",
          logo: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
        },
        {
          id: "paypal",
          label: "PayPal",
          logo: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
        },
        {
          id: "apple-pay",
          label: "Apple Pay",
          logo: "https://cdn-icons-png.flaticon.com/512/179/179309.png",
        },
        {
          id: "google-pay",
          label: "Google Pay",
          logo: "https://images.seeklogo.com/logo-png/32/2/google-pay-logo-png_seeklogo-324563.png"      },
      ];

    const [selectedMethod, setSelectedMethod] = useState("credit-card");

    return(
        <>
            <div className="space-y-4">
                {paymentMethods.map((method) => (
                    <label
                    key={method.id}
                    className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition
                        ${
                        selectedMethod === method.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300 bg-white"
                        }`}
                    >
                    <div className="flex items-center space-x-4">
                        <img src={method.logo} alt={method.label} className="w-10 h-10" />
                        <span className="font-medium text-gray-800">{method.label}</span>
                    </div>
                    <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={() => setSelectedMethod(method.id)}
                        className="w-4 h-4 accent-blue-600 bg-white"
                        //"h-5 w-5 accent-blue-600 appearance-none rounded-full border-2 border-gray-400 checked:border-blue-600 checked:bg-white transition"
                    />
                    </label>
                ))}
            </div>
        </>
    );
}

export default PaymentDetails;
