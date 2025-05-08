"use client"

import React from "react";
import toast from "react-hot-toast";
import {
  Calendar,
  X,
  User,
  Mail,
  Building2,
  Phone,
  Clock,
  MessageSquare,
} from "lucide-react"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  formData: {
    name: string
    email: string
    company: string
    phone: string
    date: string
    time: string
    message: string
  }
  formErrors: Record<string, string>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmitSuccess?: () => void // Optional callback on successful submission
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  formData,
  formErrors,
  onChange,
  onSubmitSuccess,
}) => {
  if (!isOpen) return null

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      fullName: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      preferredDate: new Date(formData.date).toISOString(),
      preferredTime: formData.time,
      message: formData.message,
    }

    console.log("Sending payload:", payload)

    try {
      const response = await fetch("https://tortuga7-backend.onrender.com/consultants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        const errorText = await response.text()
        console.error("Backend response:", errorText)
        throw new Error("Failed to submit form")
        toast.error("Failed to submit the consultation request. Please try again.");
      }

      const result = await response.json()
      console.log("Submitted successfully:", result)
      toast.success("Consultation request submitted successfully!");
      onClose()
      onSubmitSuccess?.e.preventDefault()
    } catch (error) {
      console.error("Submission error:", error)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-primary-blue to-slate-700 text-white p-5 sm:p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </h3>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-slate-300 mt-1 sm:mt-2 text-sm">
            Complete the form below and our team will contact you to confirm your appointment.
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={onSubmit} className="p-5 sm:p-6">
          <div className="space-y-4">
            {[
              { id: "name", label: "Full Name", icon: User, type: "text" },
              { id: "email", label: "Email Address", icon: Mail, type: "email" },
              { id: "company", label: "Company", icon: Building2, type: "text" },
              { id: "phone", label: "Phone (optional)", icon: Phone, type: "tel" },
              { id: "date", label: "Preferred Date", icon: Calendar, type: "date" },
              { id: "time", label: "Preferred Time", icon: Clock, type: "time" },
            ].map(({ id, label, icon: Icon, type }) => (
              <div key={id}>
                <label htmlFor={id} className="text-sm font-medium text-slate-700 mb-1 flex items-center">
                  <Icon className="w-4 h-4 mr-1" />
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={(formData as any)[id]}
                  onChange={onChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formErrors[id] ? "border-red-500" : "border-slate-300"
                  } focus:outline-none focus:ring-2 focus:ring-orange-300`}
                />
                {formErrors[id] && <p className="text-sm text-red-500 mt-1">{formErrors[id]}</p>}
              </div>
            ))}

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1 flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={onChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-primary-blue hover:bg-primary-orange text-white py-2 px-4 rounded-md transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsultationModal
