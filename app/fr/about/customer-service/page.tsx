import './../about.css'

// Assurez-vous d'importer les composants d'en-tête et de pied de page adaptés à la langue française si nécessaire, 
// sinon, gardez-les pour assurer le bon fonctionnement de l'application.
import HeaderSlim from '@/app/components/english/Header/HeaderSlim' 
import Footer from '@/app/components/french/Footer/Footer'

// ------------------------------------------
// METADONNÉES SEO (ADAPTÉES AU FRANÇAIS)
// ------------------------------------------
export const metadata = {
    // Traduction du titre de la page
    title: 'À propos d\'Eravist : Notre Mission, Nos Valeurs et Nos Sacs à Dos Premium',
    
    // Traduction de la description
    description: "Découvrez l'histoire d'Eravist, sa mission et son engagement envers la qualité. Nous fournissons des sacs à dos, organisateurs et accessoires haut de gamme, durables et conçus pour la vie moderne.",
    
    // Mise à jour des liens alternatifs (Hreflang) pour pointer vers les pages en français
    alternates: {
        canonical: 'https://www.eravist.com/fr/about', 
        languages: {
            'en': 'https://www.eravist.com/en/about',
            'fr': 'https://www.eravist.com/fr/about',
            'ar': 'https://www.eravist.com/ar/about',
            'x-default': 'https://www.eravist.com/fr/about',
        },
    },
};

export default async function CustomerPage() {
    return (
        <>
            <HeaderSlim />

            <section className="abt-section">
                <div className="container">
                    
                    {/* SECTION INTRODUCTIVE */}
                    <div className="service">
                        {/* H1 MIS À JOUR EN FRANÇAIS */}
                        <h1 className="privacy-title">Eravist : Notre Histoire, Notre Mission et Notre Engagement envers les Sacs à Dos Premium</h1>
                        
                        <p className="para">Bienvenue chez Eravist ! Notre passion est de créer des sacs à dos **premium**, des accessoires et des pochettes qui allient style, fonctionnalité et durabilité. Notre mission est de fournir des **produits de haute qualité** qui rendent la vie quotidienne de nos clients plus facile et mieux organisée.</p>
                    </div>

                    {/* SECTION 1: NOTRE HISTOIRE */}
                    <div className="service">
                        <h2 className="privacy-subtitle">1. Notre Histoire et l'Héritage de la Marque</h2>
                        <p className="para">Eravist est né d'une idée simple : concevoir des sacs à dos et des accessoires qui répondent aux besoins des voyageurs modernes, des étudiants et des professionnels. Au fil des ans, nous sommes devenus une marque de confiance, reconnue pour sa **qualité, son innovation et la satisfaction de ses clients**. Chaque produit que nous créons est méticuleusement conçu avec le souci du détail et bâti pour durer.</p>
                    </div>

                    {/* SECTION 2: NOTRE MISSION */}
                    <div className="service">
                        <h2 className="privacy-subtitle">2. La Mission Principale d'Eravist</h2>
                        <p className="para">Notre mission est de fournir des produits fonctionnels, élégants et **durables** qui améliorent votre vie quotidienne. Nous croyons qu'un excellent design et la praticité doivent aller de pair, et chaque produit que nous proposons est conçu pour répondre à cette norme.</p>
                    </div>

                    {/* SECTION 3: NOS VALEURS */}
                    <div className="service">
                        <h2 className="privacy-subtitle">3. Nos Valeurs Directrices (Qualité et Innovation)</h2>
                        <ul className="ul">
                            <li><strong>Qualité :</strong> Nous priorisons les **matériaux haut de gamme** et le savoir-faire dans chaque produit.</li>
                            <li><strong>Satisfaction Client :</strong> Votre bonheur est notre priorité absolue. Nous nous efforçons de dépasser vos attentes.</li>
                            <li><strong>Innovation :</strong> Nous améliorons continuellement les designs et explorons de nouvelles idées pour répondre aux besoins des clients.</li>
                            <li><strong>Responsabilité :</strong> Nous opérons de manière éthique et durable chaque fois que possible.</li>
                        </ul>
                    </div>
                    
                    {/* SECTION 4: NOTRE GAMME DE PRODUITS */}
                    <div className="service">
                        <h2 className="privacy-subtitle">4. Notre Gamme de Produits (Sacs à Dos, Organisateurs, Accessoires)</h2>
                        <p className="para">Eravist propose une large gamme de produits, y compris :</p>
                        <ul className="ul">
                            <li>**Sacs à dos premium** pour le travail, l'école et les voyages</li>
                            <li>**Pochettes et organisateurs** fonctionnels</li>
                            <li>Accessoires élégants et durables</li>
                        </ul>
                        <p className="para">Chaque article est conçu en tenant compte de la fonctionnalité, du confort et du style, vous assurant la meilleure expérience avec votre achat.</p>
                    </div>

                    {/* SECTION 5: POURQUOI NOUS CHOISIR */}
                    <div className="service">
                        <h2 className="privacy-subtitle">5. Pourquoi Choisir Eravist ?</h2>
                        <ul className="ul">
                            <li>**Matériaux de haute qualité** et savoir-faire exceptionnel</li>
                            <li>Designs élégants qui correspondent à votre style de vie</li>
                            <li>Service client et support fiables</li>
                            <li>Retours faciles et expérience d'achat sans tracas</li>
                        </ul>
                    </div>

                    {/* SECTION 6: CONTACT */}
                    <div className="service">
                        <h2 className="privacy-subtitle">6. Contacter Notre Équipe</h2>
                        <p className="para">Nous aimons avoir des nouvelles de nos clients ! Que vous ayez une question, un commentaire ou une suggestion, n'hésitez pas à nous contacter :</p>
                        <p className="para"><strong>Email :</strong> support@eravist.com</p>
                        <p className="para"><strong>Téléphone :</strong> +212 676 54 98 77</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}