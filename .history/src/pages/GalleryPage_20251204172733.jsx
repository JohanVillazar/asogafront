import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const cloudName = 'dywebznfa'; // ← Actualizá tu Cloudinary Cloud Name
const baseURL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto`;

// Galerías organizadas por año → luego por evento
const galleryData = {
  2022: [
    {
      folder: '',
      description: 'Preparación día de la Familia 2022',
      cover: 'familia1_c7qrqy',
      images: ['familia1_c7qrqy', 'familia2_ktvltj', 'familia4_aoz9qt ', 'familia5_jnvkxw  ', 'familia6_pjopjv'],
    },

      {
      folder: '',
      description: 'Dia de la Familia',
      cover: 'WhatsApp_Image_2025-05-08_at_6.56.23_AM_2_pt47lu',
      images: ["WhatsApp_Image_2025-05-08_at_6.56.24_AM_h6lrkc","WhatsApp_Image_2025-05-08_at_6.56.23_AM_tpbrc1","WhatsApp_Image_2025-05-08_at_6.56.24_AM_1_vhh9hv"],
    },

  ],
    2023: [
    {
      folder: '',
      description: 'Dia del Profesor 2023',
      cover: 'WhatsApp_Image_2025-05-08_at_7.30.27_AM_vn0tjb',
      images: ['WhatsApp_Image_2025-05-08_at_7.28.26_AM_2_u5agiu', 'WhatsApp_Image_2025-05-08_at_7.28.26_AM_1_dv81fk', 'WhatsApp_Image_2025-05-08_at_7.28.26_AM_dbuou1', ],
    },
       {
      folder: '',
      description: 'Día de la Madre',
      cover: 'madre_voaaaf',
      images: ['madre2_afe6rk', 'madre2025_l0ichs','madre1_rfqxor', 'madre20251_oggrf3',"WhatsApp_Image_2025-05-08_at_7.30.59_AM_2_ohwshb","WhatsApp_Image_2025-05-08_at_7.30.59_AM_1_v55oc0"],
    },
        {
      folder: '',
      description: 'Día de la Familia',
      cover: 'WhatsApp_Image_2025-05-08_at_7.49.59_AM_5_jx4qel',
      images: ['WhatsApp_Image_2025-05-08_at_7.49.59_AM_qxkcf6', 'WhatsApp_Image_2025-05-08_at_7.50.00_AM_1_hmwpof','WhatsApp_Image_2025-05-08_at_7.49.59_AM_3_b2cff6', 'WhatsApp_Image_2025-05-08_at_7.49.58_AM_snndaj',"WhatsApp_Image_2025-05-08_at_7.49.59_AM_1_ekfzdd","WhatsApp_Image_2025-05-08_at_7.49.59_AM_2_ijlyln",
        "WhatsApp_Image_2025-05-08_at_7.49.59_AM_4_yh1va6"],
    },
    {
      folder: '',
      description: 'Detalles Graduandos',
      cover: 'WhatsApp_Image_2025-05-08_at_7.55.21_AM_mmnqpt',
      images: ['WhatsApp_Image_2025-05-08_at_7.55.21_AM_mmnqpt', 'WhatsApp_Image_2025-05-08_at_7.55.21_AM_6_pobred', 'WhatsApp_Image_2025-05-08_at_7.55.21_AM_3_nu8srf',"WhatsApp_Image_2025-05-08_at_7.55.21_AM_1_k7oi3r","WhatsApp_Image_2025-05-08_at_7.55.20_AM_3_jqz3zb",
        "WhatsApp_Image_2025-05-22_at_8.31.11_PM_kpkafp","WhatsApp_Image_2025-05-08_at_7.55.21_AM_9_ihwcdf","WhatsApp_Image_2025-05-08_at_7.55.21_AM_10_stx7sl","WhatsApp_Image_2025-05-08_at_7.55.20_AM_yjh6sk","WhatsApp_Image_2025-05-08_at_7.55.20_AM_1_ksanhj","WhatsApp_Image_2025-05-08_at_7.55.21_AM_5_t8fupb"],
    }
   
  ],
  2024: [
    {
      folder: '',
      description: 'Día de la Familia',
      cover: 'dia1_m1q8lv',
      images: ['dia2_siho1f', 'dia3_yrlanf', 'dia4_pmkjct', 'WhatsApp_Image_2025-05-19_at_7.37.13_AM_1_xxvh5l', 'WhatsApp_Image_2025-05-19_at_7.37.12_AM_d8f3gq', "WhatsApp_Image_2025-05-19_at_7.37.12_AM_3_dw6v4a",
        "WhatsApp_Image_2025-05-19_at_7.37.12_AM_2_z0uykn","WhatsApp_Image_2025-05-19_at_7.37.26_AM_aflsse","WhatsApp_Image_2025-05-19_at_8.03.40_AM_2_ns528l","WhatsApp_Image_2025-05-19_at_7.37.16_AM_1_jlvxe1",
      "WhatsApp_Image_2025-05-19_at_7.37.15_AM_4_mzcpwf","WhatsApp_Image_2025-05-19_at_7.37.14_AM_1_lz3ghy","WhatsApp_Image_2025-05-19_at_7.37.13_AM_itqi5j","WhatsApp_Image_2025-05-19_at_7.37.13_AM_2_hfjo29",
    "WhatsApp_Image_2025-05-19_at_7.37.14_AM_ardxxv"],
    },
 
    {
      folder: '',
      description: 'Mejora parque infantil',
      cover: 'parque1_v0ym0c',
      images: ['parque_tnpagr', 'parque5_zr1mjx', 'parque4_fyup9m', 'parque2_st5rni', 'parque6_rv6vav'],
    },
       {
      folder: '',
      description: 'Detalle Graduandos',
      cover: 'WhatsApp_Image_2025-05-19_at_7.29.00_AM_xqdgcp',
      images: ['WhatsApp_Image_2025-05-19_at_7.29.00_AM_1_yis1up', 'WhatsApp_Image_2025-05-19_at_7.28.59_AM_r2cgcp', 'WhatsApp_Image_2025-05-19_at_7.36.48_AM_otwz8b', 'WhatsApp_Image_2025-05-19_at_7.36.47_AM_2_oh4h69', 'WhatsApp_Image_2025-05-19_at_7.28.53_AM_noxcgs',
        "WhatsApp_Image_2025-05-19_at_7.36.48_AM_1_hcx2bc","WhatsApp_Image_2025-05-19_at_7.28.55_AM_2_p9vj3u","WhatsApp_Image_2025-05-19_at_7.36.47_AM_1_bqtkol","WhatsApp_Image_2025-05-19_at_7.28.55_AM_1_twgr6q","WhatsApp_Image_2025-05-19_at_7.28.59_AM_3_rryppr",
        "WhatsApp_Image_2025-05-19_at_7.29.08_AM_zhw4wx","WhatsApp_Image_2025-05-19_at_7.29.00_AM_mtgasd"],
    },
    {
      folder: '',
      description: 'Navidad',
      cover: 'WhatsApp_Image_2025-05-19_at_7.28.51_AM_1_pxzy06',
      images: ['WhatsApp_Image_2025-05-19_at_7.28.53_AM_1_ap8ue9', 'WhatsApp_Image_2025-05-19_at_7.28.54_AM_2_ydulbf', 'WhatsApp_Image_2025-05-19_at_7.28.54_AM_eopdid',
        "WhatsApp_Image_2025-05-19_at_7.28.50_AM_2_ublnqr","WhatsApp_Image_2025-05-19_at_7.28.51_AM_bet63d"],
    },
    {
      folder: '',
      description: 'Bono Solidario',
      cover: 'WhatsApp_Image_2025-05-19_at_8.03.41_AM_2_fxbcmx',
      images: ['WhatsApp_Image_2025-05-19_at_8.03.52_AM_zpjawc', 'WhatsApp_Image_2025-05-09_at_10.39.27_AM_2_fohafq', 'WhatsApp_Image_2025-05-09_at_10.39.27_AM_ryd4zp',
        "WhatsApp_Image_2025-05-09_at_10.39.27_AM_4_a02b2f","bono2_roranz"],
    },
    {
      folder: "",
      description:"Amor y Amistad",
      cover:"WhatsApp_Image_2025-05-19_at_7.38.47_AM_aqjboe",
      images:["WhatsApp_Image_2025-05-19_at_7.38.47_AM_1_ncf3qb","WhatsApp_Image_2025-05-19_at_7.38.46_AM_2_kfyckf","WhatsApp_Image_2025-05-19_at_7.38.46_AM_5_ejxwbg","WhatsApp_Image_2025-05-19_at_7.38.46_AM_1_iiceka","WhatsApp_Image_2025-05-19_at_7.38.46_AM_3_j0ewvk"]
    }
  ],
  2025: [
    {
      folder: '',
      description: 'Día de la Madre 2025',
      cover: 'madre20254_zrsn6d',
      images: ['madre20255_legebu', 'madre20253_aokeov', 'madre20252_uqy9ux', 'madre20256_esr45g'],
    },
    {
      folder: '',
      description: 'Día del Niño 2025',
      cover: 'ninod3_a3izkk',
      images: ['ninos1_juksc2', 'ninos_rc3yhm', 'ninos2_fozppt',"WhatsApp_Image_2025-05-15_at_3.23.22_PM_l40ghn"],
    },
    {
      folder:"",
      description:"Junta Asopadres",
      cover:"WhatsApp_Image_2025-05-19_at_7.02.22_AM_ngbq3q",
      images:["WhatsApp_Image_2025-05-19_at_7.02.22_AM_1_hursm1","WhatsApp_Image_2025-05-19_at_7.02.21_AM_ncxino"]

    },
        {
      folder:"",
      description:"Junta Asopadres",
      cover:"WhatsApp_Image_2025-05-19_at_7.02.22_AM_ngbq3q",
      images:["WhatsApp_Image_2025-05-19_at_7.02.22_AM_1_hursm1","WhatsApp_Image_2025-05-19_at_7.02.21_AM_ncxino"]

    }
  ],
};

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <PageLayout title="Galería de Fotos">
      <p className="text-center text-gray-600 mb-12 text-lg">
        Revive los mejores momentos de nuestras actividades y eventos por año.
      </p>

      {/* Vista por años */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(galleryData).map((year) => (

          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg font-semibold shadow ${
              selectedYear === year ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
            }`}
          >
            Año {year}
          </button>
        ))}
      </div>

      {selectedYear && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {galleryData[selectedYear].map((event, index) => {
      const coverUrl = `${baseURL}/${event.folder}/${event.cover}`;

      return (
        <motion.div
          key={event.folder}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
          whileHover={{ scale: 1.05, y: -5 }}
          onClick={() => setSelectedItem({ ...event, year: selectedYear })}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0">
              <img
                className="w-full h-56 object-cover"
                alt={event.description}
                src={coverUrl}
              />
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-brand-blue">
                  {event.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      );
    })}
  </div>
)}

{/* Modal de galería */}
{selectedItem && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-auto relative">
      <button
        onClick={() => setSelectedItem(null)}
        className="absolute top-2 right-3 text-gray-600 text-2xl font-bold"
      >
        ✕
      </button>
      <h3 className="text-lg font-semibold mb-4 text-center">
        {selectedItem.description}
      </h3>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {selectedItem.images.map((img, idx) => {
            const fullUrl = `${baseURL}/${selectedItem.folder}/${img}`;
            return (
              <PhotoView key={idx} src={fullUrl}>
                <img
                  src={fullUrl}
                  alt=""
                  className="rounded-lg h-40 w-full object-cover cursor-zoom-in"
                />
              </PhotoView>
            );
          })}
        </div>
      </PhotoProvider>
    </div>
  </div>
)}
    </PageLayout>
  );
};

export default GalleryPage;


  