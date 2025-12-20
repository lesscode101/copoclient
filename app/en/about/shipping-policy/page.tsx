import './../about.css'


import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

export default async function ShippingPolicyPage() {
    // 1. البيانات المهيكلة (Schema) لسياسة الشحن (ShippingPolicy)
    const shippingPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Eravist Shipping Policy: Delivery Times and Order Tracking",
        "description": "Read Eravist’s official shipping policy covering processing times, standard and express delivery estimates, costs, and international customs information.",
        "url": "https://www.eravist.com/en/about/shipping-policy",
        "mainEntity": {
            "@type": "ShippingPolicy",
            // تحديد أوقات المعالجة (1-3 أيام عمل)
            "shippingRate": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "Calculated at Checkout" // الإشارة إلى أن القيمة تُحسب ديناميكيًا
            },
            "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY",
                "unitText": "business days"
            },
            // تحديد أوقات الشحن القياسية (5-10 أيام)
            "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 5,
                "maxValue": 10,
                "unitCode": "DAY",
                "unitText": "business days (Standard Shipping)"
            },
            // إضافة معلومات حول المناطق الجغرافية (أو على الأقل توضيح أن الشحن عالمي)
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "Global",
            },
            "shippingType": "http://schema.org/Delivery",
            "offersShippingForFree": "Free shipping promotions are occasionally available."
        }
    };

    return (

        <>

            {/* 2. تحسين وسم العنوان (Title Tag) والوصف (Meta Description) */}
            <title>Eravist Shipping Policy | Delivery Times, Tracking, and Costs</title>
            <meta
                name="description"
                content="Get full details on Eravist’s Shipping Policy: order processing (1-3 days), delivery times (Standard/Express), tracking, and handling of international customs duties."
            />
            <link
                rel="canonical"
                href="https://www.eravist.com/en/about/shipping-policy"
            />
            {/* إضافة البيانات المهيكلة (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(shippingPolicySchema) }}
            />
            
            <HeaderSlim />

            <section className="abt-section shipping-policy">

                <div className="container">
                    <div className="service">
                        {/* 3. تحسين وسم H1 */}
                        <h1 className="privacy-title">Eravist Shipping Policy: Delivery and Tracking Details</h1>
                        <p className="para">At Eravist, we are committed to delivering your orders safely, efficiently, and on time. This **Shipping Policy** explains our shipping methods, delivery times, costs, and other important details so that you know what to expect when you place an order.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Order Processing Time</h2> {/* تحسين العنوان */}
                        <p className="para">All orders are processed within **1–3 business days** (excluding weekends and holidays) after the order is confirmed. During peak seasons or promotional periods, processing times may be slightly longer. You will receive a confirmation email once your order is processed and ready for shipment.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Shipping Methods and Estimated Delivery Times</h2> {/* تحسين العنوان */}
                        <p className="para">We offer several shipping options depending on your location and preference. Delivery times are estimated and begin *after* the 1–3 business day processing time:</p>
                        <ul className="ul">
                            <li><strong>Standard Shipping:</strong> Usually delivered within **5–10 business days**.</li>
                            <li><strong>Express Shipping:</strong> Usually delivered within **2–5 business days**.</li>
                            <li><strong>International Shipping:</strong> Delivery times vary by country, usually **7–21 business days** depending on customs and local carriers.</li>
                        </ul>
                        <p className="para">Please note that these are estimated delivery times and are not guaranteed. Delays can occur due to weather, carrier issues, or customs clearance.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Calculating Shipping Costs</h2> {/* تحسين العنوان */}
                        <p className="para">Shipping costs are calculated at checkout based on the weight, size, destination, and shipping method of your order. Occasionally, we may offer **free shipping promotions**, which will be applied automatically at checkout when eligible. The final and accurate shipping cost will be displayed before you confirm your payment.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Order Tracking and Notifications</h2> {/* تحسين العنوان */}
                        <p className="para">Once your order is shipped, you will receive a tracking number via email. You can use this number to monitor your shipment on the carrier’s website. Please allow **24 hours** for tracking information to be updated and visible in the carrier system.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Accuracy of Shipping Address</h2> {/* تحسين العنوان */}
                        <p className="para">Please ensure your shipping address is **correct and complete**. Eravist is not responsible for delays, lost packages, or failed deliveries caused by incorrect addresses provided by the customer. If you need to update your address, contact us as soon as possible before your order is shipped.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. International Orders: Customs, Duties, and Taxes</h2> {/* تحسين العنوان */}
                        <p className="para">For international orders, **customs duties, taxes, or import fees** may be applied depending on the destination country. These fees are the **responsibility of the customer**. Eravist is not liable for delays or additional charges imposed by customs authorities.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Handling Damaged or Lost Shipments</h2> {/* تحسين العنوان */}
                        <p className="para">If your order arrives damaged or is lost during shipping, please contact our customer support immediately with photos of the damage and your order details. We will work with the shipping carrier to resolve the issue and, if applicable, provide a replacement or refund.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Multiple Shipments for One Order</h2> {/* تحسين العنوان */}
                        <p className="para">In some cases, items from the same order may be shipped separately to ensure faster delivery. Shipping costs are not affected unless stated otherwise during checkout.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Contact Information for Shipping Support</h2> {/* تحسين العنوان */}
                        <p className="para">If you have any questions about your shipment, delivery status, or shipping options, please contact our support team:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para"><strong>Address:</strong> Eravist HQ, [Your Address Here]</p>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}