const path = require('path');

const convertImagesToWebp = async () => {
  const imagemin = await import('imagemin');
  const imageminWebp = await import('imagemin-webp');

  const files = await imagemin.default(['src/assets/images/cards/*.{jpg,png}'], {
    destination: 'src/assets/images/cards/webp',
    plugins: [
      imageminWebp.default({quality: 75})
    ]
  });

  console.log('Images are converted:', files);
};

convertImagesToWebp();