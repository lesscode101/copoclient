import './../about.css';

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/french/Footer/Footer'

export default async function TermsPage() {
    const termsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Conditions Générales Officielles d'Eravist et Accord d'Utilisation du Site",
        "description": "Les Conditions Générales légales régissant l'utilisation du site web d'Eravist, l'inscription de compte, les politiques d'achat et les droits de propriété intellectuelle.",
        "url": "https://www.eravist.com/fr/a-propos/conditions-generales",
        "about": {
            "@type": "AboutPage",
            "name": "Conditions Générales"
        }
    };

    return (
        <>
            <title>Conditions Générales Officielles | Accord d'Utilisation et d'Achat Eravist</title>
            <meta
                name="description"
                content="Consultez les Conditions Générales officielles d'Eravist. Découvrez l'utilisation du site, les politiques d'achat, les paiements sécurisés, les droits de propriété intellectuelle et les responsabilités des utilisateurs."
            />
            <link
                rel="canonical"
                href="https://www.eravist.com/fr/a-propos/conditions-generales"
            />
            <link rel="alternate" href="https://www.eravist.com/en/about/privacy-policy" hrefLang="en" />
            <link rel="alternate" href="https://www.eravist.com/fr/about/privacy-policy" hrefLang="fr" />
            <link rel="alternate" href="https://www.eravist.com/ar/about/privacy-policy" hrefLang="ar" />

            {/* Ajout des données structurées (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />

            <HeaderSlim />
            <section className="abt-section">
                <div className="container">
                    <div className="service">
                        {/* 3. Optimisation de la balise H1 pour plus de détails */}
                        <h1 className="privacy-title">Conditions Générales Officielles et Accord Utilisateur d'Eravist</h1>
                        <p className="para">Bienvenue chez Eravist ! En accédant ou utilisant notre site web, eravist.com, vous acceptez de respecter et d'être lié par les **Conditions Générales** suivantes. Veuillez les lire attentivement avant d'utiliser nos services. Si vous n'êtes pas d'accord, vous ne devez pas utiliser notre site web ni effectuer d'achats.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Conditions Générales et Acceptation</h2> {/* Titre optimisé */}
                        <p className="para">Eravist est spécialisé dans la vente de sacs à dos premium, d'accessoires et de sacs de poche. Ces **Conditions Générales** régissent votre utilisation de notre site web, de nos produits et services. Elles s'appliquent également à tous les utilisateurs, y compris les visiteurs, clients et membres inscrits.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Inscription au Compte Utilisateur et Sécurité</h2> {/* Titre optimisé */}
                        <p className="para">Pour accéder à certaines fonctionnalités, vous devrez peut-être créer un compte. Vous êtes responsable de fournir des informations exactes et à jour et de maintenir la confidentialité de vos identifiants de connexion. Vous acceptez de nous informer immédiatement si vous suspectez une **utilisation non autorisée** de votre compte.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Commandes de Produits, Tarification et Paiements Sécurisés</h2> {/* Titre optimisé */}
                        <p className="para">En passant commande sur notre site web, vous acceptez de fournir des informations de paiement valides et nous autorisez à débiter le montant de la commande. Les prix et disponibilités sont sujets à changement sans préavis. Nous nous réservons le droit de refuser ou d'annuler des commandes à notre discrétion.</p>
                        <p className="para">Tous les paiements sont **traités de manière sécurisée** par des prestataires tiers de confiance, et nous ne stockons pas de données de paiement sensibles sur nos serveurs.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Expédition, Livraison et Risque de Perte</h2> {/* Titre optimisé */}
                        <p className="para">Nous nous efforçons d'expédier les commandes rapidement, mais les délais de livraison peuvent varier selon la localisation, le mode d'expédition et la disponibilité des produits. Les dates de livraison estimées sont fournies à titre indicatif et ne sont pas garanties. Nous ne sommes pas responsables des retards causés par les transporteurs ou les procédures douanières. **Le risque de perte** vous est transféré lors de la remise du colis au transporteur.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Résumé de la Politique de Retours, Remboursements et Échanges</h2> {/* Titre optimisé */}
                        <p className="para">Nous proposons une **politique de retour facile sous 30 jours**. Vous pouvez retourner les produits dans leur état d'origine et non utilisés pour un remboursement ou un échange. Les remboursements seront traités sur le mode de paiement d'origine dans un délai de 5 à 7 jours ouvrables après réception de l'article retourné.</p>
                        <ul className="ul">
                            <li>Les articles doivent être non utilisés et dans leur emballage d'origine</li>
                            <li>Les demandes de retour doivent être soumises via notre service client</li>
                            <li>Des frais d'expédition peuvent s'appliquer sauf si l'article est défectueux ou incorrect</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Comportement Utilisateur Acceptable et Interdictions</h2> {/* Titre optimisé */}
                        <p className="para">En utilisant notre site web, vous acceptez de ne pas :</p>
                        <ul className="ul">
                            <li>Utiliser le site à des **fins illégales** ou en violation de ces Conditions</li>
                            <li>Tenter d'accéder sans autorisation à d'autres comptes, systèmes ou réseaux</li>
                            <li>Télécharger ou transmettre du contenu nuisible, des virus ou des logiciels malveillants</li>
                            <li>Adopter un comportement perturbateur, abusif ou offensant</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Droits de Propriété Intellectuelle et Propriété</h2> {/* Titre optimisé */}
                        <p className="para">Tout le contenu sur Eravist.com, y compris les images, logos, textes et designs, est la propriété d'Eravist ou de ses concédants de licence. Vous ne pouvez pas copier, reproduire, distribuer ou utiliser un quelconque contenu sans autorisation écrite préalable. Toutes les **marques commerciales**, marques de service et logos sont la propriété de leurs propriétaires respectifs.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Exclusions de Garantie et Limitation de Responsabilité</h2> {/* Titre optimisé */}
                        <p className="para">Dans la mesure maximale permise par la loi, Eravist n'est pas responsable des dommages directs, indirects, accessoires ou consécutifs découlant de votre utilisation du site web, des produits ou services. Cela inclut les problèmes liés aux commandes, livraisons, retours ou services tiers. Le site web est fourni **"tel quel"** et **"selon disponibilité"**.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Liens Tiers et Services Externes</h2> {/* Titre optimisé */}
                        <p className="para">Notre site web peut inclure des liens vers des services tiers, des processeurs de paiement ou des entreprises de livraison. Nous ne contrôlons pas ces services et ne sommes pas responsables de leur contenu, pratiques de confidentialité ou performance. Nous encourageons les utilisateurs à consulter les conditions et politiques de ces tiers.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">10. Droit Applicable et Résolution des Litiges</h2> {/* Titre optimisé */}
                        <p className="para">Ces Conditions Générales sont régies par les lois de **[Votre Pays/État]**. Tout litige découlant de ces conditions ou de votre utilisation de notre site web sera résolu conformément aux lois locales applicables.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">11. Modifications et Mises à Jour des Politiques</h2> {/* Titre optimisé */}
                        <p className="para">Nous nous réservons le droit de mettre à jour ou modifier ces Conditions Générales à tout moment. La dernière version sera toujours publiée sur notre site web, et votre utilisation continue constitue l'acceptation de tout changement. Nous vous encourageons à consulter régulièrement ces conditions.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">12. Informations de Contact pour les Demandes Légales</h2> {/* Titre optimisé */}
                        <p className="para">Pour toute question ou préoccupation concernant ces Conditions Générales, veuillez nous contacter :</p>
                        <p className="para"><strong>Email :</strong> support@eravist.com</p>
                        <p className="para"><strong>Adresse :</strong> Siège social d'Eravist, [Votre adresse ici]</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}