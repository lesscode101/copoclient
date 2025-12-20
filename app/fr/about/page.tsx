import './about.css'

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/french/Footer/Footer'

export default async function AboutPage() {
    // 1. Données structurées (Schema) pour documenter l'identité de l'entreprise
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                // Classification de la page comme page de présentation
                "@type": "WebPage",
                "name": "L'Histoire d'Eravist, Notre Mission et Nos Sacs à Dos de Qualité",
                "description": "Découvrez l'engagement d'Eravist envers la qualité, l'innovation et la satisfaction client. Apprenez-en plus sur nos sacs à dos premium, accessoires et produits d'organisation.",
                "url": "https://www.eravist.com/fr/a-propos",
                "about": {
                    "@type": "AboutPage",
                    "name": "À Propos"
                }
            },
            {
                // Définition de l'entité/organisation (Eravist)
                "@type": "Organization",
                "name": "Eravist",
                "url": "https://www.eravist.com/",
                "logo": "https://www.eravist.com/images/logo.png", // À remplacer par le lien réel du logo
                "sameAs": [
                    // Ajoutez ici les liens des réseaux sociaux (Facebook, Instagram, etc.)
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
            {/* 2. Optimisation de la balise de titre (Title Tag) et de la description (Meta Description) */}
            <title>À Propos d'Eravist : Notre Mission, Nos Valeurs et Nos Sacs à Dos Premium</title>
            <meta
                name="description"
                content="Découvrez l'histoire d'Eravist, notre mission et notre engagement envers la qualité. Nous proposons des sacs à dos, organisateurs et accessoires premium et durables conçus pour la vie moderne."
            />
            {/* 3. Ajout des balises canoniques et des langues alternatives (hreflang) */}
            
            {/* Balise canonique (version principale de cette page) */}
            <link
                rel="canonical"
                href="https://www.eravist.com/fr/a-propos"
            />
            
            {/* Définition des langues alternatives (hreflang) */}
            <link rel="alternate" href="https://www.eravist.com/en/about" hrefLang="en" />
            <link rel="alternate" href="https://www.eravist.com/fr/a-propos" hrefLang="fr" />
            <link rel="alternate" href="https://www.eravist.com/ar/about" hrefLang="ar" />
            <link rel="alternate" href="https://www.eravist.com/fr/a-propos" hrefLang="x-default" />

            {/* Ajout des données structurées (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />

            <HeaderSlim />

            <section className="abt-section">
                <div className="container">
                    <div className="service">
                        {/* 4. Optimisation de la balise H1 */}
                        <h1 className="privacy-title">À Propos d'Eravist : Notre Histoire, Notre Mission et Notre Engagement pour la Qualité</h1>
                        <p className="para">Bienvenue chez Eravist ! Nous sommes passionnés par la création de **sacs à dos premium**, d'accessoires et de sacs de poche qui allient style, fonctionnalité et durabilité. Notre mission est de fournir **des produits de haute qualité** qui rendent la vie quotidienne plus facile et mieux organisée pour nos clients.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Notre Histoire et l'Héritage de la Marque</h2> {/* Titre optimisé */}
                        <p className="para">Eravist a commencé avec une idée simple : concevoir des sacs à dos et accessoires qui répondent aux besoins des voyageurs modernes, des étudiants et des professionnels. Au fil des ans, nous sommes devenus une marque de confiance reconnue pour **la qualité, l'innovation et la satisfaction client**. Chaque produit que nous créons est soigneusement conçu avec une attention aux détails et construit pour durer.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. La Mission Fondamentale d'Eravist</h2> {/* Titre optimisé */}
                        <p className="para">Notre mission est de fournir des produits fonctionnels, stylés et **durables** qui améliorent votre vie quotidienne. Nous croyons que le grand design et la praticité doivent aller de pair, et chaque produit que nous proposons est conçu pour répondre à cette norme.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Nos Valeurs Directrices (Qualité et Innovation)</h2> {/* Titre optimisé */}
                        <ul className="ul">
                            <li><strong>Qualité :</strong> Nous privilégions **les matériaux premium** et l'artisanat dans chaque produit.</li>
                            <li><strong>Satisfaction Client :</strong> Votre bonheur est notre priorité absolue. Nous nous efforçons de dépasser vos attentes.</li>
                            <li><strong>Innovation :</strong> Nous améliorons continuellement nos designs et explorons de nouvelles idées pour répondre aux besoins des clients.</li>
                            <li><strong>Responsabilité :</strong> Nous fonctionnons de manière éthique et durable autant que possible.</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Notre Gamme de Produits (Sacs à Dos, Organisateurs, Accessoires)</h2> {/* Titre optimisé */}
                        <p className="para">Eravist propose une large gamme de produits incluant :</p>
                        <ul className="ul">
                            <li>**Sacs à dos premium** pour le travail, l'école et les voyages</li>
                            <li>**Sacs de poche** fonctionnels et organisateurs</li>
                            <li>Accessoires stylés et durables</li>
                        </ul>
                        <p className="para">Chaque article est conçu en pensant à la fonctionnalité, au confort et au style, vous garantissant la meilleure expérience d'achat.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Pourquoi Choisir Eravist ?</h2>
                        <ul className="ul">
                            <li>**Matériaux de haute qualité** et artisanat soigné</li>
                            <li>Designs stylés qui s'adaptent à votre mode de vie</li>
                            <li>Service client fiable et support efficace</li>
                            <li>Retours faciles et expérience d'achat sans tracas</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Contactez Notre Équipe</h2> {/* Titre optimisé */}
                        <p className="para">Nous aimons entendre nos clients ! Que vous ayez une question, un retour ou une suggestion, n'hésitez pas à nous contacter :</p>
                        <p className="para"><strong>Email :</strong> support@eravist.com</p>
                        <p className="para"><strong>Téléphone :</strong> +212 676 54 98 77</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}