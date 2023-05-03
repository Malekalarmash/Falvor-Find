import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51N3MEDJKG7XzR6jugTPeQNvto2WdICMifSHmRymSsBx9JOz7LPvqUCEeNMRKAIcKuhlmbJAdhtzdmirBYZuovhIh00lbvd6lkJ"
const stripeTestPromis = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromis}>
            <PaymentForm />
        </Elements>
    )
}
