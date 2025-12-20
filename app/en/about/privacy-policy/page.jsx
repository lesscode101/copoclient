import './../about.css';


import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

export default async function PrivacyPage() {
    // 1. البيانات المهيكلة (Schema) المضافة لتعريف محرك البحث بنوع الصفحة
    const privacySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Eravist Privacy Policy - How We Protect Your Data",
        "description": "Read Eravist’s Privacy Policy to understand how we collect, use, and protect your personal information when you shop on our platform.",
        "url": "https://www.eravist.com/en/about/privacy",
        // يُفضل استخدام AboutPage أو WebPage لصفحات السياسات
        "about": {
            "@type": "AboutPage",
            "name": "Privacy Policy"
        }
    };


    return (
        <>
            {/* 2. وسم العنوان (Title Tag) والوصف (Meta Description) - تم تحسين الوصف */}
            <title>Eravist Privacy Policy | Data Protection and Security</title>
            <meta
                name="description"
                content="Read the Eravist Privacy Policy to understand exactly how we collect, use, and securely protect your personal information and online data."
            />
            <link
                rel="canonical"
                href="https://www.eravist.com/en/about/privacy"
            />
            {/* إضافة البيانات المهيكلة (Schema) مباشرةً ضمن مكون الصفحة */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />

            <HeaderSlim />
            <section className="abt-section">


                <div className="container">
                    <div className="service">
                        {/* 3. وسم H1 (تم تحسين النص قليلاً ليتضمن كلمة "Data" أو "Information") */}
                        <h1 className="privacy-title">Eravist Privacy Policy: Your Personal Data Protection</h1>
                        <p className="para">At Eravist, protecting your privacy and personal information is a top priority. This Privacy Policy explains in detail how we collect, use, and safeguard your data when you interact with our website, register an account, make purchases, or subscribe to our newsletters. By using our website and services, you consent to the practices described in this policy.</p>
                        <p className="para">We are committed to transparency and encourage you to review this Privacy Policy regularly. Changes may occur from time to time, and your continued use of our website constitutes acceptance of these changes.</p>
                    </div>

                    <div className="service">
                        {/* 4. هيكلية العناوين H2/H3 جيدة جداً */}
                        <h2 className="privacy-subtitle">1. Introduction</h2>
                        <p className="para">Eravist operates eravist.com, offering premium backpacks, accessories, and pocket bags. We respect your privacy and are committed to protecting the personal information you provide when interacting with our services.</p>
                        <p className="para">This Privacy Policy outlines what information we collect, how it is used, and the measures we take to ensure your data is protected. Our goal is to provide a safe and secure experience while shopping or browsing our website.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Data Collection</h2>

                        <h3 className="privacy-smtitle">2.1 Personal Information Collected</h3> {/* تحسين بسيط في النص */}
                        <p className="para">We collect personal information directly from you when you:</p>
                        <ul className="ul">
                            <li>Create an account or log in</li>
                            <li>Place an order or request a product</li>
                            <li>Subscribe to our newsletter or promotional emails</li>
                            <li>Use our contact form or customer support channels</li>
                        </ul>
                        <p className="para">The types of personal information we may collect include:</p>
                        <ul className="ul">
                            <li>Full name, email address, and phone number</li>
                            <li>Shipping and billing addresses</li>
                            <li>Account login credentials, passwords, and security information</li>
                            <li>Newsletter and marketing preferences</li>
                        </ul>
                        <p className="para">Providing this information is optional, but certain features of our site may not function properly if this data is not provided.</p>

                        <h3 className="privacy-smtitle">2.2 Automatic Data Collection (Cookies and Tracking)</h3> {/* دمج وتحسين في النص */}
                        <p className="para">We automatically collect some data when you visit our website. This helps us improve your experience, provide better services, and maintain security. Examples include:</p>
                        <ul className="ul">
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Operating system and screen resolution</li>
                            <li>Pages visited, time spent, and navigation paths</li>
                            <li>Referring websites or sources</li>
                        </ul>
                        <p className="para">This information is collected using cookies, tracking pixels, and similar technologies. You can control cookies through your browser settings, though some website features may be limited as a result.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Use of Data and Information Sharing</h2> {/* تحسين في العنوان */}
                        <p className="para">We use your personal and automatic data for the following purposes:</p>
                        <ul className="ul">
                            <li>Processing orders, managing deliveries, and providing customer support</li>
                            <li>Maintaining and managing your user account</li>
                            <li>Sending newsletters, promotions, and important updates</li>
                            <li>Improving website performance, usability, and personalized experience</li>
                            <li>Preventing fraud, ensuring compliance, and maintaining security</li>
                        </ul>
                        <p className="para">We do not sell your personal data to third parties. We may share your information with trusted service providers who assist us in operating our website, delivering products, or providing other services, such as payment processors, email providers, and shipping companies.</p>
                    </div>

                    <div className="service">
                        {/* تم دمج هذا القسم مع 2.2 لتقليل التكرار */}
                        <h2 className="privacy-subtitle">4. Cookies and Tracking Technologies</h2>
                        <p className="para">Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies allow us to remember your preferences, provide personalized content, and analyze website traffic.</p>
                        <ul className="ul">
                            <li>Essential cookies: Required for website functionality</li>
                            <li>Performance cookies: Help us understand website usage and improve services</li>
                            <li>Functional cookies: Remember your preferences and settings</li>
                            <li>Advertising cookies: Display personalized offers (if opted-in)</li>
                        </ul>
                        <p className="para">You can manage or disable cookies in your browser settings. Please note that some features may not work correctly if cookies are disabled.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Data Retention Period</h2> {/* تحسين في العنوان */}
                        <p className="para">We retain personal information only as long as necessary for business operations, legal obligations, or legitimate interests. When no longer needed, we securely delete or anonymize the data.</p>
                        <p className="para">Your order history, account details, and preferences are stored securely to ensure a smooth shopping experience, but you may request deletion at any time (subject to applicable legal requirements).</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Data Security Measures</h2> {/* تحسين في العنوان */}
                        <p className="para">We implement robust technical, administrative, and physical measures to protect your personal information. While no system is completely secure, we strive to prevent unauthorized access, disclosure, alteration, or destruction of your data.</p>
                        <p className="para">This includes encryption of sensitive data, secure servers, access controls, and regular monitoring for vulnerabilities.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Your Data Rights</h2> {/* تحسين في العنوان */}
                        <p className="para">Depending on your location, you may have rights regarding your personal data, including:</p>
                        <ul className="ul">
                            <li>Accessing and obtaining a copy of your data</li>
                            <li>Requesting corrections or updates to inaccurate information</li>
                            <li>Requesting deletion of your personal data</li>
                            <li>Opting out of marketing communications</li>
                            <li>Objecting to or restricting processing under certain conditions</li>
                        </ul>
                        <p className="para">To exercise your rights, please contact us through our customer support channels.</p>
                    </div>

                    {/* 5. تم حذف هذا القسم لتركيز الصفحة على الخصوصية فقط */}
                    {/* <div className="service">
                        <h2 className="privacy-subtitle">8. Easy Returns Policy</h2>
                        ...
                    </div> */}

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Third-Party Services and Links</h2> {/* تحسين في العنوان */}
                        <p className="para">We may use third-party services for analytics, email marketing, payment processing, and shipping. These providers have their own privacy policies, and we encourage you to review them. We ensure that these providers only use your data to perform services on our behalf.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Contact Us for Privacy Questions</h2> {/* تحسين في العنوان */}
                        <p className="para">If you have questions about this Privacy Policy, your personal data, or our practices, you can contact us at:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para">We will respond promptly to any questions or concerns regarding your privacy.</p>
                    </div>

                </div>

            </section>
            <Footer />

        </>

    );
}