export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 mt-32">
      <h1 className="font-serif text-4xl text-center mb-10">Contact</h1>

      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="font-semibold">Nom complet</label>
          <input
            name="nom"
            required
            className="w-full border p-3 rounded"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-3 rounded"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border p-3 rounded"
            placeholder="Décrivez votre demande"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gold hover:text-black font-semibold"
        >
          Envoyer le message
        </button>
      </form>

      <div className="text-center mt-10">
        <p>Téléphone / WhatsApp : <span className="font-semibold">+221 …</span></p>
      </div>
    </section>
  );
}
