import './../about.css';


import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

export default async function ReturnPolicyPage() {
    // 1. البيانات المهيكلة (Schema) لسياسة الإرجاع (ReturnPolicy)
    const returnPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Eravist Return, Refund, and Exchange Policy",
        "description": "Comprehensive guide to Eravist’s 30-day return window, eligibility for refunds, and procedures for exchanges.",
        "url": "https://www.eravist.com/en/about/return-exchanges",
        "mainEntity": {
            "@type": "ReturnPolicy",
            "description": "Eravist's policy for returns and refunds, allowing 30 days from delivery.",
            "url": "https://www.eravist.com/en/about/return-exchanges",
            // المدة المسموح بها للإرجاع (30 يوماً من الاستلام)
            "returnPolicyCountry": "Global",
            "returnPolicyCategory": "http://schema.org/FullRefund",
            "merchantReturnDays": 30,
            "returnFees": "http://schema.org/CustomerPays", // العميل يدفع رسوم الشحن عادةً
            "inStoreReturnsAllowed": false, // نفترض أنه متجر إلكتروني
            "returnMethod": "http://schema.org/ReturnByMail",
            "customerRemorseReturnFees": {
                "@type": "MonetaryAmount",
                "currency": "MAD",
                "value": "0" // رسوم استرجاع إدارية صفر، فقط رسوم الشحن يتحملها العميل
            },
            "itemCondition": "http://schema.org/NewCondition", // يجب أن يكون المنتج بحالة جديدة
            "refundType": "http://schema.org/Money",
            // إضافة خاصية لضمان الدقة
            "applicableProductType": "http://schema.org/Product"
        }
    };


    return (
        <>
            {/* 2. تحسين وسم العنوان (Title Tag) والوصف (Meta Description) */}
            <title>30-Day Return & Refund Policy | Eravist Exchanges</title>
            <meta
                name="description"
                content="Eravist offers a 30-day return and refund policy on unused items. Learn how to initiate a return or exchange, and read our detailed shipping and refund rules."
            />
            <link rel="canonical" href="https://www.eravist.com/en/about/return-exchanges" />
            
            {/* إضافة البيانات المهيكلة (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(returnPolicySchema) }}
            />

            <HeaderSlim />

            <section className="abt-section">
                <div className="container">
                    <div className="service">
                        {/* 3. تحسين وسم H1 ليصبح أكثر شمولاً */}
                        <h1 className="privacy-title">Eravist 30-Day Return, Refund, and Exchange Policy</h1>
                        <p className="para">At Eravist, we want you to be completely satisfied with your purchase. Our **30-Day Return & Refund Policy** ensures a fair and easy process for customers while maintaining clear rules to protect both parties. Please read this policy carefully before making a purchase.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Eligibility and 30-Day Return Window</h2> {/* تحسين العنوان */}
                        <p className="para">You may return products within **30 days** of receiving your order, subject to the following conditions:</p>
                        <ul className="ul">
                            <li>Items must be unused, unworn, and in their **original condition**.</li>
                            <li>Products must be returned in the original packaging with all tags, accessories, and manuals included.</li>
                            <li>Customized or personalized products are not eligible for return unless defective.</li>
                            <li>Sale or discounted items may have specific return restrictions stated at the time of purchase.</li>
                        </ul>
                        <p className="para">Products that do not meet these requirements may not be accepted for return or may incur a restocking fee.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. How to Initiate a Return or Exchange</h2> {/* تحسين العنوان */}
                        <p className="para">To start a return or exchange, please follow these steps:</p>
                        <ul className="ul">
                            <li>Contact our customer support team at **support@eravist.com** or via our website’s contact form.</li>
                            <li>Provide your order number and the reason for the return/exchange.</li>
                            <li>Our team will provide you with instructions and a return merchandise authorization (RMA) if applicable.</li>
                        </ul>
                        <p className="para">Please do not send items back without prior approval, as unapproved returns may be rejected or delayed.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Return Shipping and Costs</h2> {/* تحسين العنوان */}
                        <p className="para">Customers are responsible for shipping costs for standard returns (buyer's remorse) unless the item is defective or incorrect. We recommend using a trackable shipping method to ensure the package arrives safely. Eravist is not responsible for lost or damaged packages during return shipping.</p>
                        <p className="para">For defective or incorrect items, we will provide prepaid shipping labels and cover the shipping costs.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Refund Processing and Timeline</h2> {/* تحسين العنوان */}
                        <p className="para">Once we receive and inspect the returned product, your refund will be processed based on the following rules:</p>
                        <ul className="ul">
                            <li>Refunds will be issued to the original payment method within **5–7 business days** after inspection.</li>
                            <li>Shipping fees (if paid during the original purchase) are non-refundable except for defective or incorrect items.</li>
                            <li>Partial refunds may be issued if the item is not returned in its original condition or is missing parts (restocking fee).</li>
                        </ul>
                        <p className="para">You will receive an email confirmation once your refund is processed.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Exchanges and Replacement Orders</h2> {/* تحسين العنوان */}
                        <p className="para">If you wish to exchange a product for a different size, color, or item, please follow the return process above. Exchanges are subject to product availability. Shipping costs for exchanges may apply, and the new item will be shipped once the returned item is received and inspected.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Handling Defective or Damaged Items</h2> {/* تحسين العنوان */}
                        <p className="para">If you receive a defective or damaged item, please notify us within **7 days** of delivery. We will:</p>
                        <ul className="ul">
                            <li>Provide a prepaid return shipping label.</li>
                            <li>Offer a full refund or replacement item at no extra cost.</li>
                            <li>Ensure that defective items are handled quickly to minimize inconvenience.</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Non-Returnable Items (Final Sale)</h2> {/* تحسين العنوان */}
                        <p className="para">Certain items cannot be returned for safety, hygiene, or customization reasons. These include:</p>
                        <ul className="ul">
                            <li>Personalized or customized products (unless defective)</li>
                            <li>Gift cards or downloadable digital content</li>
                            <li>Items marked as **“Final Sale”** or **“Non-Returnable”**</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Order Cancellation Policy</h2>
                        <p className="para">You may cancel your order before it is shipped. Once the item has been dispatched, it cannot be canceled but can be returned according to the return policy. To cancel an order, contact our customer support team **immediately**.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. International Returns and Duties</h2> {/* تحسين العنوان */}
                        <p className="para">For international orders, returns are subject to the same 30-day period and eligibility rules. Customers are responsible for return shipping costs unless the item is defective or incorrect. Customs duties or taxes are non-refundable.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">10. Contact Information for Support</h2> {/* تحسين العنوان */}
                        <p className="para">For any questions or to initiate a return, please contact our dedicated customer support team:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para"><strong>Address:</strong> Eravist HQ, [Your Address Here]</p>
                        <p className="para">We aim to respond within 24–48 hours and guide you through a smooth return or refund process.</p>
                    </div>

                </div>
            </section>
            <Footer />

        </>

    );
}