import './../about.css';
import HeaderSlim from '@/app/components/english/Header/HeaderSlim';
import Footer from '@/app/components/english/Footer/Footer';

export default async function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I place an order?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Browse our products, add items to your cart, and complete the checkout process by entering your shipping and payment information."
                }
            },
            {
                "@type": "Question",
                "name": "What payment methods are accepted?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept major credit/debit cards, PayPal, and other secure payment gateways. All payments are processed securely."
                }
            },
            {
                "@type": "Question",
                "name": "Do you ship internationally?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination."
                }
            },
            {
                "@type": "Question",
                "name": "What is your return policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can return items within 30 days if they are unused, in original packaging, and in resalable condition."
                }
            },
            {
                "@type": "Question",
                "name": "How is my personal information protected?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We store personal information securely and use it only to process orders, communicate with customers, and improve shopping experience."
                }
            }
        ]
    };

    return (
        <>
            <>
                <title>FAQ | Frequently Asked Questions | Eravist</title>
                <meta
                    name="description"
                    content="Find quick answers to common questions about orders, shipping, returns, payments, and Eravist services. Clear, simple, and helpful information for shoppers."
                />
                <link rel="canonical" href="https://www.eravist.com/en/about/faq" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </>

            <HeaderSlim />

            <section className="abt-section">
                <div className="container">
                    <div className="service">
                        <h1 className="privacy-title">Frequently Asked Questions (FAQ)</h1>
                        <p className="para">Welcome to the Eravist FAQ page! Here we answer the most common questions about our products, orders, shipping, returns, and more. If you can’t find an answer here, please contact our support team.</p> </div> <div className="service">
                        <div className="service">
                            <h2 className="privacy-subtitle">1. Orders & Payments</h2>
                            <h3 className="privacy-smtitle">1.1 How do I place an order?</h3>
                            <p className="para">To place an order, browse our products, select the item(s) you want, and click "Add to Cart." Once you are ready, go to your cart, review your items, and complete the checkout process by entering your shipping and payment information.</p>
                            <h3 className="privacy-smtitle">1.2 What payment methods are accepted?</h3>

                            <p className="para">We accept major credit/debit cards, PayPal, and other secure payment gateways. All payments are processed securely through trusted third-party providers, and your payment details are never stored on our servers.</p>
                            <h3 className="privacy-smtitle">1.3 Can I modify or cancel my order?</h3>
                            <p className="para">Orders can be modified or canceled only if they have not yet been shipped. Please contact our support team immediately if you need to make changes.</p> </div> <div className="service">

                        </div>
                        <div className="service">
                            <h2 className="privacy-subtitle">2. Shipping & Delivery</h2>
                            <h3 className="privacy-smtitle">2.1 How long does shipping take?</h3>
                            <p className="para">Delivery times vary depending on your location and the shipping method selected. Estimated delivery times are provided at checkout but are not guaranteed. International orders may take longer due to customs processing.</p>
                            <h3 className="privacy-smtitle">2.2 Do you ship internationally?</h3>
                            <p className="para">Yes, we ship to most countries worldwide. Shipping fees, delivery times, and customs duties may vary based on the destination.</p>
                            <h3 className="privacy-smtitle">2.3 Can I track my order?</h3>
                            <p className="para">Once your order is shipped, you will receive a tracking number via email. You can use this number to track your shipment on the carrier’s website.</p> </div> <div className="service">

                        </div>

                        <div className="service">
                            <h2 className="privacy-subtitle">3. Returns & Refunds</h2>
                            <h3 className="privacy-smtitle">3.1 What is your return policy?</h3>
                            <p className="para">We offer a 30-day return policy. Items must be unused, in original packaging, and in resalable condition. Refunds or exchanges will be processed after the returned item is received and inspected.</p>
                            <h3 className="privacy-smtitle">3.2 How do I return a product?</h3>
                            <p className="para">To return an item, contact our customer support team to request a return. You will receive instructions on how to ship the product back to us.</p>
                            <h3 className="privacy-smtitle">3.3 When will I receive my refund?</h3>
                            <p className="para">Refunds are processed within 5–7 business days after we receive and inspect the returned items. Refunds will be credited to the original payment method.</p> </div> <div className="service">

                        </div>
                        <div className="service">
                            <h2 className="privacy-subtitle">4. Products</h2>
                            <h3 className="privacy-smtitle">4.1 Are your products genuine?</h3>
                            <p className="para">Yes, all Eravist products are 100% genuine, high-quality backpacks, accessories, and pocket bags. We source products directly from trusted suppliers.</p> <h3 className="privacy-smtitle">4.2 How do I care for my product?</h3>
                            <p className="para">We provide care instructions with every product. Generally, we recommend gentle cleaning with a damp cloth and avoiding harsh chemicals or machine washing unless specified.</p>
                            <h3 className="privacy-smtitle">4.3 Do you offer warranties?</h3>
                            <p className="para">Yes, we offer limited warranties on manufacturing defects. Warranty coverage varies by product; please check the product description for details.</p> </div> <div className="service">

                        </div>
                        <div className="service">
                            <h2 className="privacy-subtitle">5. Accounts & Privacy</h2>
                            <h3 className="privacy-smtitle">5.1 Do I need an account to order?</h3>
                            <p className="para">You can browse products without an account, but creating an account helps you track orders, save shipping addresses, and manage preferences easily.</p>
                            <h3 className="privacy-smtitle">5.2 How is my personal information protected?</h3>
                            <p className="para">We take your privacy seriously. Personal information is stored securely and used only to process orders, communicate with you, and improve your shopping experience. We do not sell your data to third parties.</p> <h3 className="privacy-smtitle">5.3 Can I unsubscribe from newsletters?</h3> <p className="para">Yes, you can unsubscribe at any time using the link in the newsletter email or by contacting our support team.</p> </div> <div className="service">

                        </div>
                        <div className="service">
                            <h2 className="privacy-subtitle">6. Support & Contact</h2>
                            <h3 className="privacy-smtitle">6.1 How can I contact customer support?</h3>
                            <p className="para">You can reach our support team via email at <strong>support@eravist.com</strong> or by using the contact form on our website. We strive to respond within 24–48 hours.</p> <h3 className="privacy-smtitle">6.2 What if I have a complaint?</h3> <p className="para">If you have any issues with your order or experience, please contact us immediately. We are committed to resolving complaints fairly and promptly.</p> </div> <div className="service">
                            <div className="service">
                                <h2 className="privacy-subtitle">7. Miscellaneous</h2>
                                <h3 className="privacy-smtitle">7.1 Are prices final?</h3>
                                <p className="para">Prices are displayed in your selected currency and include applicable taxes unless stated otherwise. We reserve the right to update prices at any time.</p> <h3 className="privacy-smtitle">7.2 Do you offer discounts or promotions?</h3> <p className="para">We occasionally offer promotions or discount codes. Terms and conditions for promotions will be stated clearly and may have restrictions.</p> <h3 className="privacy-smtitle">7.3 Can these FAQs change?</h3> <p className="para">Yes, we may update this FAQ page as products, policies, and services change. We encourage you to review it regularly for the latest information.</p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}