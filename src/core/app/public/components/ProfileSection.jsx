import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuUserCheck, LuChevronDown } from 'react-icons/lu';

const ProfileSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section className="pt-10 bg-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-6 cursor-pointer flex items-center justify-center gap-3"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <LuUserCheck className="w-12 h-12  text-primary" />
                    <h2 className="text-3xl font-bold">Perfil Profesional</h2>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LuChevronDown className="w-8 h-8 text-primary" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="collapsed"
                    animate={isOpen ? "expanded" : "collapsed"}
                    variants={{
                        collapsed: { opacity: 0, height: 0 },
                        expanded: { opacity: 1, height: "auto" }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="max-w-4xl mx-auto bg-base-100 shadow-xl p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center text-primary mb-4">
                            Jailer Rafael Vega Velasco
                        </h3>
                        <p className="text-center  mb-6">
                            Ingeniero de Sistemas | Especialista en Seguridad y Salud en el Trabajo | Auditor Interno ISO 14001:2015
                        </p>

                        <p className="mb-4">
                            Con más de <strong>20 años de experiencia</strong> en prevención, preparación y respuesta ante emergencias, incluyendo
                            17 años como suboficial en el Cuerpo de Bomberos Voluntarios de Valledupar.
                        </p>

                        <p className="mb-4">
                            Más de <strong>15 años</strong> como asesor y consultor en:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ">
                            <li>Diseño e implementación de <strong>Sistemas de Gestión en Seguridad y Salud en el Trabajo</strong> conforme al Decreto 1072 de 2015 y Resolución 0312 de 2019.</li>
                            <li>Asesoría en <strong>Planes Estratégicos de Seguridad Vial (PESV)</strong> bajo la Resolución 40595 de 2022.</li>
                            <li>Elaboración y evaluación de <strong>Planes de Prevención, Preparación y Respuesta ante Emergencias</strong>.</li>
                            <li>Desarrollo de programas de promoción y prevención de riesgos laborales alineados con estándares ARL.</li>
                        </ul>

                        <h4 className="text-xl font-semibold text-primary mt-6 mb-3">Trayectoria Profesional</h4>
                        <ul className="list-disc list-inside space-y-2 ">
                            <li>Docente e instructor en programas de formación en seguridad y emergencias.</li>
                            <li>Instructor de la <strong>USAID’s Bureau for Humanitarian Assistance (BHA)</strong> en cursos CPI y CBF.</li>
                            <li>Consultor y auditor en seguridad, salud en el trabajo, medio ambiente, calidad y seguridad vial.</li>
                            <li>Entrenador de brigadas de emergencias empresariales.</li>
                        </ul>

                        <div className="mt-8 text-center">
                            <button className="btn btn-primary btn-lg">Conocer Más</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProfileSection;
