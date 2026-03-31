import {
  Target,
  Eye,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  CheckCircle2,
  Rocket,
  Brain,
  Clock,
} from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous maintenons les plus hauts standards dans tout ce que nous enseignons et délivrons.",
    },
    {
      icon: Heart,
      title: "Centré sur l'Étudiant",
      description: "Votre succès est notre mission. Nous sommes engagés à votre croissance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adoptons les nouvelles technologies et méthodes d'enseignement pour rester pertinents.",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Apprenez ensemble, grandissez ensemble. Nous construisons des réseaux professionnels durables.",
    },
  ];

  const methods = [
    {
      icon: Brain,
      title: "Apprendre à Apprendre",
      description: "Maîtrisez des stratégies d'apprentissage efficaces et des techniques de mémorisation",
      points: [
        "Systèmes de répétition espacée",
        "Techniques de rappel actif",
        "Construction de modèles mentaux",
        "Stratégies de rétention des connaissances",
      ],
    },
    {
      icon: Clock,
      title: "Productivité & Organisation",
      description: "Construisez des systèmes pour un progrès constant et une efficacité optimale",
      points: [
        "Techniques de gestion du temps",
        "Méthodes de priorisation des tâches",
        "Outils d'organisation numérique",
        "Pratiques de concentration et travail profond",
      ],
    },
    {
      icon: Target,
      title: "Approche par Projet",
      description: "Apprenez en construisant des applications réelles",
      points: [
        "Vrais projets de portfolio",
        "Flux de travail standards de l'industrie",
        "Revue de code et feedback",
        "Développement collaboratif",
      ],
    },
  ];

  const stats = [
    { number: "2020", label: "Fondée" },
    { number: "500+", label: "Diplômés" },
    { number: "95%", label: "Taux d'Emploi" },
    { number: "50+", label: "Entreprises Partenaires" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">À Propos de CodeRise Academy</h1>
            <p className="text-xl text-blue-100">
              Donner à la prochaine génération de professionnels tech au Cameroun et au-delà les moyens d'exceller grâce à l'éducation pratique par projet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#005A9C] px-4 py-2 rounded-full mb-6">
                <Target size={18} />
                <span className="font-semibold">Notre Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Construire l'Avenir Tech de l'Afrique
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Chez CodeRise Academy, nous croyons qu'une éducation tech de qualité devrait être accessible à tous. Notre mission est d'équiper les développeurs et professionnels numériques aspirants au Cameroun avec des compétences pratiques qui répondent aux standards internationaux.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nous nous concentrons sur ce qui compte vraiment : construire de vraies compétences à travers des projets pratiques, pas seulement mémoriser la théorie. Nos étudiants diplôment avec des portfolios pleins de travaux réels et la confiance pour relever des défis professionnels.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Pratique", "Par Projet", "Prêt pour l'Industrie"].map((tag, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-[#005A9C] rounded-lg font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A9BD7] to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 text-center shadow-sm"
                    >
                      <div className="text-3xl font-bold text-[#005A9C] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#005A9C] to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
                <Eye className="mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="text-blue-100 mb-6">
                  Devenir l'institution de formation tech leader en Afrique, connue pour produire des professionnels prêts pour l'emploi qui conduisent l'innovation à travers le continent et mondialement.
                </p>
                <div className="space-y-3">
                  {[
                    "Standards de qualité internationale",
                    "Contexte et pertinence locale",
                    "Accessible à tous les profils",
                    "Croissance communautaire",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-300 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                <Eye size={18} />
                <span className="font-semibold">Notre Vision</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transformer l'Éducation Tech au Cameroun
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nous envisageons un avenir où les professionnels tech camerounais sont recherchés mondialement pour leurs compétences pratiques, leur éthique de travail et leur pensée innovante.
              </p>
              <p className="text-lg text-gray-700">
                En nous concentrant sur la compréhension profonde, la discipline et l'application réelle, nous construisons une génération de professionnels qui ne savent pas seulement coder—ils savent résoudre des problèmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident tout ce que nous faisons chez CodeRise Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <ValueIcon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#005A9C] px-4 py-2 rounded-full mb-6">
              <BookOpen size={18} />
              <span className="font-semibold">Philosophie d'Enseignement</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment Nous Enseignons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre approche va au-delà du codage. Nous vous enseignons comment apprendre, organiser et grandir tout au long de votre carrière.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method, index) => {
              const MethodIcon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-xl flex items-center justify-center mb-6">
                    <MethodIcon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <div className="space-y-2">
                    {method.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#005A9C] to-purple-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nos Principes d'Enseignement</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Ces principes fondamentaux façonnent chaque aspect de notre curriculum et méthodologie d'enseignement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Apprentissage par Projet",
                  description: "Chaque concept est appris en construisant de vrais projets",
                },
                {
                  icon: TrendingUp,
                  title: "Discipline & Rigueur",
                  description: "Approche structurée avec responsabilité et échéances",
                },
                {
                  icon: Brain,
                  title: "Compréhension Profonde",
                  description: "Focus sur le 'pourquoi' pas seulement le 'comment' pour une connaissance durable",
                },
                {
                  icon: Award,
                  title: "Standards de l'Industrie",
                  description: "Apprenez les pratiques utilisées par les développeurs professionnels",
                },
                {
                  icon: Users,
                  title: "Apprentissage Collaboratif",
                  description: "Programmation en binôme et revues de code pour construire le travail d'équipe",
                },
                {
                  icon: Clock,
                  title: "Feedback Continu",
                  description: "Évaluations régulières et guidance personnalisée",
                },
              ].map((principle, index) => {
                const PrincipleIcon = principle.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <PrincipleIcon className="text-[#1A9BD7] mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-blue-100">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
