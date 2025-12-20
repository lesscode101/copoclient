import './../about.css';
import HeaderSlim from '@/app/components/english/Header/HeaderSlim';
import Footer from '@/app/components/french/Footer/Footer'

export default async function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Comment passer une commande ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parcourez nos produits, ajoutez les articles à votre panier, puis finalisez le paiement en entrant vos informations de livraison et de paiement."
                }
            },
            {
                "@type": "Question",
                "name": "Quels moyens de paiement acceptez-vous ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous acceptons les principales cartes de crédit/débit, PayPal et d’autres passerelles de paiement sécurisées."
                }
            },
            {
                "@type": "Question",
                "name": "Expédiez-vous à l’international ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, nous expédions dans la plupart des pays du monde. Les frais et délais varient selon la destination."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle est votre politique de retour ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vous pouvez retourner les articles dans un délai de 30 jours s’ils sont inutilisés, dans leur emballage d’origine et en bon état."
                }
            },
            {
                "@type": "Question",
                "name": "Comment mes informations personnelles sont-elles protégées ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous stockons les informations personnelles de manière sécurisée et les utilisons uniquement pour traiter les commandes et améliorer l’expérience client."
                }
            }
        ]
    };

    return (
        <>
            <>
                <title>FAQ | Questions Fréquemment Posées | Eravist</title>
                <meta
                    name="description"
                    content="Trouvez des réponses rapides aux questions courantes concernant les commandes, la livraison, les retours, les paiements et les services Eravist."
                />
                <link rel="canonical" href="https://www.eravist.com/fr/about/faq" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </>

            <HeaderSlim />

            <section className="abt-section">
                <div className="container">

                    <div className="service">
                        <h1 className="privacy-title">Foire Aux Questions (FAQ)</h1>
                        <p className="para">
                            Bienvenue sur la page FAQ d’Eravist ! Vous trouverez ici les réponses aux questions les plus fréquentes concernant nos produits, commandes, livraisons, retours et plus encore. Si vous ne trouvez pas votre réponse, n’hésitez pas à contacter notre équipe de support.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">1. Commandes & Paiements</h2>

                        <h3 className="privacy-smtitle">1.1 Comment passer une commande ?</h3>
                        <p className="para">
                            Pour passer une commande, parcourez nos produits, sélectionnez les articles souhaités et cliquez sur « Ajouter au panier ». Une fois prêt, accédez à votre panier et finalisez le paiement.
                        </p>

                        <h3 className="privacy-smtitle">1.2 Quels moyens de paiement acceptez-vous ?</h3>
                        <p className="para">
                            Nous acceptons les principales cartes de crédit/débit, PayPal et d’autres passerelles de paiement sécurisées. Vos informations de paiement ne sont jamais stockées sur nos serveurs.
                        </p>

                        <h3 className="privacy-smtitle">1.3 Puis-je modifier ou annuler ma commande ?</h3>
                        <p className="para">
                            Les commandes peuvent être modifiées ou annulées uniquement si elles n'ont pas encore été expédiées. Contactez-nous dès que possible si vous devez effectuer une modification.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">2. Livraison & Expédition</h2>

                        <h3 className="privacy-smtitle">2.1 Combien de temps prend la livraison ?</h3>
                        <p className="para">
                            Les délais varient selon votre emplacement et le mode d’expédition. Les estimations sont fournies à la caisse mais peuvent varier, notamment pour les commandes internationales.
                        </p>

                        <h3 className="privacy-smtitle">2.2 Expédiez-vous à l’international ?</h3>
                        <p className="para">
                            Oui, nous livrons dans la plupart des pays. Les frais, délais et droits de douane peuvent varier.
                        </p>

                        <h3 className="privacy-smtitle">2.3 Puis-je suivre ma commande ?</h3>
                        <p className="para">
                            Une fois expédiée, vous recevrez un numéro de suivi par e-mail que vous pourrez utiliser sur le site du transporteur.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">3. Retours & Remboursements</h2>

                        <h3 className="privacy-smtitle">3.1 Quelle est votre politique de retour ?</h3>
                        <p className="para">
                            Nous acceptons les retours sous 30 jours si les articles sont inutilisés et dans leur emballage d’origine.
                        </p>

                        <h3 className="privacy-smtitle">3.2 Comment retourner un produit ?</h3>
                        <p className="para">
                            Contactez notre service client pour demander un retour. Vous recevrez des instructions pour renvoyer votre article.
                        </p>

                        <h3 className="privacy-smtitle">3.3 Quand recevrai-je mon remboursement ?</h3>
                        <p className="para">
                            Les remboursements sont traités sous 5 à 7 jours ouvrables après réception et inspection du produit retourné.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">4. Produits</h2>

                        <h3 className="privacy-smtitle">4.1 Vos produits sont-ils authentiques ?</h3>
                        <p className="para">
                            Oui, tous nos produits sont 100 % authentiques et de haute qualité. Nous travaillons uniquement avec des fournisseurs fiables.
                        </p>

                        <h3 className="privacy-smtitle">4.2 Comment entretenir mon produit ?</h3>
                        <p className="para">
                            Nous fournissons des instructions d’entretien avec chaque produit. En général, nettoyez délicatement avec un chiffon humide et évitez les produits chimiques.
                        </p>

                        <h3 className="privacy-smtitle">4.3 Offrez-vous des garanties ?</h3>
                        <p className="para">
                            Oui, nous offrons une garantie limitée contre les défauts de fabrication. Consultez la page du produit pour plus de détails.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">5. Comptes & Confidentialité</h2>

                        <h3 className="privacy-smtitle">5.1 Ai-je besoin d’un compte pour commander ?</h3>
                        <p className="para">
                            Non, mais créer un compte facilite le suivi des commandes, la gestion des adresses et des préférences.
                        </p>

                        <h3 className="privacy-smtitle">5.2 Comment mes informations personnelles sont-elles protégées ?</h3>
                        <p className="para">
                            Vos données sont stockées de manière sécurisée et ne sont utilisées que pour traiter vos commandes et améliorer votre expérience d’achat.
                        </p>

                        <h3 className="privacy-smtitle">5.3 Puis-je me désabonner des newsletters ?</h3>
                        <p className="para">
                            Oui, vous pouvez vous désabonner à tout moment via le lien présent dans nos e-mails ou en nous contactant.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">6. Assistance & Contact</h2>

                        <h3 className="privacy-smtitle">6.1 Comment contacter le support client ?</h3>
                        <p className="para">
                            Vous pouvez nous contacter à l’adresse <strong>support@eravist.com</strong> ou via notre formulaire de contact. Nous répondons sous 24 à 48 heures.
                        </p>

                        <h3 className="privacy-smtitle">6.2 Que faire si j’ai une réclamation ?</h3>
                        <p className="para">
                            Si vous rencontrez un problème, contactez-nous immédiatement. Nous nous engageons à résoudre toute réclamation de manière rapide et équitable.
                        </p>
                    </div>

                    <div className="service">
                        <h2 className="privacy-subtitle">7. Divers</h2>

                        <h3 className="privacy-smtitle">7.1 Les prix sont-ils définitifs ?</h3>
                        <p className="para">
                            Les prix affichés incluent les taxes applicables, sauf indication contraire. Nous pouvons mettre à jour les prix à tout moment.
                        </p>

                        <h3 className="privacy-smtitle">7.2 Proposez-vous des remises ou promotions ?</h3>
                        <p className="para">
                            Oui, nous proposons parfois des promotions ou des codes de réduction, soumis à des conditions spécifiques.
                        </p>

                        <h3 className="privacy-smtitle">7.3 Les FAQ peuvent-elles changer ?</h3>
                        <p className="para">
                            Oui, cette page peut être mise à jour en fonction de nos produits, politiques ou services. Revisitez-la régulièrement.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
