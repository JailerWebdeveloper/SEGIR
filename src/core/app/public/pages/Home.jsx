import React from 'react';
import { motion } from 'framer-motion';

import ProfileSection from '../components/ProfileSection';
import IntroSection from '../components/IntroSection';
import ServiceSection from '../components/ServicesSection';
import { CoverageSection } from '../components/CoverageSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

const Home = () => {



    return (
        <div className="min-h-screen  pt-16 w-full">
            <section
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/segir-f5f19.firebasestorage.app/o/Imagen%20de%20WhatsApp%202025-01-29%20a%20las%2015.37.23_74ec54c2.jpg?alt=media&token=cfb841c4-8bb9-4849-a5ed-39ff9bc15886')"
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center text-white max-w-3xl"
                    >
                        <h1 className="text-5xl font-bold mb-6">SEGIR</h1>
                        <p className="text-xl mb-8">
                            Proteger vidas y fortalecer entornos laborales a través de soluciones integrales en seguridad y gestión del riesgo.
                        </p>
                        <button className="btn btn-primary btn-lg">Comenzar Ahora</button>
                    </motion.div>
                </div>
            </section>

            <IntroSection />
            <ProfileSection />
            <ServiceSection />
            <GallerySection />
            <CoverageSection />
            <ContactSection />
            {/* CTA Section */}
            {/* <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-primary text-primary-content"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar la seguridad laboral?</h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Contacte con nuestros expertos y descubra cómo podemos ayudarle a crear un ambiente
                        de trabajo más seguro y productivo.
                    </p>
                    <button className="btn btn-secondary btn-lg">Solicitar Consulta</button>
                </div>
            </motion.section> */}
        </div>
    );
};

export default Home;