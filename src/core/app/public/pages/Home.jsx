import React from 'react';
import { motion } from 'framer-motion';

import ProfileSection from '../components/ProfileSection';
import IntroSection from '../components/IntroSection';
import ServiceSection from '../components/ServicesSection';
import { CoverageSection } from '../components/CoverageSection';

const Home = () => {



    return (
        <div className="min-h-screen  pt-16 w-full">
            <section className="relative h-[90vh] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full object-cover"
                    poster="https://i.pinimg.com/736x/b8/48/95/b848952604e015911a9607775f4786ce.jpg"
                >
                    <source src="https://www.youtube.com/watch?v=GOQ146WRBzA&t=2214s" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-60">
                    <div className="container mx-auto h-full flex items-center justify-center px-4">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center text-white max-w-3xl"
                        >
                            <h1 className="text-5xl font-bold mb-6">SEGIR</h1>
                            <p className="text-xl mb-8">Proteger vidas y fortalecer entornos laborales a través de soluciones integrales en seguridad y gestión del riesgo.</p>
                            <button className="btn btn-primary btn-lg">Comenzar Ahora</button>
                        </motion.div>
                    </div>
                </div>
            </section>
            <IntroSection />
            <ProfileSection />
            <ServiceSection />
            <CoverageSection />
            {/* CTA Section */}
            <motion.section
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
            </motion.section>
        </div>
    );
};

export default Home;