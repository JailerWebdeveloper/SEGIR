import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";
import emailjs from "emailjs-com";

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_ssta5dh",
                "template_dbryoih",
                form,
                "lfhbZLBTTY8by9xGq"
            )
            .then(
                () => {
                    setSuccess("¡Mensaje enviado con éxito!");
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("Error enviando mensaje:", error);
                    setSuccess("Hubo un problema, intenta de nuevo.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section className="py-20 bg-cover bg-center bg-no-repeat relative text-primary-content "

            style={{
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/segir-f5f19.firebasestorage.app/o/Imagen%20de%20WhatsApp%202025-01-29%20a%20las%2015.37.23_74ec54c2.jpg?alt=media&token=cfb841c4-8bb9-4849-a5ed-39ff9bc15886')"
            }}>
                
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-6"
                >
                    📞 Contáctanos
                </motion.h2>

                {/* Información de Contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-base-100 text-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-4">📍 Nuestra Oficina</h3>
                        <p className="flex items-center gap-2">
                            <LuMapPin className="text-primary w-6 h-6" /> Valledupar, Cesar, Colombia
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <LuPhone className="text-primary w-6 h-6" /> +57 318 3365458
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <LuMail className="text-primary w-6 h-6" /> jailervega@yahoo.com
                        </p>
                    </motion.div>

                    {/* Formulario de Contacto */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-base-100 text-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-4">📧 Envíanos un Mensaje</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Mensaje</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary"
                                ></textarea>
                            </div>

                            {/* Mensaje de confirmación */}
                            {success && (
                                <p className="text-center text-green-600 font-semibold">{success}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary-focus transition"
                                disabled={loading}
                            >
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                                <LuSend />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
