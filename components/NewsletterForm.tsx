'use client';

import { useActionState } from 'react';
import { subscribeNewsletter } from '@/app/actions/newsletter';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const initialState = { success: false, message: '' };

export default function NewsletterForm() {
  const [state, action, isPending] = useActionState(
    subscribeNewsletter,
    initialState
  );

  return (
    <section className="bg-brand-dark py-16">
      <div className="container-xl text-center">
        <h2 className="text-3xl font-heading font-bold text-white">
          Stay Informed
        </h2>
        <p className="mt-3 text-white/60 max-w-md mx-auto">
          Get the latest Ahrens news, project updates, and industry insights
          delivered to your inbox.
        </p>

        {state.success ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-8 inline-flex items-center gap-2 text-green-400"
          >
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            <span>{state.message}</span>
          </div>
        ) : (
          <form action={action} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={isPending}
              className="btn-primary text-sm px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Subscribing…
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        )}

        {state.message && !state.success && (
          <p
            role="alert"
            aria-live="assertive"
            className="mt-3 flex items-center justify-center gap-2 text-sm text-red-400"
          >
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {state.message}
          </p>
        )}
      </div>
    </section>
  );
}
