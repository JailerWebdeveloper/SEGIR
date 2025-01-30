import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuZoomIn, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { storage } from "../../../../../firebaseConfig.js";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const GallerySection = () => {
    const [mediaFiles, setMediaFiles] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null); // Estado para zoom

    // ✅ Obtener archivos de Firebase Storage
    useEffect(() => {
        const fetchMediaFromStorage = async () => {
            try {
                const storageRef = ref(storage, "gallery");
                const result = await listAll(storageRef);

                const mediaData = await Promise.all(
                    result.items.map(async (item) => {
                        const url = await getDownloadURL(item);
                        return {
                            id: item.fullPath,
                            url,
                            type: url.includes(".mp4") || url.includes(".mov") ? "video" : "image"
                        };
                    })
                );

                setMediaFiles(mediaData);
            } catch (error) {
                console.error("Error obteniendo archivos de Storage:", error);
            }
        };

        fetchMediaFromStorage();
    }, []);

    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2"
                >
                    📸 Galería Multimedia
                </motion.h2>

                {/* Botón para expandir */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-focus transition"
                    >
                        {isExpanded ? "Ver Menos" : "Ver Más"}
                        {isExpanded ? <LuChevronUp /> : <LuChevronDown />}
                    </button>
                </div>

                {/* Galería */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${isExpanded ? "" : "overflow-hidden max-h-64"}`}>
                    {mediaFiles.slice(0, isExpanded ? mediaFiles.length : 4).map((media) => (
                        <motion.div
                            key={media.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative bg-base-100 shadow-lg rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setSelectedMedia(media)}
                        >
                            {/* Icono de zoom */}
                            <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full">
                                <LuZoomIn />
                            </div>

                            {/* Mostrar imagen o video */}
                            {media.type === "image" ? (
                                <img src={media.url} alt="Galería" className="w-full h-56 object-cover" />
                            ) : (
                                <video src={media.url} controls className="w-full h-56 object-cover" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 🔍 Modal de Zoom */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                    >
                        <motion.div
                            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            {/* Botón de cerrar */}
                            <button
                                className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full"
                                onClick={() => setSelectedMedia(null)}
                            >
                                ❌
                            </button>

                            {/* Mostrar imagen o video ampliado */}
                            {selectedMedia.type === "image" ? (
                                <img src={selectedMedia.url} alt="Zoom" className="w-full max-h-[80vh] object-contain" />
                            ) : (
                                <video src={selectedMedia.url} controls className="w-full max-h-[80vh] object-contain" />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
