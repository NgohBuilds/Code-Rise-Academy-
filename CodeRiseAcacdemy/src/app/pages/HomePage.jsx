import { Link } from "react-router-dom";
import {
  Code2,
  Lightbulb,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Target,
  Zap,
  Star,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Brain,
  Clock,
} from "lucide-react";

export function HomePage() {
  const programs = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Maîtrisez les technologies frontend, le design responsive et les pratiques web modernes.",
      topics: ["HTML & CSS", "JavaScript", "React", "Accessibilité"],
      color: "from-[#005A9C] to-[#1A9BD7]",
    },
    {
      icon: Brain,
      title: "Programmation",
      description: "Apprenez les concepts de programmation avec des langages standards de l'industrie.",
      topics: ["Python", "JavaScript", "C", "Haskell"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Compétences Numériques",
      description: "Outils essentiels et automatisation pour le professionnel moderne.",
      topics: ["Suite Office", "Canva", "Outils IA", "Zapier"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Apprentissage par Projet",
      description: "Construisez des projets réels dès le premier jour. Apprenez en faisant, pas seulement en lisant.",
    },
    {
      icon: Rocket,
      title: "Compétences Pratiques",
      description: "60% de pratique garantit que vous êtes prêt pour le marché du travail.",
    },
    {
      icon: Award,
      title: "Préparation aux Certifications",
      description: "Programme structuré aligné avec les certifications de l'industrie.",
    },
    {
      icon: Users,
      title: "Mentorat & Discipline",
      description: "Apprentissage guidé avec des mentors professionnels et approche structurée.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Njoya",
      role: "Développeuse Frontend",
      content: "CodeRise a transformé ma carrière. L'approche basée sur les projets m'a donné de vrais éléments de portfolio et de la confiance.",
      avatar: "SN",
    },
    {
      name: "Kevin Tagne",
      role: "Développeur Full Stack",
      content: "Meilleur investissement que j'ai fait. Le mentorat et la pratique m'ont préparé pour de vrais environnements de travail.",
      avatar: "KT",
    },
    {
      name: "Grace Mbah",
      role: "Spécialiste Marketing Digital",
      content: "J'ai appris des outils pratiques que j'utilise quotidiennement. L'accent sur les compétences réelles a tout changé.",
      avatar: "GM",
    },
  ];

  const stats = [
    { number: "500+", label: "Étudiants Formés" },
    { number: "1000+", label: "Projets Réalisés" },
    { number: "95%", label: "Taux de Réussite" },
    { number: "50+", label: "Partenaires Industriels" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-[#003D66] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="text-yellow-400" size={16} />
                <span className="text-sm">Excellence en Apprentissage par Projet</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Construisez de Vraies Compétences.<br />
                <span className="text-[#1A9BD7]">Grandissez dans la Tech.</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Transformez votre avenir avec l'apprentissage par projet. Nous combinons 40% de théorie avec 60% de pratique pour vous rendre prêt pour l'emploi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="px-8 py-4 bg-white text-[#005A9C] rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="font-semibold">Commencer l'Apprentissage</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span className="font-semibold">Nous Contacter</span>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A9BD7] to-purple-500 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <Code2 className="text-[#1A9BD7] mb-3" size={32} />
                      <div className="text-3xl font-bold mb-1">40%</div>
                      <div className="text-sm text-blue-200">Théorie</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <Target className="text-green-300 mb-3" size={32} />
                      <div className="text-3xl font-bold mb-1">60%</div>
                      <div className="text-sm text-blue-200">Pratique</div>
                    </div>
                    <div className="col-span-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <Rocket className="text-yellow-300 mb-3" size={32} />
                      <div className="text-lg font-semibold mb-2">Vrais Projets, Vraies Compétences</div>
                      <div className="text-sm text-blue-200">Construisez des projets dignes de votre portfolio dès le premier jour</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#005A9C] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir CodeRise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous concentrons sur ce qui compte : construire de vraies compétences à travers l'apprentissage pratique par projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#1A9BD7] group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Programmes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Programmes de formation complets conçus pour vous rendre prêt pour l'industrie.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const ProgramIcon = program.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200"
                >
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <ProgramIcon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="space-y-2 mb-8">
                      {program.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/programs"
                      className="inline-flex items-center gap-2 text-[#005A9C] font-semibold hover:gap-3 transition-all group"
                    >
                      <span>En Savoir Plus</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005A9C] to-[#1A9BD7] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <span>Voir Tous les Programmes</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Notre Méthode d'Apprentissage
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Nous croyons en l'apprentissage par la pratique. Notre approche unique 40/60 combine les fondements théoriques avec une pratique intensive.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#005A9C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">40% Théorie</h3>
                    <p className="text-gray-600">Connaissances fondamentales solides et compréhension conceptuelle.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">60% Pratique</h3>
                    <p className="text-gray-600">Projets réels et expérience pratique de codage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Croissance Continue</h3>
                    <p className="text-gray-600">Feedback régulier, mentorat et suivi de progression.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A9BD7] to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-[#005A9C]">40%</div>
                    <div className="flex-1">
                      <div className="h-8 bg-gradient-to-r from-[#005A9C] to-[#1A9BD7] rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="text-gray-600">Théorie</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-green-600">60%</div>
                    <div className="flex-1">
                      <div className="h-8 bg-gradient-to-r from-green-600 to-green-400 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-gray-600">Pratique</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="text-yellow-600" size={24} />
                    <h4 className="font-semibold text-gray-900">Résultats Réels</h4>
                  </div>
                  <p className="text-gray-700">
                    Les étudiants complètent 10-15 projets de portfolio pendant la formation, garantissant qu'ils diplôment prêts pour l'emploi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Témoignages de Réussite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Écoutez nos diplômés qui ont transformé leur carrière avec CodeRise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à Grandir dans la Tech ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont transformé leur carrière grâce à l'apprentissage pratique par projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="px-8 py-4 bg-white text-[#005A9C] rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all font-semibold"
            >
              Explorer les Programmes
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all font-semibold"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
