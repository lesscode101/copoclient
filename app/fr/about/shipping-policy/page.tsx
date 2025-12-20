import './../about.css'

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/french/Footer/Footer'

export default async function ShippingPolicyPage() {
    // 1. Données structurées (Schema) pour la politique d'expédition (ShippingPolicy)
    const shippingPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Politique d'Expédition Eravist : Délais de Livraison et Suivi de Commande",
        "description": "Consultez la politique d'expédition officielle d'Eravist couvrant les délais de traitement, les estimations de livraison standard et express, les coûts et les informations douanières internationales.",
        "url": "https://www.eravist.com/fr/a-propos/politique-expedition",
        "mainEntity": {
            "@type": "ShippingPolicy",
            // Définition des délais de traitement (1-3 jours ouvrables)
            "shippingRate": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "Calculé à la caisse" // Indication que la valeur est calculée dynamiquement
            },
            "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY",
                "unitText": "jours ouvrables"
            },
            // Définition des délais d'expédition standard (5-10 jours)
            "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 5,
                "maxValue": 10,
                "unitCode": "DAY",
                "unitText": "jours ouvrables (Expédition Standard)"
            },
            // Ajout d'informations sur les régions géographiques (au moins préciser que l'expédition est mondiale)
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "Mondial",
            },
            "shippingType": "http://schema.org/Delivery",
            "offersShippingForFree": "Des promotions de livraison gratuite sont occasionnellement disponibles."
        }
    };

    return (
        <>
            {/* 2. Optimisation de la balise de titre (Title Tag) et de la description (Meta Description) */}
            <title>Politique d'Expédition Eravist | Délais de Livraison, Suivi et Coûts</title>
            <meta
                name="description"
                content="Obtenez tous les détails sur la Politique d'Expédition d'Eravist : traitement des commandes (1-3 jours), délais de livraison (Standard/Express), suivi et gestion des droits de douane internationaux."
            />
            <link
                rel="canonical"
                href="https://www.eravist.com/fr/a-propos/politique-expedition"
            />
            {/* Ajout des données structurées (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(shippingPolicySchema) }}
            />
            
            <HeaderSlim />

            <section className="abt-section shipping-policy">
                <div className="container">
                    <div className="service">
                        {/* 3. Optimisation de la balise H1 */}
                        <h1 className="privacy-title">Politique d'Expédition Eravist : Détails de Livraison et Suivi</h1>
                        <p className="para">Chez Eravist, nous nous engageons à livrer vos commandes en toute sécurité, efficacement et à temps. Cette **Politique d'Expédition** explique nos méthodes d'expédition, délais de livraison, coûts et autres détails importants afin que vous sachiez à quoi vous attendre lorsque vous passez commande.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Délai de Traitement des Commandes</h2> {/* Titre optimisé */}
                        <p className="para">Toutes les commandes sont traitées dans un délai de **1 à 3 jours ouvrables** (week-ends et jours fériés non compris) après confirmation de la commande. Pendant les périodes de pointe ou les promotions, les délais de traitement peuvent être légèrement plus longs. Vous recevrez un email de confirmation une fois votre commande traitée et prête à être expédiée.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Méthodes d'Expédition et Délais de Livraison Estimés</h2> {/* Titre optimisé */}
                        <p className="para">Nous proposons plusieurs options d'expédition selon votre localisation et vos préférences. Les délais de livraison sont estimés et commencent *après* le délai de traitement de 1 à 3 jours ouvrables :</p>
                        <ul className="ul">
                            <li><strong>Expédition Standard :</strong> Livraison généralement effectuée sous **5 à 10 jours ouvrables**.</li>
                            <li><strong>Expédition Express :</strong> Livraison généralement effectuée sous **2 à 5 jours ouvrables**.</li>
                            <li><strong>Expédition Internationale :</strong> Les délais de livraison varient selon le pays, généralement de **7 à 21 jours ouvrables** selon les procédures douanières et les transporteurs locaux.</li>
                        </ul>
                        <p className="para">Veuillez noter qu'il s'agit de délais de livraison estimés et non garantis. Des retards peuvent survenir en raison de conditions météorologiques, de problèmes des transporteurs ou du dédouanement.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Calcul des Frais d'Expédition</h2> {/* Titre optimisé */}
                        <p className="para">Les frais d'expédition sont calculés à la caisse en fonction du poids, de la taille, de la destination et du mode d'expédition de votre commande. Occasionnellement, nous pouvons proposer **des promotions de livraison gratuite**, qui seront automatiquement appliquées à la caisse si vous êtes éligible. Le coût d'expédition final et précis sera affiché avant que vous ne confirmiez votre paiement.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Suivi de Commande et Notifications</h2> {/* Titre optimisé */}
                        <p className="para">Une fois votre commande expédiée, vous recevrez un numéro de suivi par email. Vous pourrez utiliser ce numéro pour suivre votre colis sur le site du transporteur. Veuillez prévoir **24 heures** pour que les informations de suivi soient mises à jour et visibles dans le système du transporteur.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Exactitude de l'Adresse de Livraison</h2> {/* Titre optimisé */}
                        <p className="para">Veuillez vous assurer que votre adresse de livraison est **correcte et complète**. Eravist n'est pas responsable des retards, des colis perdus ou des échecs de livraison causés par des adresses incorrectes fournies par le client. Si vous devez mettre à jour votre adresse, contactez-nous dès que possible avant que votre commande ne soit expédiée.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Commandes Internationales : Douane, Droits et Taxes</h2> {/* Titre optimisé */}
                        <p className="para">Pour les commandes internationales, **des droits de douane, taxes ou frais d'importation** peuvent s'appliquer selon le pays de destination. Ces frais sont **à la charge du client**. Eravist n'est pas responsable des retards ou des frais supplémentaires imposés par les autorités douanières.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Gestion des Colis Endommagés ou Perdus</h2> {/* Titre optimisé */}
                        <p className="para">Si votre commande arrive endommagée ou est perdue pendant l'expédition, veuillez contacter immédiatement notre service client avec des photos des dommages et les détails de votre commande. Nous collaborerons avec le transporteur pour résoudre le problème et, le cas échéant, fournir un remplacement ou un remboursement.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Expéditions Multiples pour une Commande Unique</h2> {/* Titre optimisé */}
                        <p className="para">Dans certains cas, les articles d'une même commande peuvent être expédiés séparément pour assurer une livraison plus rapide. Les frais d'expédition ne sont pas affectés, sauf indication contraire lors du paiement.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Informations de Contact pour le Support d'Expédition</h2> {/* Titre optimisé */}
                        <p className="para">Si vous avez des questions concernant votre expédition, l'état de votre livraison ou les options d'expédition, veuillez contacter notre équipe de support :</p>
                        <p className="para"><strong>Email :</strong> support@eravist.com</p>
                        <p className="para"><strong>Adresse :</strong> Siège social d'Eravist, [Votre adresse ici]</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}