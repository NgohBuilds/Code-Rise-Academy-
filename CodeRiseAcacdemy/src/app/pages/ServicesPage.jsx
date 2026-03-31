import { Link } from "react-router-dom";
import {
  Code2,
  Layout,
  Smartphone,
  Rocket,
  Settings,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Palette,
  ShoppingCart,
  Mail,
  BarChart,
} from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Layout,
      title: "Développement de Sites Web",
      description: "Sites web personnalisés construits avec des technologies modernes et meilleures pratiques",
      features: [
        "Design responsive pour tous appareils",
        "Optimisation SEO",
        "Vitesse de chargement rapide",
        "Systèmes de gestion de contenu",
        "Intégration e-commerce",
        "Maintenance & support",
      ],
      gradient: "from-[#005A9C] to-[#1A9BD7]",
      projects: ["Sites Business", "Sites Portfolio", "Pages d'Atterrissage", "Portails Corporate"],
    },
    {
      icon: Globe,
      title: "Applications Web",
      description: "Applications web complètes adaptées aux besoins de votre entreprise",
      features: [
        "Fonctionnalités personnalisées",
        "Authentification utilisateur",
        "Intégration base de données",
        "Développement API",
        "Déploiement cloud",
        "Architecture évolutive",
      ],
      gradient: "from-purple-500 to-pink-500",
      projects: ["Plateformes SaaS", "Tableaux de Bord", "Systèmes de Réservation", "Outils de Gestion"],
    },
    {
      icon: Smartphone,
      title: "Solutions Mobile-First",
      description: "Applications responsive qui fonctionnent parfaitement sur les appareils mobiles",
      features: [
        "Progressive Web Apps (PWA)",
        "UI/UX optimisée mobile",
        "Interfaces tactiles conviviales",
        "Fonctionnalité hors ligne",
        "Notifications push",
        "Expérience type application",
      ],
      gradient: "from-green-500 to-emerald-500",
      projects: ["Apps Web Mobile", "PWAs", "Solutions Hybrides", "Prototypes d'Apps"],
    },
    {
      icon: Rocket,
      title: "Transformation Numérique",
      description: "Aidez les entreprises à passer aux flux de travail numériques modernes",
      features: [
        "Automatisation des processus",
        "Conseil en stratégie numérique",
        "Implémentation d'outils",
        "Formation du personnel",
        "Optimisation des flux de travail",
        "Intégration technologique",
      ],
      gradient: "from-orange-500 to-red-500",
      projects: ["Configuration Automatisation", "Flux Numériques", "Migration Cloud", "Formation d'Équipe"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designs beaux et conviviaux qui convertissent les visiteurs en clients",
      features: [
        "Recherche & analyse utilisateur",
        "Wireframing & prototypage",
        "Design visuel",
        "Identité de marque",
        "Systèmes de design",
        "Tests d'utilisabilité",
      ],
      gradient: "from-pink-500 to-rose-500",
      projects: ["Refonte de Sites", "Interfaces d'Apps", "Supports de Marque", "Systèmes de Design"],
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Support continu pour maintenir vos actifs numériques en bon fonctionnement",
      features: [
        "Mises à jour régulières",
        "Surveillance sécurité",
        "Optimisation performance",
        "Corrections de bugs",
        "Mises à jour de contenu",
        "Support technique",
      ],
      gradient: "from-gray-600 to-gray-800",
      projects: ["Maintenance de Sites", "Support d'Apps", "Gestion Hébergement", "Surveillance"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Découverte",
      description: "Nous en apprenons sur votre entreprise, objectifs et besoins à travers une consultation détaillée.",
      icon: Users,
    },
    {
      number: "02",
      title: "Planification",
      description: "Créer un plan de projet détaillé avec calendriers, jalons et livrables.",
      icon: BarChart,
    },
    {
      number: "03",
      title: "Design",
      description: "Concevoir des interfaces belles et fonctionnelles alignées avec votre marque et les besoins des utilisateurs.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Développement",
      description: "Construire votre solution en utilisant des technologies modernes et meilleures pratiques de l'industrie.",
      icon: Code2,
    },
    {
      number: "05",
      title: "Tests",
      description: "Tests rigoureux sur tous appareils et navigateurs pour garantir la qualité.",
      icon: CheckCircle2,
    },
    {
      number: "06",
      title: "Lancement",
      description: "Déployer votre projet et fournir formation et support continu.",
      icon: Rocket,
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Livraison Rapide",
      description: "Processus de développement efficace sans compromettre la qualité",
    },
    {
      icon: TrendingUp,
      title: "Solutions Évolutives",
      description: "Construit pour grandir avec les besoins de votre entreprise",
    },
    {
      icon: CheckCircle2,
      title: "Qualité Garantie",
      description: "Tests rigoureux et assurance qualité",
    },
    {
      icon: Users,
      title: "Support Dédié",
      description: "Assistance continue même après l'achèvement du projet",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Développement web professionnel et solutions numériques pour particuliers et entreprises
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005A9C] rounded-xl hover:shadow-2xl transition-all font-semibold"
            >
              <span>Démarrer Votre Projet</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Nous Offrons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions numériques complètes construites avec des technologies modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <ServiceIcon className="text-white" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques Clés :</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Exemples de Projets :</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.projects.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche éprouvée pour livrer des projets réussis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 ml-auto shadow-sm">
                    <StepIcon className="text-[#005A9C]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous combinons expertise technique avec un engagement envers votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BenefitIcon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secteurs Que Nous Servons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expérience dans divers secteurs et types d'entreprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingCart, label: "E-Commerce" },
              { icon: Users, label: "Éducation" },
              { icon: Globe, label: "Technologie" },
              { icon: Mail, label: "Marketing" },
              { icon: TrendingUp, label: "Finance" },
              { icon: Palette, label: "Créatif" },
              { icon: Database, label: "Santé" },
              { icon: Settings, label: "Services Professionnels" },
            ].map((industry, index) => {
              const IndustryIcon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-blue-100"
                >
                  <IndustryIcon className="text-[#005A9C] mx-auto mb-3" size={32} />
                  <div className="font-semibold text-gray-900">{industry.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#005A9C] to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discutons de comment nous pouvons donner vie à votre vision numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#005A9C] rounded-xl hover:shadow-2xl transition-all font-semibold"
            >
              Obtenir une Consultation Gratuite
            </Link>
            <Link
              to="/programs"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all font-semibold"
            >
              Voir Nos Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
