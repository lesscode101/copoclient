import './../about.css';


import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

export default async function TermsPage() {
    const termsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Eravist Official Terms & Conditions and Website Usage Agreement",
        "description": "The legal Terms and Conditions governing the use of Eravist website, account registration, purchasing policies, and intellectual property rights.",
        "url": "https://www.eravist.com/en/about/terms",
        "about": {
            "@type": "AboutPage",
            "name": "Terms & Conditions"
        }
    };

    return (

        <>

            <title>Official Terms & Conditions | Eravist Website Use and Purchasing Agreement</title>
            <meta
                name="description"
                content="Read Eravist’s official Terms & Conditions. Learn about website use, purchasing policies, secure payments, intellectual property rights, and user responsibilities."
            />
            <link
                rel="canonical"
                href="https://www.eravist.com/en/about/terms"
            />
            <link rel="alternate" href="https://www.eravist.com/en/about/privacy-policy" hrefLang="en" />
            <link rel="alternate" href="https://www.eravist.com/fr/about/privacy-policy" hrefLang="fr" />
            <link rel="alternate" href="https://www.eravist.com/ar/about/privacy-policy" hrefLang="ar" />

            {/* إضافة البيانات المهيكلة (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />


            <HeaderSlim />
            <section className="abt-section">

                <div className="container">
                    <div className="service">
                        {/* 3. تحسين وسم H1 ليكون أكثر تفصيلاً */}
                        <h1 className="privacy-title">Eravist Official Terms & Conditions and User Agreement</h1>
                        <p className="para">Welcome to Eravist! By accessing or using our website, eravist.com, you agree to comply with and be bound by the following **Terms & Conditions**. Please read them carefully before using our services. If you do not agree, you must not use our website or make any purchases.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. General Terms and Acceptance</h2> {/* تحسين العنوان */}
                        <p className="para">Eravist specializes in selling premium backpacks, accessories, and pocket bags. These **Terms & Conditions** govern your use of our website, products, and services. They also apply to all users, including visitors, customers, and registered members.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. User Account Registration and Security</h2> {/* تحسين العنوان */}
                        <p className="para">To access certain features, you may need to create an account. You are responsible for providing accurate and up-to-date information and for maintaining the confidentiality of your login credentials. You agree to notify us immediately if you suspect **unauthorized use** of your account.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Product Orders, Pricing, and Secure Payments</h2> {/* تحسين العنوان */}
                        <p className="para">By placing an order on our website, you agree to provide valid payment information and authorize us to charge the order amount. Prices and availability are subject to change without notice. We reserve the right to refuse or cancel orders at our discretion.</p>
                        <p className="para">All payments are **securely processed** through trusted third-party providers, and we do not store sensitive payment data on our servers.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Shipping, Delivery, and Risk of Loss</h2> {/* تحسين العنوان */}
                        <p className="para">We strive to ship orders promptly, but delivery times may vary based on location, shipping method, and product availability. Estimated delivery dates are provided for convenience and are not guaranteed. We are not responsible for delays caused by carriers or customs processing. **Risk of loss** passes to you upon delivery to the carrier.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Returns, Refunds, and Exchange Policy Summary</h2> {/* تحسين العنوان */}
                        <p className="para">We offer a **30-day easy return policy**. You may return products in their original, unused condition for a refund or exchange. Refunds will be processed to the original payment method within 5–7 business days of receiving the returned item.</p>
                        <ul className="ul">
                            <li>Items must be unused and in original packaging</li>
                            <li>Return requests must be submitted via our customer support</li>
                            <li>Shipping fees may apply unless the item is defective or incorrect</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Acceptable User Conduct and Prohibitions</h2> {/* تحسين العنوان */}
                        <p className="para">By using our website, you agree not to:</p>
                        <ul className="ul">
                            <li>Use the site for **unlawful purposes** or in violation of these Terms</li>
                            <li>Attempt to gain unauthorized access to other accounts, systems, or networks</li>
                            <li>Upload or transmit harmful content, viruses, or malicious software</li>
                            <li>Engage in disruptive, abusive, or offensive behavior</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Intellectual Property Rights and Ownership</h2> {/* تحسين العنوان */}
                        <p className="para">All content on Eravist.com, including images, logos, text, and designs, is owned by Eravist or its licensors. You may not copy, reproduce, distribute, or use any content without prior written permission. All **trademarks**, service marks, and logos are property of their respective owners.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Disclaimers and Limitation of Liability</h2> {/* تحسين العنوان */}
                        <p className="para">To the fullest extent permitted by law, Eravist is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website, products, or services. This includes issues related to orders, deliveries, returns, or third-party services. The website is provided on an **“as is”** and **“as available”** basis.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Third-Party Links and External Services</h2> {/* تحسين العنوان */}
                        <p className="para">Our website may include links to third-party services, payment processors, or delivery companies. We do not control these services and are not responsible for their content, privacy practices, or performance. Users are encouraged to review the terms and policies of these third parties.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">10. Governing Law and Dispute Resolution</h2> {/* تحسين العنوان */}
                        <p className="para">These Terms & Conditions are governed by the laws of **[Your Country/State]**. Any disputes arising from these terms or your use of our website will be resolved in accordance with applicable local laws.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">11. Policy Modifications and Updates</h2> {/* تحسين العنوان */}
                        <p className="para">We reserve the right to update or modify these Terms & Conditions at any time. The latest version will always be posted on our website, and your continued use constitutes acceptance of any changes. We encourage you to review the terms periodically.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">12. Contact Information for Legal Inquiries</h2> {/* تحسين العنوان */}
                        <p className="para">For any questions or concerns regarding these Terms & Conditions, please contact us:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para"><strong>Address:</strong> Eravist HQ, [Your Address Here]</p>
                    </div>

                </div>

            </section>

            <Footer />
        </>

    );
}