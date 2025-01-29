import { services } from "../../../services/mock/Services";
import { motion } from 'framer-motion';


const ServiceSection = () => {


    return (
        <>
            <section className="py-10 bg-base-200">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Nuestros Servicios
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                            >
                                <div className="card-body items-center text-center">
                                    {service.icon}
                                    <h3 className="card-title mt-4">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>);
}

export default ServiceSection;