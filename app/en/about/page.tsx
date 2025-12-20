import './about.css'

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

export default async function AboutPage() {
    // 1. البيانات المهيكلة (Schema) لتوثيق هوية الشركة
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                // تصنيف الصفحة كصفحة تعريفية
                "@type": "WebPage",
                "name": "Eravist Story, Mission, and Quality Backpacks",
                "description": "Discover Eravist's commitment to quality, innovation, and customer satisfaction. Learn about our premium backpacks, accessories, and organizational products.",
                "url": "https://www.eravist.com/en/about",
                "about": {
                    "@type": "AboutPage",
                    "name": "About Us"
                }
            },
            {
                // تعريف الكيان/المنظمة (Eravist)
                "@type": "Organization",
                "name": "Eravist",
                "url": "https://www.eravist.com/",
                "logo": "https://www.eravist.com/images/logo.png", // يجب استبداله برابط الشعار الفعلي
                "sameAs": [
                    // أضف هنا روابط وسائل التواصل الاجتماعي (فيسبوك، انستغرام، إلخ)
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+212-676-54-98-77",
                    "contactType": "Customer Service",
                    "email": "support@eravist.com"
                }
            }
        ]
    };


    return (
        <>

            {/* 2. تحسين وسم العنوان (Title Tag) والوصف (Meta Description) */}
            <title>About Eravist: Our Mission, Values, and Premium Backpacks</title>
            <meta
                name="description"
                content="Discover Eravist’s story, mission, and commitment to quality. We provide premium, durable backpacks, organizers, and accessories built for modern life."
            />
            {/* 3. إضافة الوسوم الكنسية واللغات البديلة (hreflang) */}
            
            {/* الوسم الكنسي (النسخة الأساسية لهذه الصفحة) */}
            <link
                rel="canonical"
                href="https://www.eravist.com/en/about"
            />
            
            {/* تحديد اللغات البديلة (hreflang) */}
            <link rel="alternate" href="https://www.eravist.com/en/about" hrefLang="en" />
            <link rel="alternate" href="https://www.eravist.com/fr/about" hrefLang="fr" />
            <link rel="alternate" href="https://www.eravist.com/ar/about" hrefLang="ar" />
            <link rel="alternate" href="https://www.eravist.com/en/about" hrefLang="x-default" />


            {/* إضافة البيانات المهيكلة (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />

            <HeaderSlim />

            <section className="abt-section">

                <div className="container">
                    <div className="service">
                        {/* 4. تحسين وسم H1 */}
                        <h1 className="privacy-title">About Eravist: Our Story, Mission, and Commitment to Quality</h1>
                        <p className="para">Welcome to Eravist! We are passionate about creating **premium backpacks**, accessories, and pocket bags that combine style, functionality, and durability. Our mission is to provide **high-quality products** that make everyday life easier and more organized for our customers.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Our Story and Brand Heritage</h2> {/* تحسين العنوان */}
                        <p className="para">Eravist started with a simple idea: to design backpacks and accessories that meet the needs of modern travelers, students, and professionals. Over the years, we have grown into a trusted brand known for **quality, innovation, and customer satisfaction**. Every product we create is carefully designed with attention to detail and built to last.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Eravist Core Mission</h2> {/* تحسين العنوان */}
                        <p className="para">Our mission is to provide functional, stylish, and **durable products** that enhance your daily life. We believe that great design and practicality should go hand in hand, and every product we offer is crafted to meet that standard.</p>
                    </div>

                    <div className="service"  id='history'>
                        <h2 className="privacy-subtitle">3. Our Guiding Values (Quality and Innovation)</h2> {/* تحسين العنوان */}
                        <ul className="ul">
                            <li><strong>Quality:</strong> We prioritize **premium materials** and craftsmanship in every product.</li>
                            <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority. We strive to exceed expectations.</li>
                            <li><strong>Innovation:</strong> We continuously improve designs and explore new ideas to meet customer needs.</li>
                            <li><strong>Responsibility:</strong> We operate ethically and sustainably whenever possible.</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Our Product Range (Backpacks, Organizers, Accessories)</h2> {/* تحسين العنوان */}
                        <p className="para">Eravist offers a wide range of products including:</p>
                        <ul className="ul">
                            <li>**Premium backpacks** for work, school, and travel</li>
                            <li>Functional **pocket bags** and organizers</li>
                            <li>Stylish and durable accessories</li>
                        </ul>
                        <p className="para">Every item is designed with functionality, comfort, and style in mind, ensuring you get the best experience from your purchase.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Why Choose Eravist?</h2>
                        <ul className="ul">
                            <li>**High-quality materials** and craftsmanship</li>
                            <li>Stylish designs that fit your lifestyle</li>
                            <li>Reliable customer service and support</li>
                            <li>Easy returns and hassle-free shopping experience</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Contact Our Team</h2> {/* تحسين العنوان */}
                        <p className="para">We love hearing from our customers! Whether you have a question, feedback, or a suggestion, feel free to reach out:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para"><strong>Phone:</strong> +212 676 54 98 77</p>
                    </div>

                </div>

            </section>

            <Footer />

        </>


    )
}