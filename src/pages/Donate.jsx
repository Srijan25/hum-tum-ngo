// pages/DonatePage.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, RefreshCcw } from "lucide-react";

export default function DonatePage() {
  const [paid, setPaid] = useState(false);
  const [amount, setAmount] = useState("100");

  // Load saved state
  useEffect(() => {
    const savedPaid = localStorage.getItem("donationPaid");
    if (savedPaid === "true") setPaid(true);
  }, []);

  const handlePaid = () => {
    setPaid(true);
    localStorage.setItem("donationPaid", "true");
  };

  // Reset donation for "Donate Again"
  const handleDonateAgain = () => {
    setPaid(false);
    setAmount("100");
    localStorage.removeItem("donationPaid");
  };

  // Predefined donation amounts
  const amounts = ["100", "200", "500", "1000"];

  // Generate new QR with selected amount
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pn=HumTumEkSevaSamiti&am=${amount}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 
      bg-gradient-to-b from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-950">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white/30 dark:bg-white/10 backdrop-blur-xl 
        rounded-2xl shadow-xl p-8 border border-white/20"
      >
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">
          Support Our Mission 💙
        </h1>

        <p className="text-center text-slate-700 dark:text-slate-300 mb-6">
          Select an amount to donate and scan the QR below.
        </p>

        {/* Amount Buttons */}
        {!paid && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`px-4 py-2 rounded-lg border transition font-semibold
                  ${
                    amount === amt
                      ? "bg-blue-600 text-white border-blue-700 shadow"
                      : "bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-slate-700 text-slate-800 dark:text-slate-300"
                  }
                `}
              >
                ₹{amt}
              </button>
            ))}
          </div>
        )}

        {/* Custom Amount */}
        {!paid && (
          <div className="text-center mb-6">
            <p className="text-slate-700 dark:text-slate-300 mb-2">Or enter custom amount:</p>
            <input
              type="number"
              min="1"
              className="px-4 py-2 rounded-lg border bg-white/40 dark:bg-slate-800/40 
              border-white/30 dark:border-slate-700 text-slate-900 dark:text-white w-40 text-center"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        )}

        {/* QR Code */}
        {!paid && (
          <>
            <div className="flex items-center justify-center mb-6">
              <img
                src={qrURL}
                alt="QR Code"
                className="rounded-xl shadow-lg border-2 border-white/40"
              />
            </div>

            <p className="text-center text-slate-900 dark:text-slate-200 mb-4">
              Scan & donate using any UPI app.
            </p>

            <button
              onClick={handlePaid}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white 
              font-semibold transition shadow-lg"
            >
              I Have Paid
            </button>
          </>
        )}

        {/* Thank You */}
        {paid && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-green-500/20 border border-green-500/40 rounded-xl p-5 text-center"
          >
            <div className="flex justify-center mb-2">
              <CheckCircle className="text-green-500" size={40} />
            </div>

            <h2 className="text-xl font-bold text-green-700 dark:text-green-300">
              Thank You for Your Support! 💚
            </h2>

            <p className="mt-1 text-slate-700 dark:text-slate-300">
              Your contribution helps strengthen our mission at 
              <span className="font-semibold"> Hum Tum Ek Seva Samiti</span>.
            </p>

            {/* Donate Again Button */}
            <button
              onClick={handleDonateAgain}
              className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl 
              bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg"
            >
              <RefreshCcw size={20} /> Donate Again
            </button>
          </motion.div>
        )}
      </motion.div>

      <p className="text-xs mt-6 text-slate-700 dark:text-slate-400">
        Every donation, big or small, makes a difference. 🌱
      </p>
    </div>
  );
}
