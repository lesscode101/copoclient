import './../about.css'

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/english/Footer/Footer'

// ------------------------------------------
// 1. ADD METADATA FUNCTION
// ------------------------------------------
export const metadata = {
    title: 'About Eravist: Our Mission, Values, and Premium Backpacks',
    description: "Discover Eravist’s story, mission, and commitment to quality. We provide premium, durable backpacks, organizers, and accessories built for modern life.",
    alternates: {
        canonical: 'https://www.eravist.com/en/about',
        languages: {
            'en': 'https://www.eravist.com/en/about',
            'fr': 'https://www.eravist.com/fr/about',
            'ar': 'https://www.eravist.com/ar/about',
            'x-default': 'https://www.eravist.com/en/about',
        },
    },
};

export default async function CustomerPage() {
    return (
        <>
            <HeaderSlim />

            <section className="privacy-section">
                <div className="container">
                    <div className="service">
                        {/* 2. UPDATED H1 */}
                        <h1 className="privacy-title">Eravist: Our Story, Mission, and Commitment to Premium Backpacks</h1>
                        <p className="para">Welcome to Eravist! We are passionate about creating premium backpacks, accessories, and pocket bags that combine style, functionality, and durability. Our mission is to provide high-quality products that make everyday life easier and more organized for our customers.</p>
                    </div>

                    {/* ... rest of the content remains the same ... */}
                    
                    <div className="service">
                        <h2 className="privacy-subtitle">1. Our Story</h2>
                        <p className="para">Eravist started with a simple idea: to design backpacks and accessories that meet the needs of modern travelers, students, and professionals. Over the years, we have grown into a trusted brand known for quality, innovation, and customer satisfaction. Every product we create is carefully designed with attention to detail and built to last.</p>
                    </div>

                    {/* ... (Sections 2 to 5) ... */}

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Contact Us</h2>
                        <p className="para">We love hearing from our customers! Whether you have a question, feedback, or a suggestion, feel free to reach out:</p>
                        <p className="para"><strong>Email:</strong> support@eravist.com</p>
                        <p className="para"><strong>Phone:</strong>+212 676 54 98 77</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}