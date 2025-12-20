import './../about.css';
import HeaderSlim from '@/app/components/english/Header/HeaderSlim';
import Footer from '@/app/components/french/Footer/Footer'
import Head from 'next/head';

export default async function PrivacyPage() {
    const privacySchema = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        "name": "Eravist Privacy Policy",
        "url": "https://www.eravist.com/en/about/privacy",
        "datePublished": "2025-12-12",
        "publisher": {
            "@type": "Organization",
            "name": "Eravist",
            "url": "https://www.eravist.com"
        }
    };

    return (
        <>
            <>
                <title>Privacy Policy | Eravist</title>
                <meta
                    name="description"
                    content="Read Eravist’s Privacy Policy to understand how we collect, use, and protect your personal information when you shop on our platform."
                />
                <link rel="canonical" href="https://www.eravist.com/en/about/privacy" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
                />
            </>

            <HeaderSlim />

            <section className="abt-section">
                <div class="container">
                    <div class="service">
                        <h1 class="privacy-title">Politique de confidentialité d'Eravist : Protection de vos données personnelles</h1>
                        <p class="para">Chez Eravist, protéger votre vie privée et vos informations personnelles est une priorité absolue. Cette politique de confidentialité explique en détail comment nous collectons, utilisons et protégeons vos données lorsque vous interagissez avec notre site web, créez un compte, effectuez des achats ou vous abonnez à nos newsletters. En utilisant notre site et nos services, vous consentez aux pratiques décrites dans cette politique.</p>
                        <p class="para">Nous nous engageons à la transparence et vous encourageons à consulter régulièrement cette politique de confidentialité. Des modifications peuvent survenir de temps à autre, et votre utilisation continue de notre site constitue une acceptation de ces changements.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">1. Introduction</h2>
                        <p class="para">Eravist exploite eravist.com, offrant des sacs à dos premium, des accessoires et des pochettes. Nous respectons votre vie privée et nous nous engageons à protéger les informations personnelles que vous fournissez lors de l'utilisation de nos services.</p>
                        <p class="para">Cette politique de confidentialité décrit les informations que nous collectons, comment elles sont utilisées et les mesures que nous prenons pour garantir la protection de vos données. Notre objectif est de fournir une expérience sûre et sécurisée lors de vos achats ou de la navigation sur notre site.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">2. Collecte de données</h2>
                        <h3 class="privacy-smtitle">2.1 Informations personnelles collectées</h3>
                        <p class="para">Nous collectons des informations personnelles directement auprès de vous lorsque vous :</p>
                        <ul class="ul">
                            <li>Créez un compte ou vous connectez</li>
                            <li>Effectuez une commande ou demandez un produit</li>
                            <li>Vous abonnez à notre newsletter ou à des emails promotionnels</li>
                            <li>Utilisez notre formulaire de contact ou nos canaux de support client</li>
                        </ul>
                        <p class="para">Les types d’informations personnelles que nous pouvons collecter incluent :</p>
                        <ul class="ul">
                            <li>Nom complet, adresse email et numéro de téléphone</li>
                            <li>Adresses de livraison et de facturation</li>
                            <li>Identifiants de connexion, mots de passe et informations de sécurité</li>
                            <li>Préférences pour les newsletters et le marketing</li>
                        </ul>
                        <p class="para">Fournir ces informations est facultatif, mais certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement si ces données ne sont pas fournies.</p>

                        <h3 class="privacy-smtitle">2.2 Collecte automatique de données (Cookies et suivi)</h3>
                        <p class="para">Nous collectons automatiquement certaines données lorsque vous visitez notre site web. Cela nous aide à améliorer votre expérience, fournir de meilleurs services et maintenir la sécurité. Par exemple :</p>
                        <ul class="ul">
                            <li>Adresse IP et informations sur l'appareil</li>
                            <li>Type et version du navigateur</li>
                            <li>Système d’exploitation et résolution d’écran</li>
                            <li>Pages visitées, durée de visite et chemins de navigation</li>
                            <li>Sites web ou sources de référence</li>
                        </ul>
                        <p class="para">Ces informations sont collectées à l’aide de cookies, pixels de suivi et technologies similaires. Vous pouvez contrôler les cookies via les paramètres de votre navigateur, bien que certaines fonctionnalités du site puissent être limitées en conséquence.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">3. Utilisation des données et partage d’informations</h2>
                        <p class="para">Nous utilisons vos données personnelles et automatiques aux fins suivantes :</p>
                        <ul class="ul">
                            <li>Traitement des commandes, gestion des livraisons et support client</li>
                            <li>Maintien et gestion de votre compte utilisateur</li>
                            <li>Envoi de newsletters, promotions et mises à jour importantes</li>
                            <li>Amélioration des performances du site, de l’ergonomie et de l’expérience personnalisée</li>
                            <li>Prévention de la fraude, conformité et maintien de la sécurité</li>
                        </ul>
                        <p class="para">Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services de confiance qui nous aident à gérer notre site, livrer des produits ou fournir d’autres services, comme les processeurs de paiement, les fournisseurs d’emails et les sociétés de livraison.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">4. Cookies et technologies de suivi</h2>
                        <p class="para">Notre site utilise des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation. Les cookies nous permettent de mémoriser vos préférences, fournir un contenu personnalisé et analyser le trafic du site.</p>
                        <ul class="ul">
                            <li>Cookies essentiels : requis pour le fonctionnement du site</li>
                            <li>Cookies de performance : nous aident à comprendre l’utilisation du site et à améliorer les services</li>
                            <li>Cookies fonctionnels : mémorisent vos préférences et paramètres</li>
                            <li>Cookies publicitaires : affichent des offres personnalisées (si vous avez accepté)</li>
                        </ul>
                        <p class="para">Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur. Veuillez noter que certaines fonctionnalités peuvent ne pas fonctionner correctement si les cookies sont désactivés.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">5. Durée de conservation des données</h2>
                        <p class="para">Nous conservons les informations personnelles uniquement aussi longtemps que nécessaire pour les opérations commerciales, les obligations légales ou les intérêts légitimes. Lorsqu’elles ne sont plus nécessaires, nous supprimons ou anonymisons les données de manière sécurisée.</p>
                        <p class="para">L’historique de vos commandes, les détails de votre compte et vos préférences sont stockés en toute sécurité pour garantir une expérience d’achat fluide, mais vous pouvez demander leur suppression à tout moment (sous réserve des obligations légales applicables).</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">6. Mesures de sécurité des données</h2>
                        <p class="para">Nous mettons en œuvre des mesures techniques, administratives et physiques robustes pour protéger vos informations personnelles. Bien qu’aucun système ne soit entièrement sécurisé, nous nous efforçons de prévenir tout accès, divulgation, modification ou destruction non autorisés de vos données.</p>
                        <p class="para">Cela inclut le cryptage des données sensibles, des serveurs sécurisés, des contrôles d’accès et une surveillance régulière des vulnérabilités.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">7. Vos droits sur les données</h2>
                        <p class="para">Selon votre localisation, vous pouvez avoir des droits concernant vos données personnelles, notamment :</p>
                        <ul class="ul">
                            <li>Accéder à vos données et obtenir une copie</li>
                            <li>Demander la correction ou la mise à jour d’informations incorrectes</li>
                            <li>Demander la suppression de vos données personnelles</li>
                            <li>Se désabonner des communications marketing</li>
                            <li>S’opposer ou restreindre le traitement dans certaines conditions</li>
                        </ul>
                        <p class="para">Pour exercer vos droits, veuillez nous contacter via nos canaux de support client.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">8. Services et liens tiers</h2>
                        <p class="para">Nous pouvons utiliser des services tiers pour l’analyse, le marketing par email, le traitement des paiements et la livraison. Ces prestataires ont leurs propres politiques de confidentialité, et nous vous encourageons à les consulter. Nous veillons à ce que ces prestataires utilisent vos données uniquement pour effectuer des services en notre nom.</p>
                    </div>

                    <div class="service">
                        <h2 class="privacy-subtitle">9. Contactez-nous pour des questions de confidentialité</h2>
                        <p class="para">Si vous avez des questions concernant cette politique de confidentialité, vos données personnelles ou nos pratiques, vous pouvez nous contacter à :</p>
                        <p class="para"><strong>Email :</strong> support@eravist.com</p>
                        <p class="para">Nous répondrons rapidement à toutes vos questions ou préoccupations concernant votre vie privée.</p>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    );
}
