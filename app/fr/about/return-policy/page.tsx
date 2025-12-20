import './../about.css';

import HeaderSlim from '@/app/components/english/Header/HeaderSlim'
import Footer from '@/app/components/french/Footer/Footer'

export default async function ReturnPolicyPage() {
    // 1. Données structurées (Schema) pour la politique de retours (ReturnPolicy)
    const returnPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Politique de Retours, Remboursements et Échanges Eravist",
        "description": "Guide complet de la fenêtre de retour de 30 jours d'Eravist, conditions d'éligibilité aux remboursements et procédures d'échange.",
        "url": "https://www.eravist.com/fr/a-propos/retours-echanges",
        "mainEntity": {
            "@type": "ReturnPolicy",
            "description": "Politique de retours et remboursements d'Eravist, autorisant 30 jours à partir de la livraison.",
            "url": "https://www.eravist.com/fr/a-propos/retours-echanges",
            // Durée autorisée pour le retour (30 jours après réception)
            "returnPolicyCountry": "Mondial",
            "returnPolicyCategory": "http://schema.org/FullRefund",
            "merchantReturnDays": 30,
            "returnFees": "http://schema.org/CustomerPays", // Le client paie généralement les frais d'expédition
            "inStoreReturnsAllowed": false, // Nous supposons qu'il s'agit d'une boutique en ligne
            "returnMethod": "http://schema.org/ReturnByMail",
            "customerRemorseReturnFees": {
                "@type": "MonetaryAmount",
                "currency": "MAD",
                "value": "0" // Frais de gestion de retour nuls, seuls les frais d'expédition sont à la charge du client
            },
            "itemCondition": "http://schema.org/NewCondition", // Le produit doit être dans son état d'origine
            "refundType": "http://schema.org/Money",
            // Ajout d'une propriété pour garantir la précision
            "applicableProductType": "http://schema.org/Product"
        }
    };


    return (
        <>
            {/* 2. Optimisation de la balise de titre (Title Tag) et de la description (Meta Description) */}
            <title>Politique de Retour & Remboursement sous 30 Jours | Échanges Eravist</title>
            <meta
                name="description"
                content="Eravist propose une politique de retour et remboursement sous 30 jours sur les articles non utilisés. Apprenez à initier un retour ou un échange, et consultez nos règles détaillées d'expédition et de remboursement."
            />
            <link rel="canonical" href="https://www.eravist.com/fr/a-propos/retours-echanges" />
            
            {/* Ajout des données structurées (Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(returnPolicySchema) }}
            />

            <HeaderSlim />

            <section className="abt-section">
                <div className="container">
                    <div className="service">
                        {/* 3. Optimisation de la balise H1 pour plus d'exhaustivité */}
                        <h1 className="privacy-title">Politique de Retours, Remboursements et Échanges sous 30 Jours d'Eravist</h1>
                        <p className="para">Chez Eravist, nous souhaitons que vous soyez entièrement satisfait de votre achat. Notre **Politique de Retour & Remboursement sous 30 Jours** garantit un processus équitable et simple pour nos clients tout en maintenant des règles claires pour protéger les deux parties. Veuillez lire attentivement cette politique avant de faire un achat.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Éligibilité et Délai de Retour de 30 Jours</h2> {/* Titre optimisé */}
                        <p className="para">Vous pouvez retourner les produits dans un délai de **30 jours** suivant la réception de votre commande, sous réserve des conditions suivantes :</p>
                        <ul className="ul">
                            <li>Les articles doivent être **non utilisés, non portés et dans leur état d'origine**.</li>
                            <li>Les produits doivent être retournés dans leur emballage d'origine avec toutes les étiquettes, accessoires et notices.</li>
                            <li>Les produits personnalisés ou sur mesure ne peuvent pas être retournés, sauf s'ils sont défectueux.</li>
                            <li>Les articles en solde ou promotionnels peuvent être soumis à des restrictions de retour spécifiques indiquées au moment de l'achat.</li>
                        </ul>
                        <p className="para">Les produits ne répondant pas à ces exigences peuvent ne pas être acceptés pour retour ou peuvent être soumis à des frais de restockage.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Comment Initier un Retour ou un Échange</h2> {/* Titre optimisé */}
                        <p className="para">Pour initier un retour ou un échange, veuillez suivre ces étapes :</p>
                        <ul className="ul">
                            <li>Contactez notre service client à **support@eravist.com** ou via le formulaire de contact de notre site web.</li>
                            <li>Indiquez votre numéro de commande et la raison du retour/échange.</li>
                            <li>Notre équipe vous fournira des instructions et une autorisation de retour de marchandise (RMA) si nécessaire.</li>
                        </ul>
                        <p className="para">Veuillez ne pas renvoyer d'articles sans approbation préalable, car les retours non autorisés peuvent être refusés ou retardés.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Expédition et Coûts du Retour</h2> {/* Titre optimisé */}
                        <p className="para">Les clients sont responsables des frais d'expédition pour les retours standards (changement d'avis) sauf si l'article est défectueux ou incorrect. Nous recommandons d'utiliser un mode d'expédition avec suivi pour garantir l'arrivée sûre du colis. Eravist n'est pas responsable des colis perdus ou endommagés lors du retour.</p>
                        <p className="para">Pour les articles défectueux ou incorrects, nous fournirons une étiquette d'expédition prépayée et prendrons en charge les frais d'expédition.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Traitement et Délai du Remboursement</h2> {/* Titre optimisé */}
                        <p className="para">Une fois que nous avons reçu et inspecté le produit retourné, votre remboursement sera traité selon les règles suivantes :</p>
                        <ul className="ul">
                            <li>Les remboursements seront effectués sur le mode de paiement d'origine dans un délai de **5 à 7 jours ouvrés** après l'inspection.</li>
                            <li>Les frais d'expédition (payés lors de l'achat initial) ne sont pas remboursables, sauf pour les articles défectueux ou incorrects.</li>
                            <li>Des remboursements partiels peuvent être appliqués si l'article n'est pas retourné dans son état d'origine ou s'il manque des pièces (frais de restockage).</li>
                        </ul>
                        <p className="para">Vous recevrez une confirmation par email une fois votre remboursement traité.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Échanges et Commandes de Remplacement</h2> {/* Titre optimisé */}
                        <p className="para">Si vous souhaitez échanger un produit pour une taille, une couleur ou un article différent, veuillez suivre le processus de retour ci-dessus. Les échanges sont soumis à la disponibilité des produits. Des frais d'expédition pour les échanges peuvent s'appliquer, et le nouvel article sera expédié une fois l'article retourné reçu et inspecté.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Gestion des Articles Défectueux ou Endommagés</h2> {/* Titre optimisé */}
                        <p className="para">Si vous recevez un article défectueux ou endommagé, veuillez nous en informer dans un délai de **7 jours** après la livraison. Nous allons :</p>
                        <ul className="ul">
                            <li>Fournir une étiquette d'expédition de retour prépayée.</li>
                            <li>Proposer un remboursement intégral ou un article de remplacement sans frais supplémentaires.</li>
                            <li>Garantir une gestion rapide des articles défectueux pour minimiser les désagréments.</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Articles Non Retourables (Vente Finale)</h2> {/* Titre optimisé */}
                        <p className="para">Certains articles ne peuvent pas être retournés pour des raisons de sécurité, d'hygiène ou de personnalisation. Ceux-ci incluent :</p>
                        <ul className="ul">
                            <li>Les produits personnalisés ou sur mesure (sauf s'ils sont défectueux)</li>
                            <li>Les cartes-cadeaux ou le contenu numérique téléchargeable</li>
                            <li>Les articles marqués **« Vente Finale »** ou **« Non Retourables »**</li>
                        </ul>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">8. Politique d'Annulation de Commande</h2>
                        <p className="para">Vous pouvez annuler votre commande avant son expédition. Une fois l'article expédié, il ne peut plus être annulé mais peut être retourné conformément à la politique de retours. Pour annuler une commande, contactez immédiatement notre service client.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">9. Retours Internationaux et Droits de Douane</h2> {/* Titre optimisé */}
                        <p className="para">Pour les commandes internationales, les retours sont soumis aux mêmes règles de délai de 30 jours et d'éligibilité. Les clients sont responsables des frais d'expédition du retour, sauf si l'article est défectueux ou incorrect. Les droits de douane ou taxes ne sont pas remboursables.</p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">10. Informations de Contact pour le Support</h2> {/* Titre optimisé */}
                        <p className="para">Pour toute question ou pour initier un retour, veuillez contacter notre service client dédié :</p>
                        <p className="para"><strong>Email :</strong> support@eravist.com</p>
                        <p className="para"><strong>Adresse :</strong> Siège social d'Eravist, [Votre adresse ici]</p>
                        <p className="para">Nous nous efforçons de répondre dans un délai de 24 à 48 heures et de vous guider dans un processus de retour ou de remboursement sans heurts.</p>
                    </div>

                </div>
            </section>
            <Footer />

        </>

    );
}