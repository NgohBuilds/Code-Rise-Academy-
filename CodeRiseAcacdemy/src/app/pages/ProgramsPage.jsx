import { Link } from "react-router-dom";
import {
  Code2,
  Layout,
  Smartphone,
  Zap,
  Terminal,
  Database,
  Palette,
  FileSpreadsheet,
  Lightbulb,
  ArrowRight,
  Clock,
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  Keyboard,
  Target,
  Settings,
} from "lucide-react";

export function ProgramsPage() {
  const webDevelopmentModules = [
    {
      icon: Layout,
      title: "Développement Frontend",
      description: "Maîtrisez HTML, CSS et JavaScript pour construire de belles interfaces utilisateur",
      skills: ["HTML5 & CSS3", "JavaScript ES6+", "React & Frameworks Modernes", "Contrôle de Version (Git)"],
      duration: "12 semaines",
    },
    {
      icon: Smartphone,
      title: "Design Responsive",
      description: "Créez des sites web qui fonctionnent parfaitement sur tous les appareils",
      skills: ["Design Mobile-First", "CSS Grid & Flexbox", "Media Queries", "Optimisation de Performance"],
      duration: "6 semaines",
    },
    {
      icon: Zap,
      title: "Accessibilité & UX",
      description: "Construisez des expériences web inclusives pour tous les utilisateurs",
      skills: ["Standards WCAG", "Tests de Lecteur d'Écran", "Navigation au Clavier", "HTML Sémantique"],
      duration: "4 semaines",
    },
    {
      icon: Palette,
      title: "Animations & Interactions",
      description: "Donnez vie à vos sites web avec des animations fluides",
      skills: ["Animations CSS", "Transitions JavaScript", "Bibliothèques Motion", "Performance"],
      duration: "4 semaines",
    },
  ];

  const programmingModules = [
    {
      icon: Code2,
      title: "JavaScript",
      description: "Le langage du web - des bases aux concepts avancés",
      skills: ["Concepts de Base", "Programmation Async", "Manipulation DOM", "ES6+ Moderne"],
      duration: "10 semaines",
    },
    {
      icon: Terminal,
      title: "Python",
      description: "Langage polyvalent pour le web, l'automatisation et les données",
      skills: ["Bases Python", "Programmation Orientée Objet", "Bibliothèques & Frameworks", "Scripts d'Automatisation"],
      duration: "10 semaines",
    },
    {
      icon: Database,
      title: "Programmation C",
      description: "Construisez une base solide en programmation système",
      skills: ["Gestion de la Mémoire", "Pointeurs & Structures de Données", "Algorithmes", "Programmation Système"],
      duration: "12 semaines",
    },
    {
      icon: Lightbulb,
      title: "Haskell",
      description: "Explorez les paradigmes de programmation fonctionnelle",
      skills: ["Concepts Fonctionnels", "Systèmes de Types", "Fonctions Pures", "Lambda Calcul"],
      duration: "8 semaines",
    },
  ];

  const digitalSkillsModules = [
    {
      icon: FileSpreadsheet,
      title: "Maîtrise Suite Office",
      description: "Excel, Word, PowerPoint - compétence de niveau professionnel",
      skills: ["Formules Excel & Tableaux Croisés", "Modèles & Styles Word", "Design PowerPoint", "Analyse de Données"],
      duration: "6 semaines",
    },
    {
      icon: Palette,
      title: "Canva Pro",
      description: "Créez des graphiques et supports marketing époustouflants",
      skills: ["Design de Marque", "Graphiques Réseaux Sociaux", "Présentations", "Supports Imprimés"],
      duration: "4 semaines",
    },
    {
      icon: Lightbulb,
      title: "Outils IA",
      description: "Tirez parti de l'IA pour booster productivité et créativité",
      skills: ["ChatGPT & Rédaction IA", "Génération d'Images", "Codage Assisté par IA", "Automatisation de Flux"],
      duration: "4 semaines",
    },
    {
      icon: Settings,
      title: "Zapier & Automatisation",
      description: "Automatisez les tâches répétitives et connectez vos outils",
      skills: ["Automatisation de Flux", "Intégrations d'Apps", "Planification de Tâches", "Synchronisation de Données"],
      duration: "3 semaines",
    },
  ];

  const bonusPrograms = [
    {
      icon: TrendingUp,
      title: "Développement Personnel",
      description: "Développez des compétences relationnelles pour la réussite professionnelle",
      topics: ["Définition d'Objectifs", "Gestion du Temps", "Compétences de Communication", "Mentalité de Croissance"],
    },
    {
      icon: Target,
      title: "Gestion de Projet",
      description: "Apprenez à planifier et exécuter des projets efficacement",
      topics: ["Agile & Scrum", "Planification de Tâches", "Collaboration d'Équipe", "Gestion des Délais"],
    },
    {
      icon: Keyboard,
      title: "Maîtrise de la Frappe",
      description: "Augmentez la productivité avec une vitesse de frappe accrue",
      topics: ["Frappe Tactile", "Développement de Vitesse", "Entraînement à la Précision", "Raccourcis Clavier"],
    },
  ];

  const ProgramSection = ({ title, description, modules, gradient }) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className={`inline-block px-6 py-2 bg-gradient-to-r ${gradient} text-white rounded-full font-semibold mb-4`}>
          {title}
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {modules.map((module, index) => {
          const ModuleIcon = module.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <ModuleIcon className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
              <p className="text-gray-600 mb-6">{module.description}</p>

              <div className="space-y-2 mb-6">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award size={16} />
                  <span>Certificat</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Nos Programmes</h1>
            <p className="text-xl text-blue-100 mb-8">
              Programmes de formation complets conçus avec 40% de théorie et 60% de pratique pour vous rendre prêt pour l'emploi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} />
                <span>500+ Étudiants</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award size={18} />
                <span>Certifié Industrie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp size={18} />
                <span>95% Taux de Réussite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramSection
            title="Développement Web"
            description="Construisez des sites web modernes, responsive et accessibles avec les dernières technologies"
            modules={webDevelopmentModules}
            gradient="from-[#005A9C] to-[#1A9BD7]"
          />

          <ProgramSection
            title="Programmation"
            description="Maîtrisez les langages de programmation et construisez une base solide en développement logiciel"
            modules={programmingModules}
            gradient="from-purple-500 to-pink-500"
          />

          <ProgramSection
            title="Compétences Numériques"
            description="Outils numériques essentiels et compétences d'automatisation pour les professionnels modernes"
            modules={digitalSkillsModules}
            gradient="from-orange-500 to-red-500"
          />

          {/* Bonus Programs */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Programmes Bonus</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compétences supplémentaires pour booster votre productivité et réussite professionnelle
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {bonusPrograms.map((program, index) => {
                const ProgramIcon = program.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-xl flex items-center justify-center mb-6">
                      <ProgramIcon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="space-y-2">
                      {program.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#005A9C] to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Parcours ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choisissez votre voie et commencez à construire de vraies compétences aujourd'hui.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005A9C] rounded-xl hover:shadow-2xl transition-all font-semibold"
          >
            <span>S'Inscrire Maintenant</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
