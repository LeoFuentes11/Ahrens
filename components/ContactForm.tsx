'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { Loader2, CheckCircle2 } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {} as Record<string, string[]>,
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-green-500" aria-hidden="true" />
        <h3 className="text-xl font-heading font-semibold text-brand-dark">
          Message Sent!
        </h3>
        <p className="text-brand-steel">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>
      {/* Error summary */}
      {state.message && !state.success && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 rounded text-sm text-red-700"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-1.5">
            First Name <span className="text-brand-orange" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            aria-describedby={state.errors?.firstName ? 'firstName-error' : undefined}
            aria-invalid={!!state.errors?.firstName}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors"
          />
          {state.errors?.firstName && (
            <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-600">
              {state.errors.firstName[0]}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-1.5">
            Last Name <span className="text-brand-orange" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            aria-describedby={state.errors?.lastName ? 'lastName-error' : undefined}
            aria-invalid={!!state.errors?.lastName}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors"
          />
          {state.errors?.lastName && (
            <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-600">
              {state.errors.lastName[0]}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
          Email Address <span className="text-brand-orange" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          aria-invalid={!!state.errors?.email}
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors"
        />
        {state.errors?.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className="block text-sm font-medium text-brand-dark mb-1.5">
          Enquiry Type <span className="text-brand-orange" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          aria-describedby={state.errors?.enquiryType ? 'enquiryType-error' : undefined}
          aria-invalid={!!state.errors?.enquiryType}
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors bg-white"
        >
          <option value="">Select an option…</option>
          <option value="general">General Enquiry</option>
          <option value="design-construct">Design &amp; Construct</option>
          <option value="mining">Mining Services</option>
          <option value="steel">Steel Fabrication</option>
          <option value="water">Water Storage</option>
          <option value="sheds">Sheds</option>
          <option value="silos">Silos</option>
          <option value="careers">Careers</option>
        </select>
        {state.errors?.enquiryType && (
          <p id="enquiryType-error" role="alert" className="mt-1 text-xs text-red-600">
            {state.errors.enquiryType[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
          Message <span className="text-brand-orange" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          aria-invalid={!!state.errors?.message}
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-orange transition-colors resize-y"
        />
        {state.errors?.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
