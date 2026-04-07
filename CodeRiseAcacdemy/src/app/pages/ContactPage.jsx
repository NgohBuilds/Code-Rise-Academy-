import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_nffh2gg",   
      "template_ok9zhie",  
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "4nisfD7lG6IYTtdeS"   
    )
    .then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        alert("Une erreur s'est produite ");
      }
    );

  setTimeout(() => setSubmitted(false), 5000);
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      content: "Cameroun, Afrique Centrale",
      detail: "Service clients localement et internationalement",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+237  687 56 79 81",
      detail: "Lun-Ven : 8h - 18h",
    },
    {
      icon: Mail,
      title: "Email",
      content: "coderiseacademy@gmail.com",
      detail: "Nous répondrons sous 24 heures",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven : 8h00 - 18h00",
      detail: "Samedi : 9h00 - 14h00",
    },
  ];

  const reasons = [
    "S'inscrire à un programme",
    "Demander un service",
    "Demande de partenariat",
    "Question générale",
    "Support technique",
    "Autre",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005A9C] via-[#004A7F] to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-blue-100">
              Des questions ? Nous aimerions vous entendre. Envoyez-nous un message et nous répondrons dès que possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 text-green-700">
                      <CheckCircle2 size={24} />
                      <div>
                        <h3 className="font-semibold">Message Envoyé !</h3>
                        <p className="text-sm">Nous vous répondrons sous 24 heures.</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A9BD7] focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A9BD7] focus:border-transparent transition-all"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A9BD7] focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionner une raison</option>
                      {reasons.map((reason, index) => (
                        <option key={index} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A9BD7] focus:border-transparent transition-all resize-none"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#005A9C] to-[#1A9BD7] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contactez-nous via l'un de ces canaux. Nous sommes là pour vous aider !
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const InfoIcon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#005A9C] to-[#1A9BD7] rounded-xl flex items-center justify-center flex-shrink-0">
                          <InfoIcon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-700 mb-1">{info.content}</p>
                          <p className="text-sm text-gray-500">{info.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-lg">
                <MessageSquare className="mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-2">Chattez avec nous sur WhatsApp</h3>
                <p className="text-green-100 mb-6">
                  Obtenez des réponses instantanées à vos questions
                </p>
                <a
                  href="http://wa.me/237687567981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  Démarrer le Chat WhatsApp
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Suivez-Nous</h3>
                <p className="text-gray-600 mb-6">Restez connectés sur les réseaux sociaux</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/1Non7fePap/"
                    className="w-12 h-12 bg-white hover:bg-[#005A9C] hover:text-white text-[#005A9C] rounded-xl flex items-center justify-center transition-all shadow-sm"
                  >
                    <Facebook size={20} />
                  </a>
                 
                  <a
                    href="https://www.instagram.com/coderise_academy?igsh=MWNmNWQ2b3AzMTk5cw%3D%3D&utm_source=qr"
                    className="w-12 h-12 bg-white hover:bg-pink-600 hover:text-white text-pink-600 rounded-xl flex items-center justify-center transition-all shadow-sm"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/coderise-academy04/"
                    className="w-12 h-12 bg-white hover:bg-[#005A9C] hover:text-white text-[#005A9C] rounded-xl flex items-center justify-center transition-all shadow-sm"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitez-Nous</h2>
            <p className="text-lg text-gray-600">Nous sommes situés au Cameroun, Afrique Centrale</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg" style={{ height: "400px" }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-[#005A9C] mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cameroun, Afrique Centrale</h3>
                <p className="text-gray-600">Carte interactive à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600">Réponses rapides aux questions que vous pourriez avoir</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Quelle est la durée des programmes ?",
                answer: "Les programmes vont de 4 à 12 semaines selon le cours et votre rythme d'apprentissage.",
              },
              {
                question: "Proposez-vous des cours en ligne ?",
                answer: "Oui, nous proposons des cours en présentiel et en ligne pour s'adapter à différentes préférences d'apprentissage.",
              },
              {
                question: "Quels sont les prérequis ?",
                answer: "La plupart des programmes sont adaptés aux débutants. Nous vous aiderons à choisir le bon point de départ.",
              },
              {
                question: "Délivrez-vous des certificats ?",
                answer: "Oui, tous les étudiants reçoivent des certificats après la réussite de leurs programmes.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
