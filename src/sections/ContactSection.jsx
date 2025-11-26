// pages/ContactPage.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center 
      bg-gradient-to-b from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-950">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl 
        border border-white/20 rounded-3xl p-10 m-32"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-2">
          Contact Us
        </h1>
        <p className="text-center text-slate-700 dark:text-slate-300 mb-10">
          We’re here to help! Reach out to Hum Tum Ek Seva Samiti.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 bg-white/20 dark:bg-white/5 backdrop-blur-md 
              rounded-xl p-5 shadow">
              <Phone className="text-blue-600 dark:text-blue-400" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Phone</h3>
                <p className="text-slate-700 dark:text-slate-300">7489581850</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/20 dark:bg-white/5 backdrop-blur-md 
              rounded-xl p-5 shadow">
              <Mail className="text-blue-600 dark:text-blue-400" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Email</h3>
                <p className="text-slate-700 dark:text-slate-300">srijanksah02@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/20 dark:bg-white/5 backdrop-blur-md 
              rounded-xl p-5 shadow">
              <MapPin className="text-blue-600 dark:text-blue-400" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Address</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Hum Tum Ek Seva Samiti, Katni, Madhya Pradesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <label className="text-slate-800 dark:text-white font-semibold">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl 
                border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none
                text-slate-900 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="text-slate-800 dark:text-white font-semibold">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl 
                border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none
                text-slate-900 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="text-slate-800 dark:text-white font-semibold">Your Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl 
                border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none
                text-slate-900 dark:text-white"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 mt-2 rounded-xl 
            bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>

      {/* Optional Map - You can remove if not needed */}
      <div className="w-full max-w-5xl mt-10">
        <iframe
          className="w-full h-64 rounded-2xl shadow-xl border border-white/20"
          src="https://maps.google.com/maps?q=Katni&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

    </div>
  );
}
