// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: [ 'https://shivshakticatering.netlify.app','https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// // const express = require('express');
// // const cloudinary = require('cloudinary').v2;
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const multer = require('multer');
// // const PDFDocument = require('pdfkit');
// // const bodyParser = require('body-parser');
// // const fs = require('fs');
// // const path = require('path');
// // const QRCode = require('qrcode');

// // dotenv.config();
// // const app = express();

// // const upload = multer({ storage: multer.memoryStorage() });

// // app.use(cors({
// //   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
// //   methods: ['GET', 'POST'],
// //   credentials: true
// // }));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(bodyParser.json({ limit: '10mb' }));

// // app.use((req, res, next) => {
// //   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
// //   next();
// // });



// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       // doc
//       //   .font('Merriweather-Regular')
//       //   .fontSize(18)
//       //   .fillColor('#2F4F4F')
//       //   .text(`Order ID: ${orderId || 'N/A'}`, 50, 200, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

// const addHeader = () => {
//   doc
//     .fillColor('#FF8C00')
//     .rect(30, 40, doc.page.width - 60, 30)
//     .fill();
//   doc
//     .fillColor('white')
//     .font('Merriweather-Bold')
//     .fontSize(14)
//     .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//   doc
//     .fillColor('#800000')
//     .rect(30, 72, doc.page.width - 60, 2)
//     .fill();
// };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: '☐' },
//         { task: 'Confirm disposable items quantity', status: '☐' },
//         { task: 'Check gharelu saman availability', status: '☐' },
//         { task: 'Ensure tent items are ready', status: '☐' },
//         { task: 'Review menu with chef', status: '☐' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/');
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Khana Khazana Menu', 30, currentY);
//     currentY += 30;

//     const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//     const categories = {};
//     const dishCounts = {};

//     (items || []).forEach((item) => {
//       const { categoryName, dishName, ingredients, halwaiId, categoryId, veg } = item || {};
//       if (!categoryName || !dishName) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       categories[categoryName].push({ dishName, ingredients: ingredients || [], halwaiId, categoryId, veg });
//       if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//     });

//     let categoryIndex = 1;
//     for (const [categoryName, dishes] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .rect(30, currentY - 5, 535, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text(`${categoryName} (${dishes.length} Dishes)`, 40, currentY + 5, { lineBreak: false });
//       currentY += 30;

//       let dishIndex = 1;
//       for (const dish of dishes) {
//         currentY = checkPageBreak(currentY, 30, `dish-${dish.dishName}`);
//         const vegLabel = dish.veg === 'veg' ? '(Veg)' : dish.veg === 'non-veg' ? '(Non-Veg)' : '';
//         const dishFont = isHindi(dish.dishName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold';
//         doc
//           .font(dishFont)
//           .fontSize(12)
//           .fillColor('#2F4F4F')
//           .text(`${dishIndex}. ${truncateText(doc, dish.dishName, 450)} ${vegLabel}`, 40, currentY, {
//             lineBreak: false,
//           });
//         currentY += 20;
//         dishIndex++;

//         if (withIngredients && Array.isArray(dish.ingredients) && dish.ingredients.length > 0) {
//           const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//             ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//             : numberOfPersons / 50;

//           const ingredients = dish.ingredients.slice(0, 50);
//           const rowHeight = 20;
//           const headerHeight = 24;

//           let maxIngWidth = 200;
//           let maxQtyWidth = 100;
// ingredients.forEach((ing) => {
//   const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//   const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//   const qtyText = formatQuantity(qty, ing.unit);
//   maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//   maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
// });

// const tableLeft = 60;
// const col1 = tableLeft;
// const col2 = col1 + maxIngWidth + 15;
// const col3 = col2 + maxQtyWidth + 15;
// const tableWidth = Math.min(505, col3 + 50 - tableLeft);

// let remainingIngredients = [...ingredients];
// while (remainingIngredients.length > 0) {
//   currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${dish.dishName}`);

//   const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//   const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//   remainingIngredients = remainingIngredients.slice(rowsPerPage);

//   const tableTop = currentY;

//   doc
//     .fillColor('#FF8C00')
//     .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//     .fill();
//   doc
//     .fillColor('white')
//     .font('Merriweather-Bold')
//     .fontSize(10)
//     .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//     .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//     .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//   let rowY = tableTop + headerHeight;
//   let rowIndex = 0;
//   currentBatch.forEach((ing) => {
//     if (rowIndex % 2 === 0) {
//       doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//     } else {
//       doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//     }
//     doc.fillColor('black');
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//     doc
//       .font(ingFont)
//       .fontSize(10)
//       .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//     doc
//       .font('Merriweather-Regular')
//       .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//     doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//     rowIndex++;
//     rowY += rowHeight;
//   });

//   doc
//     .strokeColor('#800000')
//     .lineWidth(0.5)
//     .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//     .stroke()
//     .moveTo(col2, tableTop)
//     .lineTo(col2, rowY)
//     .moveTo(col3, tableTop)
//     .lineTo(col3, rowY)
//     .stroke();

//   currentY = rowY + 15;
//   doc.y = currentY;
// }
//         }
//       }
//       currentY = checkPageBreak(currentY, 20, `post-category-${categoryName}`);
//     }

//     if (withIngredients) {
//   currentY = renderTable(
//     doc,
//     currentY,
//     masalaItems,
//     'Masala Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     disposableItems,
//     'Disposable Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     ghareluSaman,
//     'Gharelu Items',
//     numberOfPersons,
//     false,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     tentItems,
//     'Tent Items',
//     numberOfPersons,
//     false,
//     checkPageBreak
//   );

//   currentY = checkPageBreak(currentY, 60, 'totals');
//   doc
//     .font('Merriweather-Bold')
//     .fontSize(14)
//     .fillColor('#800000')
//     .text('Total Consumption', 40, currentY);
//   currentY += 20;
//   const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//   doc
//     .font('Merriweather-Regular')
//     .fontSize(12)
//     .fillColor('black')
//     .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//   doc
//     .font('NotoSerifDevanagari-Regular')
//     .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//   currentY += 20;
//   doc
//     .font('Merriweather-Regular')
//     .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//   doc
//     .font('NotoSerifDevanagari-Regular')
//     .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//   currentY += 20;
// }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: [ 'https://shivshakticatering.netlify.app/','https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       // doc
//       //   .font('Merriweather-Regular')
//       //   .fontSize(18)
//       //   .fillColor('#2F4F4F')
//       //   .text(`Order ID: ${orderId || 'N/A'}`, 50, 200, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

// const addHeader = () => {
//   doc
//     .fillColor('#FF8C00')
//     .rect(30, 40, doc.page.width - 60, 30)
//     .fill();
//   doc
//     .fillColor('white')
//     .font('Merriweather-Bold')
//     .fontSize(14)
//     .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//   doc
//     .fillColor('#800000')
//     .rect(30, 72, doc.page.width - 60, 2)
//     .fill();
// };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + orderId, { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/');
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Khana Khazana Menu', 30, currentY);
//     currentY += 30;

//     const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//     const categories = {};
//     const dishCounts = {};

//     (items || []).forEach((item) => {
//       const { categoryName, dishName, ingredients, halwaiId, categoryId, veg } = item || {};
//       if (!categoryName || !dishName) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       categories[categoryName].push({ dishName, ingredients: ingredients || [], halwaiId, categoryId, veg });
//       if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//     });

//     let categoryIndex = 1;
//     for (const [categoryName, dishes] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .rect(30, currentY - 5, 535, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text(`${categoryName} (${dishes.length} Dishes)`, 40, currentY + 5, { lineBreak: false });
//       currentY += 30;

//       let dishIndex = 1;
//       for (const dish of dishes) {
//         currentY = checkPageBreak(currentY, 30, `dish-${dish.dishName}`);
//         const vegLabel = dish.veg === 'veg' ? '(Veg)' : dish.veg === 'non-veg' ? '(Non-Veg)' : '';
//         const dishFont = isHindi(dish.dishName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold';
//         doc
//           .font(dishFont)
//           .fontSize(12)
//           .fillColor('#2F4F4F')
//           .text(`${dishIndex}. ${truncateText(doc, dish.dishName, 450)} ${vegLabel}`, 40, currentY, {
//             lineBreak: false,
//           });
//         currentY += 20;
//         dishIndex++;

//         if (withIngredients && Array.isArray(dish.ingredients) && dish.ingredients.length > 0) {
//           const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//             ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//             : numberOfPersons / 50;

//           const ingredients = dish.ingredients.slice(0, 50);
//           const rowHeight = 20;
//           const headerHeight = 24;

//           let maxIngWidth = 200;
//           let maxQtyWidth = 100;
// ingredients.forEach((ing) => {
//   const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//   const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//   const qtyText = formatQuantity(qty, ing.unit);
//   maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//   maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
// });

// const tableLeft = 60;
// const col1 = tableLeft;
// const col2 = col1 + maxIngWidth + 15;
// const col3 = col2 + maxQtyWidth + 15;
// const tableWidth = Math.min(505, col3 + 50 - tableLeft);

// let remainingIngredients = [...ingredients];
// while (remainingIngredients.length > 0) {
//   currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${dish.dishName}`);

//   const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//   const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//   remainingIngredients = remainingIngredients.slice(rowsPerPage);

//   const tableTop = currentY;

//   doc
//     .fillColor('#FF8C00')
//     .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//     .fill();
//   doc
//     .fillColor('white')
//     .font('Merriweather-Bold')
//     .fontSize(10)
//     .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//     .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//     .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//   let rowY = tableTop + headerHeight;
//   let rowIndex = 0;
//   currentBatch.forEach((ing) => {
//     if (rowIndex % 2 === 0) {
//       doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//     } else {
//       doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//     }
//     doc.fillColor('black');
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//     doc
//       .font(ingFont)
//       .fontSize(10)
//       .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//     doc
//       .font('Merriweather-Regular')
//       .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//     doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//     rowIndex++;
//     rowY += rowHeight;
//   });

//   doc
//     .strokeColor('#800000')
//     .lineWidth(0.5)
//     .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//     .stroke()
//     .moveTo(col2, tableTop)
//     .lineTo(col2, rowY)
//     .moveTo(col3, tableTop)
//     .lineTo(col3, rowY)
//     .stroke();

//   currentY = rowY + 15;
//   doc.y = currentY;
// }
//         }
//       }
//       currentY = checkPageBreak(currentY, 20, `post-category-${categoryName}`);
//     }

//     if (withIngredients) {
//   currentY = renderTable(
//     doc,
//     currentY,
//     masalaItems,
//     'Masala Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     disposableItems,
//     'Disposable Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     ghareluSaman,
//     'Gharelu Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );
//   currentY = renderTable(
//     doc,
//     currentY,
//     tentItems,
//     'Tent Items',
//     numberOfPersons,
//     true,
//     checkPageBreak
//   );

//   currentY = checkPageBreak(currentY, 60, 'totals');
//   doc
//     .font('Merriweather-Bold')
//     .fontSize(14)
//     .fillColor('#800000')
//     .text('Total Consumption', 40, currentY);
//   currentY += 20;
//   const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//   doc
//     .font('Merriweather-Regular')
//     .fontSize(12)
//     .fillColor('black')
//     .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//   doc
//     .font('NotoSerifDevanagari-Regular')
//     .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//   currentY += 20;
//   doc
//     .font('Merriweather-Regular')
//     .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//   doc
//     .font('NotoSerifDevanagari-Regular')
//     .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//   currentY += 20;
// }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + orderId, { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/');
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};

//     // Group items by categoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       categories[categoryName].push({
//         name,
//         type: type || 'dish',
//         quantity: quantity || 1,
//         veg,
//         address,
//         capacity,
//         description,
//         ingredients: item.ingredients || []
//       });
//       dishCounts[categoryName]++;
//     });

//     for (const [categoryName, categoryItems] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       // Render items using renderTable
//       const tableItems = categoryItems.map(item => ({
//         name: `${item.name} ${item.type === 'dish' ? (item.veg === 'veg' ? '(Veg)' : item.veg === 'non-veg' ? '(Non-Veg)' : '') : ''} ${item.type === 'palace' ? `(${item.address || 'N/A'}, Capacity: ${item.capacity || 'N/A'})` : ''} ${item.type === 'decor' ? `(${item.description || 'N/A'})` : ''}`,
//         quantity: item.quantity,
//         unit: item.type === 'dish' ? 'servings' : 'unit'
//       }));
      
//       currentY = renderTable(
//         doc,
//         currentY,
//         tableItems,
//         categoryName,
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
      
//       if (withIngredients && categoryItems.some(item => item.type === 'dish')) {
//         // Render ingredients only for dishes when withIngredients is true
//         for (const item of categoryItems.filter(i => i.type === 'dish')) {
//           if (Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//             const scaleFactor = numberOfPersons / (50 * (dishCounts[categoryName] || 1));
//             const ingredients = item.ingredients.slice(0, 50);
//             const rowHeight = 20;
//             const headerHeight = 24;

//             let maxIngWidth = 200;
//             let maxQtyWidth = 100;
//             ingredients.forEach((ing) => {
//               const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//               const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//               const qtyText = formatQuantity(qty, ing.unit);
//               maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//               maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//             });

//             const tableLeft = 60;
//             const col1 = tableLeft;
//             const col2 = col1 + maxIngWidth + 15;
//             const col3 = col2 + maxQtyWidth + 15;
//             const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//             let remainingIngredients = [...ingredients];
//             while (remainingIngredients.length > 0) {
//               currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${item.name}`);

//               const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//               const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//               remainingIngredients = remainingIngredients.slice(rowsPerPage);

//               const tableTop = currentY;

//               doc
//                 .fillColor('#FF8C00')
//                 .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//                 .fill();
//               doc
//                 .fillColor('white')
//                 .font('Merriweather-Bold')
//                 .fontSize(10)
//                 .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//               let rowY = tableTop + headerHeight;
//               let rowIndex = 0;
//               currentBatch.forEach((ing) => {
//                 if (rowIndex % 2 === 0) {
//                   doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 } else {
//                   doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 }
//                 doc.fillColor('black');
//                 const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//                 const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//                 doc
//                   .font(ingFont)
//                   .fontSize(10)
//                   .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//                 doc
//                   .font('Merriweather-Regular')
//                   .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//                 doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//                 rowIndex++;
//                 rowY += rowHeight;
//               });

//               doc
//                 .strokeColor('#800000')
//                 .lineWidth(0.5)
//                 .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//                 .stroke()
//                 .moveTo(col2, tableTop)
//                 .lineTo(col2, rowY)
//                 .moveTo(col3, tableTop)
//                 .lineTo(col3, rowY)
//                 .stroke();

//               currentY = rowY + 15;
//               doc.y = currentY;
//             }
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('123, Shiv Shakti Nagar, Delhi, India', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('123, शिव शक्ति नगर, दिल्ली, भारत', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 98765 43210', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//       currentY = checkPageBreak(currentY, 40, `category-${title}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(title, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       const itemHeight = 60; // Height for each item (image + name)
//       const tableLeft = 40;
//       const tableWidth = 505;
//       let remainingItems = [...items];

//       while (remainingItems.length > 0) {
//         currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//         const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//         const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//         remainingItems = remainingItems.slice(rowsPerPage);

//         currentBatch.forEach((item, index) => {
//           const rowY = currentY + index * itemHeight;
//           // Background for item row
//           doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//              .rect(tableLeft, rowY, tableWidth, itemHeight)
//              .fill();

//           // Render image if available
//           if (item.imageUrl) {
//             try {
//               doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//             } catch (error) {
//               console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//             }
//           }

//           // Render item name
//           const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//           doc.fillColor('black')
//              .font(font)
//              .fontSize(12)
//              .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//         });

//         currentY += currentBatch.length * itemHeight + 10;
//         doc.y = currentY;
//       }

//       // Draw border around the section
//       doc.strokeColor('#800000')
//          .lineWidth(0.5)
//          .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//          .stroke();

//       return currentY + 10;
//     };

//     const categories = {};
//     const dishCounts = {};

//     // Group items by categoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description, imageUrl } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       categories[categoryName].push({
//         name: `${name} ${type === 'dish' ? (veg === 'veg' ? '(Veg)' : veg === 'non-veg' ? '(Non-Veg)' : '') : ''} ${type === 'palace' ? `(${address || 'N/A'}, Capacity: ${capacity || 'N/A'})` : ''} ${type === 'decor' ? `(${description || 'N/A'})` : ''}`,
//         type: type || 'dish',
//         quantity: quantity || 1,
//         veg,
//         address,
//         capacity,
//         description,
//         imageUrl,
//         ingredients: item.ingredients || []
//       });
//       dishCounts[categoryName]++;
//     });

//     for (const [categoryName, categoryItems] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       if (!withIngredients) {
//         // Render only name and image for without ingredients
//         currentY = renderItemsWithImages(
//           doc,
//           currentY,
//           categoryItems,
//           categoryName,
//           checkPageBreak
//         );
//       } else {
//         // Render items with table for with ingredients
//         const tableItems = categoryItems.map(item => ({
//           name: item.name,
//           quantity: item.quantity,
//           unit: item.type === 'dish' ? 'servings' : 'unit'
//         }));
        
//         currentY = renderTable(
//           doc,
//           currentY,
//           tableItems,
//           categoryName,
//           numberOfPersons,
//           false,
//           checkPageBreak
//         );
        
//         // Render ingredients for dishes
//         for (const item of categoryItems.filter(i => i.type === 'dish')) {
//           if (Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//             const scaleFactor = numberOfPersons / (50 * (dishCounts[categoryName] || 1));
//             const ingredients = item.ingredients.slice(0, 50);
//             const rowHeight = 20;
//             const headerHeight = 24;

//             let maxIngWidth = 200;
//             let maxQtyWidth = 100;
//             ingredients.forEach((ing) => {
//               const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//               const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//               const qtyText = formatQuantity(qty, ing.unit);
//               maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//               maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//             });

//             const tableLeft = 60;
//             const col1 = tableLeft;
//             const col2 = col1 + maxIngWidth + 15;
//             const col3 = col2 + maxQtyWidth + 15;
//             const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//             let remainingIngredients = [...ingredients];
//             while (remainingIngredients.length > 0) {
//               currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${item.name}`);

//               const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//               const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//               remainingIngredients = remainingIngredients.slice(rowsPerPage);

//               const tableTop = currentY;

//               doc
//                 .fillColor('#FF8C00')
//                 .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//                 .fill();
//               doc
//                 .fillColor('white')
//                 .font('Merriweather-Bold')
//                 .fontSize(10)
//                 .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//               let rowY = tableTop + headerHeight;
//               let rowIndex = 0;
//               currentBatch.forEach((ing) => {
//                 if (rowIndex % 2 === 0) {
//                   doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 } else {
//                   doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 }
//                 doc.fillColor('black');
//                 const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//                 const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//                 doc
//                   .font(ingFont)
//                   .fontSize(10)
//                   .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//                 doc
//                   .font('Merriweather-Regular')
//                   .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//                 doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//                 rowIndex++;
//                 rowY += rowHeight;
//               });

//               doc
//                 .strokeColor('#800000')
//                 .lineWidth(0.5)
//                 .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//                 .stroke()
//                 .moveTo(col2, tableTop)
//                 .lineTo(col2, rowY)
//                 .moveTo(col3, tableTop)
//                 .lineTo(col3, rowY)
//                 .stroke();

//               currentY = rowY + 15;
//               doc.y = currentY;
//             }
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




 
// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + orderId, { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/');
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};

//     // Group items by categoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       categories[categoryName].push({
//         name,
//         type: type || 'dish',
//         quantity: quantity || 1,
//         veg,
//         address,
//         capacity,
//         description,
//         ingredients: item.ingredients || []
//       });
//       dishCounts[categoryName]++;
//     });

//     for (const [categoryName, categoryItems] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       // Render items using renderTable
//       const tableItems = categoryItems.map(item => ({
//         name: `${item.name} ${item.type === 'dish' ? (item.veg === 'veg' ? '(Veg)' : item.veg === 'non-veg' ? '(Non-Veg)' : '') : ''} ${item.type === 'palace' ? `(${item.address || 'N/A'}, Capacity: ${item.capacity || 'N/A'})` : ''} ${item.type === 'decor' ? `(${item.description || 'N/A'})` : ''}`,
//         quantity: item.quantity,
//         unit: item.type === 'dish' ? 'servings' : 'unit'
//       }));
      
//       currentY = renderTable(
//         doc,
//         currentY,
//         tableItems,
//         categoryName,
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
      
//       if (withIngredients && categoryItems.some(item => item.type === 'dish')) {
//         // Render ingredients only for dishes when withIngredients is true
//         for (const item of categoryItems.filter(i => i.type === 'dish')) {
//           if (Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//             const scaleFactor = numberOfPersons / (50 * (dishCounts[categoryName] || 1));
//             const ingredients = item.ingredients.slice(0, 50);
//             const rowHeight = 20;
//             const headerHeight = 24;

//             let maxIngWidth = 200;
//             let maxQtyWidth = 100;
//             ingredients.forEach((ing) => {
//               const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//               const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//               const qtyText = formatQuantity(qty, ing.unit);
//               maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//               maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//             });

//             const tableLeft = 60;
//             const col1 = tableLeft;
//             const col2 = col1 + maxIngWidth + 15;
//             const col3 = col2 + maxQtyWidth + 15;
//             const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//             let remainingIngredients = [...ingredients];
//             while (remainingIngredients.length > 0) {
//               currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${item.name}`);

//               const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//               const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//               remainingIngredients = remainingIngredients.slice(rowsPerPage);

//               const tableTop = currentY;

//               doc
//                 .fillColor('#FF8C00')
//                 .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//                 .fill();
//               doc
//                 .fillColor('white')
//                 .font('Merriweather-Bold')
//                 .fontSize(10)
//                 .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//                 .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//               let rowY = tableTop + headerHeight;
//               let rowIndex = 0;
//               currentBatch.forEach((ing) => {
//                 if (rowIndex % 2 === 0) {
//                   doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 } else {
//                   doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//                 }
//                 doc.fillColor('black');
//                 const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//                 const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//                 doc
//                   .font(ingFont)
//                   .fontSize(10)
//                   .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//                 doc
//                   .font('Merriweather-Regular')
//                   .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//                 doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//                 rowIndex++;
//                 rowY += rowHeight;
//               });

//               doc
//                 .strokeColor('#800000')
//                 .lineWidth(0.5)
//                 .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//                 .stroke()
//                 .moveTo(col2, tableTop)
//                 .lineTo(col2, rowY)
//                 .moveTo(col3, tableTop)
//                 .lineTo(col3, rowY)
//                 .stroke();

//               currentY = rowY + 15;
//               doc.y = currentY;
//             }
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
//   const categories = {};
//   const dishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, ingredients } = item || {};
//     if (!categoryName || !ingredients) return;
//     if (!categories[categoryName]) {
//       categories[categoryName] = [];
//       dishCounts[categoryName] = 0;
//     }
//     categories[categoryName].push({ ingredients: ingredients || [] });
//     if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
//   });

//   for (const [categoryName, dishes] of Object.entries(categories)) {
//     const scaleFactor = khanaKhazanaCategories.includes(categoryName)
//       ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
//       : numberOfPersons / 50;

//     dishes.forEach((dish) => {
//       (dish.ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     });
//   }

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('123, Shiv Shakti Nagar, Delhi, India', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('123, शिव शक्ति नगर, दिल्ली, भारत', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 98765 43210', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: 'false' });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};

//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description, imageUrl, ingredients } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = [];
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//       } else if (type === 'palace') {
//         displayName += ` (${address || 'N/A'}, Capacity: ${capacity || 'N/A'})`;
//       } else if (type === 'decor') {
//         displayName += ` (${description || 'N/A'})`;
//       }
//       categories[categoryName].push({
//         name: displayName,
//         type,
//         quantity: quantity || 1,
//         imageUrl,
//         ingredients: ingredients || [],
//         veg
//       });
//     });

//     for (const [categoryName, categoryItems] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       if (!withIngredients) {
//         currentY = renderItemsWithImages(
//           doc,
//           currentY,
//           categoryItems,
//           categoryName,
//           checkPageBreak
//         );
//       } else {
//         for (const item of categoryItems) {
//           currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//           const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//           doc
//             .fillColor('black')
//             .font(font)
//             .fontSize(14)
//             .text(item.name, 50, currentY, { lineBreak: false });
//           currentY += 20;

//           if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//             const scaleFactor = numberOfPersons / (50 * (dishCounts[categoryName] || 1));
//             const ingredients = item.ingredients.slice(0, 50);
//             currentY = renderIngredientsTable(
//               doc,
//               currentY,
//               ingredients,
//               numberOfPersons,
//               scaleFactor,
//               item.name,
//               checkPageBreak
//             );
//           }
//           currentY += 15;
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');
// const { db } = require('./firebaseConfig');
// const { collection, getDocs } = require('firebase/firestore');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   // Group items by sub-category and count dishes
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId || 'Other';
//       if (!subCategoryDishCounts[subCategoryName]) {
//         subCategoryDishCounts[subCategoryName] = 0;
//       }
//       subCategoryDishCounts[subCategoryName]++;
//     }
//   });

//   // Calculate totals based on sub-category dish counts
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId || 'Other';
//       const dishCount = subCategoryDishCounts[subCategoryName] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// const getSubCategories = async (halwaiId) => {
//   try {
//     const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories`));
//     return querySnapshot.docs.reduce((acc, doc) => {
//       acc[doc.id] = doc.data().name || 'Unknown';
//       return acc;
//     }, {});
//   } catch (error) {
//     console.error('Error fetching sub-categories:', error);
//     return {};
//   }
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items, halwaiId } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('123, Shiv Shakti Nagar, Delhi, India', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('123, शिव शक्ति नगर, दिल्ली, भारत', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 98765 43210', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: 'false' });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Fetch sub-categories for Khana Khazana
//     const subCategories = halwaiId ? await getSubCategories(halwaiId) : {};

//     // Group items and count dishes per sub-category
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description, imageUrl, ingredients, subCategoryId } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategoryName = subCategories[subCategoryId] || 'Other';
//         if (!categories[categoryName][subCategoryName]) {
//           categories[categoryName][subCategoryName] = [];
//           subCategoryDishCounts[subCategoryName] = 0;
//         }
//         subCategoryDishCounts[subCategoryName]++;
//         categories[categoryName][subCategoryName].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryId
//         });
//       } else {
//         if (type === 'palace') {
//           displayName += ` (${address || 'N/A'}, Capacity: ${capacity || 'N/A'})`;
//         } else if (type === 'decor') {
//           displayName += ` (${description || 'N/A'})`;
//         }
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//         doc
//           .fillColor('#800000')
//           .font('Merriweather-Bold')
//           .fontSize(14)
//           .text(subCategoryName, 50, currentY, { align: 'left', lineBreak: false });
//         currentY += 20;

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             subCategoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   // Group items by sub-category and count dishes
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId || 'Other';
//       if (!subCategoryDishCounts[subCategoryName]) {
//         subCategoryDishCounts[subCategoryName] = 0;
//       }
//       subCategoryDishCounts[subCategoryName]++;
//     }
//   });

//   // Calculate totals based on sub-category dish counts
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId || 'Other';
//       const dishCount = subCategoryDishCounts[subCategoryName] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('123, Shiv Shakti Nagar, Delhi, India', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('123, शिव शक्ति नगर, दिल्ली, भारत', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 98765 43210', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: 'false' });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addFooter = () => {
//       const pages = doc.bufferedPageRange();
//       for (let i = 1; i <= pages.count; i++) {
//         doc.switchToPage(i);
//         doc
//           .fillColor('#800000')
//           .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
//           .fill();
//         doc
//           .font('Merriweather-Regular')
//           .fontSize(8)
//           .fillColor('white')
//           .text(
//             `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
//             40,
//             doc.page.height - 35,
//             { align: 'center', lineBreak: false }
//           );
//       }
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: ' ' },
//         { task: 'Confirm disposable items quantity', status: ' ' },
//         { task: 'Check gharelu saman availability', status: ' ' },
//         { task: 'Ensure tent items are ready', status: ' ' },
//         { task: 'Review menu with chef', status: ' ' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Static sub-category mapping
//     const subCategories = {
//       'sweet': 'Sweets',
//       'main_course': 'Main Course',
//       'starter': 'Starters',
//       'dessert': 'Desserts',
//       'beverage': 'Beverages',
//       'snack': 'Snacks',
//       'other': 'Other'
//     };

//     // Group items and count dishes per sub-category
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, address, capacity, description, imageUrl, ingredients, subCategoryId } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategoryName = subCategories[subCategoryId] || 'Other';
//         if (!categories[categoryName][subCategoryName]) {
//           categories[categoryName][subCategoryName] = [];
//           subCategoryDishCounts[subCategoryName] = 0;
//         }
//         subCategoryDishCounts[subCategoryName]++;
//         categories[categoryName][subCategoryName].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryId
//         });
//       } else {
//         if (type === 'palace') {
//           displayName += ` (${address || 'N/A'}, Capacity: ${capacity || 'N/A'})`;
//         } else if (type === 'decor') {
//           displayName += ` (${description || 'N/A'})`;
//         }
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//         doc
//           .fillColor('#800000')
//           .font('Merriweather-Bold')
//           .fontSize(14)
//           .text(subCategoryName, 50, currentY, { align: 'left', lineBreak: false });
//         currentY += 20;

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             subCategoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);
//     // addFooter();

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//     mitar: 'L'
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter' || unitLower === 'mitar') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   // Count dishes per sub-category
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, type } = item || {};
//     if (!categoryName || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId;
//       if (!subCategoryDishCounts[subCategoryName]) {
//         subCategoryDishCounts[subCategoryName] = 0;
//       }
//       subCategoryDishCounts[subCategoryName]++;
//     }
//   });

//   // Calculate totals based on sub-category dish counts
//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryId, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategoryName = subCategoryId ;
//       const dishCount = subCategoryDishCounts[subCategoryName] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items, mealType } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Meal Type', value: mealType || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: '☐' },
//         { task: 'Confirm disposable items quantity', status: '☐' },
//         { task: 'Check gharelu saman availability', status: '☐' },
//         { task: 'Ensure tent items are ready', status: '☐' },
//         { task: 'Review menu with chef', status: '☐' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//       { label: 'Meal Type', value: mealType || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Static sub-category mapping
//     const subCategories = {
//       '5rtbNilZWmxmBkYC9Xfk': 'Sweets',
//       'main_course': 'Main Course',
//       'starter': 'Starters',
//       'dessert': 'Desserts',
//       'beverage': 'Beverages',
//       'snack': 'Snacks',
//       'other': 'Other'
//     };

//     // Group items by category and sub-category
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, imageUrl, ingredients, subCategoryId } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategoryName = subCategories[subCategoryId] ;
//         if (!categories[categoryName][subCategoryName]) {
//           categories[categoryName][subCategoryName] = [];
//           subCategoryDishCounts[subCategoryName] = 0;
//         }
//         subCategoryDishCounts[subCategoryName]++;
//         categories[categoryName][subCategoryName].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryId
//         });
//       } else {
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//         doc
//           .fillColor('#800000')
//           .font('Merriweather-Bold')
//           .fontSize(14)
//           .text(subCategoryName, 50, currentY, { align: 'left', lineBreak: false });
//         currentY += 20;

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             subCategoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');
// // Remove Firebase if not needed elsewhere
// // const admin = require('firebase-admin');

// dotenv.config();
// const app = express();

// // // Initialize Firebase Admin SDK (remove if not used elsewhere)
// // if (!admin.apps.length) {
// //   admin.initializeApp({
// //     credential: admin.credential.cert({
// //       projectId: process.env.FIREBASE_PROJECT_ID,
// //       privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
// //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //     }),
// //     databaseURL: process.env.FIREBASE_DATABASE_URL,
// //   });
// // }
// // const db = admin.firestore();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//     mitar: 'L'
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter' || unitLower === 'mitar') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, type } = item || {};
//     if (!categoryName || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       if (!subCategoryDishCounts[subCategory]) {
//         subCategoryDishCounts[subCategory] = 0;
//       }
//       subCategoryDishCounts[subCategory]++;
//     }
//   });

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       const dishCount = subCategoryDishCounts[subCategory] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items, mealType } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Meal Type', value: mealType || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: '☐' },
//         { task: 'Confirm disposable items quantity', status: '☐' },
//         { task: 'Check gharelu saman availability', status: '☐' },
//         { task: 'Ensure tent items are ready', status: '☐' },
//         { task: 'Review menu with chef', status: '☐' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//       { label: 'Meal Type', value: mealType || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Group items by category and subCategoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, imageUrl, ingredients, subCategoryName } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategory = subCategoryName || 'Other';
//         if (!categories[categoryName][subCategory]) {
//           categories[categoryName][subCategory] = [];
//           subCategoryDishCounts[subCategory] = 0;
//         }
//         subCategoryDishCounts[subCategory]++;
//         categories[categoryName][subCategory].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryName
//         });
//       } else {
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//         doc
//           .fillColor('#800000')
//           .font('Merriweather-Bold')
//           .fontSize(14)
//           .text(subCategoryName, 50, currentY, { align: 'left', lineBreak: false });
//         currentY += 20;

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             subCategoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');
// // Remove Firebase if not needed elsewhere
// // const admin = require('firebase-admin');

// dotenv.config();
// const app = express();

// // // Initialize Firebase Admin SDK (remove if not used elsewhere)
// // if (!admin.apps.length) {
// //   admin.initializeApp({
// //     credential: admin.credential.cert({
// //       projectId: process.env.FIREBASE_PROJECT_ID,
// //       privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
// //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //     }),
// //     databaseURL: process.env.FIREBASE_DATABASE_URL,
// //   });
// // }
// // const db = admin.firestore();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//     mitar: 'L'
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter' || unitLower === 'mitar') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, type } = item || {};
//     if (!categoryName || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       if (!subCategoryDishCounts[subCategory]) {
//         subCategoryDishCounts[subCategory] = 0;
//       }
//       subCategoryDishCounts[subCategory]++;
//     }
//   });

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       const dishCount = subCategoryDishCounts[subCategory] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients, filename } = req.body;
//     if (!order || !filename) throw new Error('Missing order or filename');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items, mealType } = order;

//     let formattedDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }


//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Meal Type', value: mealType || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: '☐' },
//         { task: 'Confirm disposable items quantity', status: '☐' },
//         { task: 'Check gharelu saman availability', status: '☐' },
//         { task: 'Ensure tent items are ready', status: '☐' },
//         { task: 'Review menu with chef', status: '☐' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//       { label: 'Meal Type', value: mealType || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Group items by category and subCategoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, imageUrl, ingredients, subCategoryName } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategory = subCategoryName || 'Other';
//         if (!categories[categoryName][subCategory]) {
//           categories[categoryName][subCategory] = [];
//           subCategoryDishCounts[subCategory] = 0;
//         }
//         subCategoryDishCounts[subCategory]++;
//         categories[categoryName][subCategory].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryName
//         });
//       } else {
//         // Non-dish items (e.g., Palace, Decor) go under a generic 'Items' subcategory
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         // Only render subcategory heading for Khana Khazana dishes
//         if (categoryName === 'Khana Khazana' && subCategoryName !== 'Items') {
//           currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//           doc
//             .fillColor('#7A0000')
//             .rect(50, currentY, doc.page.width - 80, 20)
//             .fill();
//           doc
//             .fillColor('white')
//             .font(isHindi(subCategoryName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold')
//             .fontSize(14)
//             .text(subCategoryName, 50, currentY + 3, { align: 'left', lineBreak: false });
//           currentY += 20;
//         }

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             categoryName === 'Khana Khazana' ? subCategoryName : categoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const PDFDocument = require('pdfkit');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// dotenv.config();
// const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

// app.use(cors({
//   origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '10mb' }));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
//   next();
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const masalaItems = [
//   { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
//   { name: 'हल्दी', quantity: 100, unit: 'gm' },
//   { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
//   { name: 'जीरा', quantity: 75, unit: 'gm' },
//   { name: 'हींग', quantity: 20, unit: 'gm' },
//   { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
//   { name: 'काला नमक', quantity: 100, unit: 'gm' },
//   { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
//   { name: 'कलौंजी', quantity: 15, unit: 'gm' },
//   { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
//   { name: 'इलायची', quantity: 15, unit: 'gm' },
//   { name: 'जायफल', quantity: 20, unit: 'gm' },
//   { name: 'लौंग', quantity: 15, unit: 'gm' },
//   { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
//   { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
//   { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
//   { name: 'पान मेथी', quantity: 30, unit: 'gm' },
//   { name: 'अजवाइन', quantity: 30, unit: 'gm' },
//   { name: 'साबूदाना', quantity: 30, unit: 'gm' },
//   { name: 'राई', quantity: 20, unit: 'gm' },
//   { name: 'सौंफ', quantity: 20, unit: 'gm' },
//   { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
//   { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
//   { name: 'मगज बीज', quantity: 150, unit: 'gm' },
//   { name: 'खसखस', quantity: 40, unit: 'gm' },
//   { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
//   { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
//   { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
//   { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
//   { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
//   { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
//   { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
//   { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
//   { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
//   { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
//   { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
//   { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
//   { name: 'नींबू सत', quantity: 20, unit: 'gm' },
//   { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
//   { name: 'हरा रंग', quantity: 5, unit: 'gm' },
//   { name: 'लाल रंग', quantity: 5, unit: 'gm' },
//   { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
//   { name: 'पॉपपर', quantity: 5, unit: 'gm' },
//   { name: 'दालचीनी', quantity: 5, unit: 'gm' },
//   { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
//   { name: 'झाड़ू', quantity: 1, unit: 'नग' },
//   { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
//   { name: 'हार्पिक', quantity: 100, unit: 'gm' },
//   { name: 'चाय', quantity: 50, unit: 'gm' },
//   { name: 'चीनी', quantity: 200, unit: 'gm' },
//   { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
// ];

// const disposableItems = [
//   { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
//   { name: 'नैपकिन', quantity: 75, unit: '' },
//   { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
//   { name: 'बाउल', quantity: 75, unit: '' },
//   { name: 'कॉफी गिलास', quantity: 100, unit: '' },
//   { name: 'चाय गिलास', quantity: 100, unit: '' },
//   { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
//   { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
//   { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
//   { name: 'टूथपिक', quantity: 50, unit: '' },
//   { name: 'मोम डब्बा', quantity: 4, unit: '' },
//   { name: 'ग्लव्स', quantity: 5, unit: '' },
//   { name: 'मास्क', quantity: 5, unit: '' },
//   { name: 'टोपी', quantity: 5, unit: '' },
// ];

// const ghareluSaman = [
//   { name: 'गैस टंकी', quantity: 2, unit: '' },
//   { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
//   { name: 'कांटा', quantity: 1, unit: '' },
//   { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
//   { name: 'अखबार', quantity: 1, unit: '' },
//   { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
//   { name: 'चाकू', quantity: 2, unit: '' },
//   { name: 'चिल्लर', quantity: 2, unit: '' },
//   { name: 'आटा छलनी', quantity: 1, unit: '' },
//   { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
//   { name: 'खाली कार्टन', quantity: 1, unit: '' },
// ];

// const tentItems = [
//   { name: 'दाल मशीन', quantity: 1, unit: '' },
//   { name: 'आटा मशीन', quantity: 1, unit: '' },
//   { name: 'टोपियाँ', quantity: 5, unit: '' },
//   { name: 'ढक्कन', quantity: 3, unit: '' },
//   { name: 'खुमचा', quantity: 5, unit: '' },
//   { name: 'परात', quantity: 20, unit: '' },
//   { name: 'गैस भट्टा', quantity: 1, unit: '' },
//   { name: 'रोटी भट्टा', quantity: 1, unit: '' },
//   { name: 'छोटी भटकन', quantity: 1, unit: '' },
//   { name: 'कतली पट्टा', quantity: 1, unit: '' },
//   { name: 'कतली पर्चा', quantity: 1, unit: '' },
//   { name: 'कतली डब्बा', quantity: 3, unit: '' },
//   { name: 'कतली बेलन', quantity: 1, unit: '' },
//   { name: 'घी कढ़ाई', quantity: 1, unit: '' },
//   { name: 'चाशनी कढ़', quantity: 1, unit: '' },
//   { name: 'बर्तन टब', quantity: 1, unit: '' },
//   { name: 'जलेबी तवा', quantity: 1, unit: '' },
//   { name: 'छोटा टोपिया', quantity: 1, unit: '' },
//   { name: 'बाल्टी', quantity: 1, unit: '' },
//   { name: 'जग', quantity: 1, unit: '' },
//   { name: 'धमक', quantity: 3, unit: '' },
//   { name: 'कुर्चा', quantity: 1, unit: '' },
//   { name: 'थाली', quantity: 20, unit: '' },
//   { name: 'चावल चालनी', quantity: 1, unit: '' },
//   { name: 'दरी', quantity: 1, unit: '' },
//   { name: 'कुर्सी', quantity: 5, unit: '' },
//   { name: 'फराटा पंखा', quantity: 1, unit: '' },
//   { name: 'पाइप छालनी', quantity: 1, unit: '' },
//   { name: 'प्लेट', quantity: 50, unit: '' },
//   { name: 'कटोरी', quantity: 50, unit: '' },
//   { name: 'खाना सेट', quantity: 5, unit: '' },
//   { name: 'टेबल', quantity: 5, unit: '' },
// ];

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file provided' });

//     const uploadResponse = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: 'halwai-app/dishes' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     res.json({ url: uploadResponse.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload image', details: error.message });
//   }
// });

// const formatUnit = (unit) => {
//   if (!unit) return '';
//   const unitMap = {
//     kg: 'kg',
//     gram: 'g',
//     gm: 'g',
//     litre: 'L',
//     liter: 'L',
//     packet: 'packet',
//     piece: 'piece',
//     ml: 'ml',
//     gaddi: 'gaddi',
//     nag: 'piece',
//     पैकेट: 'packet',
//     नग: 'piece',
//     mitar: 'L'
//   };
//   return unitMap[unit.toLowerCase()] || unit;
// };

// const formatQuantity = (quantity, unit) => {
//   if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
//   const formattedUnit = formatUnit(unit).toLowerCase();
//   if (formattedUnit === 'g' && quantity >= 1000) {
//     return `${(quantity / 1000).toFixed(2)} kg`;
//   }
//   return `${quantity} ${formattedUnit}`;
// };

// const capitalizeText = (text) => {
//   if (!text || typeof text !== 'string') return '';
//   return text
//     .trim()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// const truncateText = (doc, text, maxWidth) => {
//   if (!text || typeof text !== 'string') return '';
//   let result = text.trim().slice(0, 25);
//   if (doc.widthOfString(result) <= maxWidth) return result;
//   return result.slice(0, 22) + '...';
// };

// const convertToLiters = (quantity, unit) => {
//   if (!quantity || !unit) return 0;
//   const unitLower = unit.toLowerCase();
//   if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter' || unitLower === 'mitar') return quantity;
//   if (unitLower === 'ml') return quantity / 1000;
//   if (unitLower === 'kg') return quantity;
//   if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
//   return 0;
// };

// const calculateTotals = (items, numberOfPersons, masalaItems) => {
//   let totalOil = 0;
//   let totalGhee = 0;

//   const khanaKhazanaCategories = ['Khana Khazana'];
//   const subCategoryDishCounts = {};

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, type } = item || {};
//     if (!categoryName || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       if (!subCategoryDishCounts[subCategory]) {
//         subCategoryDishCounts[subCategory] = 0;
//       }
//       subCategoryDishCounts[subCategory]++;
//     }
//   });

//   (items || []).forEach((item) => {
//     const { categoryName, subCategoryName, ingredients, type } = item || {};
//     if (!categoryName || !ingredients || type !== 'dish') return;
//     if (khanaKhazanaCategories.includes(categoryName)) {
//       const subCategory = subCategoryName || 'Other';
//       const dishCount = subCategoryDishCounts[subCategory] || 1;
//       const scaleFactor = numberOfPersons / (50 * dishCount);
//       (ingredients || []).forEach((ing) => {
//         const nameLower = (ing.name || '').toLowerCase();
//         const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//         if (/^(oil|tel)$/i.test(nameLower)) {
//           totalOil += convertToLiters(qty, ing.unit);
//         } else if (/^ghee$/i.test(nameLower)) {
//           totalGhee += convertToLiters(qty, ing.unit);
//         }
//       });
//     }
//   });

//   masalaItems.forEach((item) => {
//     const nameLower = (item.name || '').toLowerCase();
//     const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
//     if (/^(oil|tel)$/i.test(nameLower)) {
//       totalOil += convertToLiters(qty, item.unit);
//     } else if (/^ghee$/i.test(nameLower)) {
//       totalGhee += convertToLiters(qty, item.unit);
//     }
//   });

//   return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
// };

// const isHindi = (text) => {
//   if (!text || typeof text !== 'string') return false;
//   return /[\u0900-\u097F]/.test(text);
// };

// const drawDecorativeBorder = (doc) => {
//   doc
//     .strokeColor('#FF8C00')
//     .lineWidth(2)
//     .moveTo(30, 30)
//     .lineTo(565, 30)
//     .moveTo(30, 30)
//     .lineTo(30, 812)
//     .moveTo(565, 30)
//     .lineTo(565, 812)
//     .moveTo(30, 812)
//     .lineTo(565, 812)
//     .stroke();
//   for (let i = 40; i < 560; i += 20) {
//     doc
//       .fillColor('#FFD700')
//       .circle(i, 35, 3)
//       .fill()
//       .circle(i, 807, 3)
//       .fill();
//   }
// };

// const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
//   const headerHeight = 24;
//   const rowHeight = 22;
//   const tableLeft = 40;
//   let maxNameWidth = 250;
//   let maxQtyWidth = 120;

//   items.forEach((item) => {
//     const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//     const unit = formatUnit(item.unit);
//     const nameText = truncateText(doc, item.name, 300);
//     const qtyText = formatQuantity(qty, item.unit);
//     maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
//     maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxNameWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(525, col3 + 50 - tableLeft);

//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
//     doc.y = currentY;

//     doc
//       .fillColor('#800000')
//       .font('Merriweather-Bold')
//       .fontSize(16)
//       .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
//     currentY += 20;

//     const tableTop = currentY;
//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((item) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(font)
//         .fontSize(10)
//         .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }
//   return currentY + 10;
// };

// const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
//   currentY = checkPageBreak(currentY, 40, `category-${title}`);
//   doc
//     .fillColor('#800000')
//     .font('Merriweather-Bold')
//     .fontSize(16)
//     .text(title, 40, currentY, { align: 'left', lineBreak: false });
//   currentY += 20;

//   const itemHeight = 60;
//   const tableLeft = 40;
//   const tableWidth = 505;
//   let remainingItems = [...items];

//   while (remainingItems.length > 0) {
//     currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
//     const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
//     const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
//     remainingItems = remainingItems.slice(rowsPerPage);

//     currentBatch.forEach((item, index) => {
//       const rowY = currentY + index * itemHeight;
//       doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
//          .rect(tableLeft, rowY, tableWidth, itemHeight)
//          .fill();

//       if (item.imageUrl) {
//         try {
//           doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
//         } catch (error) {
//           console.warn(`Failed to load image for ${item.name}: ${error.message}`);
//         }
//       }

//       const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.fillColor('black')
//          .font(font)
//          .fontSize(12)
//          .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
//     });

//     currentY += currentBatch.length * itemHeight + 10;
//     doc.y = currentY;
//   }

//   doc.strokeColor('#800000')
//      .lineWidth(0.5)
//      .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
//      .stroke();

//   return currentY + 10;
// };

// const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
//   if (!ingredients || ingredients.length === 0) return currentY;

//   const headerHeight = 24;
//   const rowHeight = 20;
//   const tableLeft = 60;
//   let maxIngWidth = 200;
//   let maxQtyWidth = 100;

//   ingredients.forEach((ing) => {
//     const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//     const ingText = truncateText(doc, ing.name || 'Unknown', 300);
//     const qtyText = formatQuantity(qty, ing.unit);
//     maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
//     maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
//   });

//   const col1 = tableLeft;
//   const col2 = col1 + maxIngWidth + 15;
//   const col3 = col2 + maxQtyWidth + 15;
//   const tableWidth = Math.min(505, col3 + 50 - tableLeft);

//   let remainingIngredients = [...ingredients];

//   while (remainingIngredients.length > 0) {
//     currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
//     console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

//     const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
//     const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
//     remainingIngredients = remainingIngredients.slice(rowsPerPage);

//     const tableTop = currentY;

//     doc
//       .fillColor('#FF8C00')
//       .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(10)
//       .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
//       .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
//       .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

//     let rowY = tableTop + headerHeight;
//     let rowIndex = 0;
//     currentBatch.forEach((ing) => {
//       if (rowIndex % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
//       }
//       doc.fillColor('black');
//       const qty = Number((ing.quantity * scaleFactor).toFixed(2));
//       const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc
//         .font(ingFont)
//         .fontSize(10)
//         .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
//       doc
//         .font('Merriweather-Regular')
//         .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
//       doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
//       rowIndex++;
//       rowY += rowHeight;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
//       .stroke()
//       .moveTo(col2, tableTop)
//       .lineTo(col2, rowY)
//       .moveTo(col3, tableTop)
//       .lineTo(col3, rowY)
//       .stroke();

//     currentY = rowY + 15;
//     doc.y = currentY;
//   }

//   return currentY;
// };

// app.post('/api/compose-latex', async (req, res) => {
//   try {
//     console.log('Received POST request at /api/compose-latex');
//     const { order, withIngredients } = req.body;
//     if (!order) throw new Error('Missing order');

//     const { orderId, customerName, numberOfPersons, functionDate, functionName, items, mealType } = order;

//     // Sanitize customerName and functionName for safe filename
//     const sanitizeFilename = (str) => {
//       if (!str || typeof str !== 'string') return 'unknown';
//       return str
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, '_') // Replace non-alphanumeric with underscore
//         .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores
//     };

//     // Format date to YYYY-MM-DD
//     let formattedDate = 'unknown';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
//       }
//     } catch (error) {
//       console.warn('Error formatting date for filename:', error.message);
//     }

//     // Construct filename
//     const filename = `${sanitizeFilename(customerName)}-${sanitizeFilename(functionName)}-${formattedDate}`;

//     let formattedDisplayDate = 'N/A';
//     try {
//       let date;
//       if (functionDate && typeof functionDate === 'object') {
//         if (functionDate.toDate) {
//           date = functionDate.toDate();
//         } else if (typeof functionDate.seconds === 'number') {
//           date = new Date(functionDate.seconds * 1000);
//         }
//       } else if (functionDate && typeof functionDate === 'string') {
//         date = new Date(functionDate);
//       } else if (functionDate instanceof Date) {
//         date = functionDate;
//       }
//       if (date && !isNaN(date.getTime())) {
//         formattedDisplayDate = date.toLocaleDateString('en-US', {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//         });
//       } else {
//         console.warn('Invalid date parsed:', date);
//       }
//     } catch (error) {
//       console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
//     }

//     const doc = new PDFDocument({ size: 'A4', margin: 30 });
//     try {
//       doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
//       doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
//       doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
//       doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
//     } catch (error) {
//       console.error('Failed to register fonts:', error.message);
//       throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
//     }

//     const tempDir = path.join(__dirname, 'temp');
//     const pdfFile = path.join(tempDir, `${filename}.pdf`);

//     if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

//     const writeStream = fs.createWriteStream(pdfFile);
//     doc.pipe(writeStream);

//     let pageBreakCount = 0;
//     const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
//       const pageHeight = doc.page.height - 80;
//       if (currentY + requiredSpace > pageHeight) {
//         pageBreakCount++;
//         console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
//         if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
//         doc.addPage();
//         addHeader();
//         drawDecorativeBorder(doc);
//         return 100;
//       }
//       return currentY;
//     };

//     const addCoverPage = () => {
//       doc
//         .fillColor('#FFFDD0')
//         .rect(0, 0, doc.page.width, doc.page.height)
//         .fill();
//       drawDecorativeBorder(doc);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(36)
//         .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Bold')
//         .fontSize(24)
//         .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(16)
//         .fillColor('#e65c2e')
//         .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .fontSize(14)
//         .fillColor('#e65c2e')
//         .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
//       doc
//         .fillColor('#FF8C00')
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(18)
//         .fillColor('#872741')
//         .text(`Event: ${functionName || 'N/A'} on ${formattedDisplayDate}`, 50, 380, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#800000')
//         .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
//       doc
//         .font('Merriweather-Regular')
//         .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
//       doc.addPage();
//     };

//     const addHeader = () => {
//       doc
//         .fillColor('#FF8C00')
//         .rect(30, 40, doc.page.width - 60, 30)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
//       doc
//         .fillColor('#800000')
//         .rect(30, 72, doc.page.width - 60, 2)
//         .fill();
//     };

//     const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
//       doc.addPage();
//       addHeader();
//       drawDecorativeBorder(doc);
//       let currentY = 100;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(20)
//         .fillColor('#800000')
//         .text('Order Summary', 30, currentY, { align: 'center' });
//       currentY += 40;

//       const tableLeft = 30;
//       const col1 = tableLeft;
//       const col2 = col1 + 250;
//       const tableWidth = 535;

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(12)
//         .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//       const summaryDetails = [
//         { label: 'Customer Name', value: customerName || 'N/A' },
//         { label: 'Event Name', value: functionName || 'N/A' },
//         { label: 'Event Date', value: formattedDisplayDate || 'N/A' },
//         { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//         { label: 'Meal Type', value: mealType || 'N/A' },
//         { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
//         { label: 'Total Oil', value: `${totalOil} लीटर` },
//         { label: 'Total Ghee', value: `${totalGhee} लीटर` },
//       ];

//       let rowY = currentY + 25;
//       doc.font('Merriweather-Regular').fontSize(10);
//       summaryDetails.forEach((detail, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc.fillColor('black');
//         doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//         const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//         doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .fillColor('#800000')
//         .text('Preparation Checklist', 30, currentY);
//       currentY += 20;

//       const checklist = [
//         { task: 'Verify all masala items are packed', status: '☐' },
//         { task: 'Confirm disposable items quantity', status: '☐' },
//         { task: 'Check gharelu saman availability', status: '☐' },
//         { task: 'Ensure tent items are ready', status: '☐' },
//         { task: 'Review menu with chef', status: '☐' },
//       ];

//       doc
//         .fillColor('#FF8C00')
//         .rect(tableLeft, currentY, tableWidth, 25)
//         .fill();
//       doc
//         .fillColor('white')
//         .font('Merriweather-Bold')
//         .fontSize(10)
//         .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
//         .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

//       rowY = currentY + 25;
//       checklist.forEach((item, index) => {
//         if (index % 2 === 0) {
//           doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//         } else {
//           doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//         }
//         doc
//           .fillColor('black')
//           .font('Merriweather-Regular')
//           .fontSize(10)
//           .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
//           .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
//         rowY += 20;
//       });

//       doc
//         .strokeColor('#800000')
//         .lineWidth(0.5)
//         .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//         .stroke();

//       currentY = rowY + 30;

//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('#2F4F4F')
//         .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
//         .font('NotoSerifDevanagari-Regular')
//         .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
//     };

//     addCoverPage();
//     addHeader();
//     drawDecorativeBorder(doc);

//     let currentY = 100;

//     doc
//       .font('Merriweather-Bold')
//       .fontSize(24)
//       .fillColor('#800000')
//       .text('Order Details', 30, currentY, { align: 'center' });
//     currentY = checkPageBreak(currentY + 40, 120, 'header');

//     const tableLeft = 30;
//     const col1 = tableLeft;
//     const col2 = col1 + 250;
//     const tableWidth = 535;

//     doc
//       .fillColor('#FF8C00')
//       .rect(tableLeft, currentY, tableWidth, 25)
//       .fill();
//     doc
//       .fillColor('white')
//       .font('Merriweather-Bold')
//       .fontSize(12)
//       .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
//       .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

//     const details = [
//       { label: 'Customer Name', value: customerName || 'N/A' },
//       { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
//       { label: 'Function Date', value: formattedDisplayDate || 'N/A' },
//       { label: 'Function Name', value: functionName || 'N/A' },
//       { label: 'Meal Type', value: mealType || 'N/A' },
//     ];

//     let rowY = currentY + 25;
//     doc.font('Merriweather-Regular').fontSize(10);
//     details.forEach((detail, index) => {
//       if (index % 2 === 0) {
//         doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
//       } else {
//         doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
//       }
//       doc.fillColor('black');
//       doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
//       const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//       doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
//       rowY += 20;
//     });

//     doc
//       .strokeColor('#800000')
//       .lineWidth(0.5)
//       .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
//       .stroke();

//     currentY = rowY + 30;

//     const qrCodeBuffer = await new Promise((resolve, reject) => {
//       QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
//         if (err) reject(err);
//         else resolve(buffer);
//       });
//     });
//     doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

//     doc
//       .moveTo(30, currentY)
//       .lineTo(565, currentY)
//       .strokeColor('#FF8C00')
//       .lineWidth(2)
//       .stroke();

//     currentY = checkPageBreak(currentY + 30, 50, 'menu');
//     doc
//       .font('Merriweather-Bold')
//       .fontSize(18)
//       .fillColor('#800000')
//       .text('Order Items', 30, currentY);
//     currentY += 30;

//     const categories = {};
//     const dishCounts = {};
//     const subCategoryDishCounts = {};

//     // Group items by category and subCategoryName
//     (items || []).forEach((item) => {
//       const { categoryName, name, type, quantity, veg, imageUrl, ingredients, subCategoryName } = item || {};
//       if (!categoryName || !name) return;
//       if (!categories[categoryName]) {
//         categories[categoryName] = {};
//         dishCounts[categoryName] = 0;
//       }
//       let displayName = name;
//       if (type === 'dish') {
//         displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
//         dishCounts[categoryName]++;
//         const subCategory = subCategoryName || 'Other';
//         if (!categories[categoryName][subCategory]) {
//           categories[categoryName][subCategory] = [];
//           subCategoryDishCounts[subCategory] = 0;
//         }
//         subCategoryDishCounts[subCategory]++;
//         categories[categoryName][subCategory].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg,
//           subCategoryName
//         });
//       } else {
//         // Non-dish items (e.g., Palace, Decor) go under a generic 'Items' subcategory
//         if (!categories[categoryName]['Items']) {
//           categories[categoryName]['Items'] = [];
//         }
//         categories[categoryName]['Items'].push({
//           name: displayName,
//           type,
//           quantity: quantity || 1,
//           imageUrl,
//           ingredients: ingredients || [],
//           veg
//         });
//       }
//     });

//     for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
//       currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
//       doc
//         .fillColor('#800000')
//         .font('Merriweather-Bold')
//         .fontSize(16)
//         .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
//       currentY += 20;

//       for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
//         // Only render subcategory heading for Khana Khazana dishes
//         if (categoryName === 'Khana Khazana' && subCategoryName !== 'Items') {
//           currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
//           doc
//             .fillColor('#7A0000')
//             .rect(50, currentY, doc.page.width - 80, 20)
//             .fill();
//           doc
//             .fillColor('white')
//             .font(isHindi(subCategoryName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold')
//             .fontSize(14)
//             .text(subCategoryName, 50, currentY + 3, { align: 'left', lineBreak: false });
//           currentY += 20;
//         }

//         if (!withIngredients) {
//           currentY = renderItemsWithImages(
//             doc,
//             currentY,
//             categoryItems,
//             categoryName === 'Khana Khazana' ? subCategoryName : categoryName,
//             checkPageBreak
//           );
//         } else {
//           const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
//           const scaleFactor = numberOfPersons / (50 * dishCount);
//           for (const item of categoryItems) {
//             currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
//             const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
//             doc
//               .fillColor('black')
//               .font(font)
//               .fontSize(14)
//               .text(item.name, 60, currentY, { lineBreak: false });
//             currentY += 20;

//             if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
//               const ingredients = item.ingredients.slice(0, 50);
//               currentY = renderIngredientsTable(
//                 doc,
//                 currentY,
//                 ingredients,
//                 numberOfPersons,
//                 scaleFactor,
//                 item.name,
//                 checkPageBreak
//               );
//             }
//             currentY += 15;
//           }
//         }
//       }
//     }

//     if (withIngredients) {
//       currentY = renderTable(
//         doc,
//         currentY,
//         masalaItems,
//         'Masala Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         disposableItems,
//         'Disposable Items',
//         numberOfPersons,
//         true,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         ghareluSaman,
//         'Gharelu Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );
//       currentY = renderTable(
//         doc,
//         currentY,
//         tentItems,
//         'Tent Items',
//         numberOfPersons,
//         false,
//         checkPageBreak
//       );

//       currentY = checkPageBreak(currentY, 60, 'totals');
//       doc
//         .font('Merriweather-Bold')
//         .fontSize(14)
//         .fillColor('#800000')
//         .text('Total Consumption', 40, currentY);
//       currentY += 20;
//       const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//       doc
//         .font('Merriweather-Regular')
//         .fontSize(12)
//         .fillColor('black')
//         .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
//       currentY += 20;
//       doc
//         .font('Merriweather-Regular')
//         .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
//       doc
//         .font('NotoSerifDevanagari-Regular')
//         .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
//       currentY += 20;
//     }

//     const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
//     addSummaryPage(categories, totalOil, totalGhee, dishCounts);

//     doc.end();

//     writeStream.on('close', () => {
//       fs.readFile(pdfFile, (err, data) => {
//         if (err) {
//           console.error('Error reading PDF:', err);
//           return res.status(500).json({ error: 'Failed to read PDF' });
//         }
//         res.set({
//           'Content-Type': 'application/pdf',
//           'Content-Disposition': `attachment; filename="${filename}.pdf"`,
//         });
//         res.send(data);
//         fs.unlinkSync(pdfFile);
//       });
//     });

//     writeStream.on('error', (error) => {
//       console.error('Error writing PDF:', error);
//       res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error.message, error.stack);
//     res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

dotenv.config();
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors({
  origin: ['https://shivshakticatering.netlify.app', 'https://shivshakticatering.netlify.app/'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url} from origin: ${req.get('Origin')}`);
  next();
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const masalaItems = [
  { name: 'लाल मिर्च', quantity: 150, unit: 'gm' },
  { name: 'हल्दी', quantity: 100, unit: 'gm' },
  { name: 'पिसा हुआ धनिया', quantity: 150, unit: 'gm' },
  { name: 'जीरा', quantity: 75, unit: 'gm' },
  { name: 'हींग', quantity: 20, unit: 'gm' },
  { name: 'टाटा नमक', quantity: 750, unit: 'gm' },
  { name: 'काला नमक', quantity: 100, unit: 'gm' },
  { name: 'तेजपत्ता', quantity: 5, unit: 'gm' },
  { name: 'कलौंजी', quantity: 15, unit: 'gm' },
  { name: 'पंचफोरन / पंचबागर', quantity: 15, unit: 'gm' },
  { name: 'इलायची', quantity: 15, unit: 'gm' },
  { name: 'जायफल', quantity: 20, unit: 'gm' },
  { name: 'लौंग', quantity: 15, unit: 'gm' },
  { name: 'काली मिर्च चूरा', quantity: 50, unit: 'gm' },
  { name: 'सूखी सोंठ (पीसी हुई)', quantity: 50, unit: 'gm' },
  { name: 'सफेद मिर्च पीसी', quantity: 50, unit: 'gm' },
  { name: 'पान मेथी', quantity: 30, unit: 'gm' },
  { name: 'अजवाइन', quantity: 30, unit: 'gm' },
  { name: 'साबूदाना', quantity: 30, unit: 'gm' },
  { name: 'राई', quantity: 20, unit: 'gm' },
  { name: 'सौंफ', quantity: 20, unit: 'gm' },
  { name: 'पीली सरसों', quantity: 5, unit: 'gm' },
  { name: 'गिरी बुरादा', quantity: 150, unit: 'gm' },
  { name: 'मगज बीज', quantity: 150, unit: 'gm' },
  { name: 'खसखस', quantity: 40, unit: 'gm' },
  { name: 'काजू टुकड़ी', quantity: 40, unit: 'gm' },
  { name: 'करी पत्ता', quantity: 5, unit: 'gm' },
  { name: 'चाट मसाला', quantity: 20, unit: 'gm' },
  { name: 'देगी मिर्च', quantity: 20, unit: 'gm' },
  { name: 'पनीर मसाला', quantity: 20, unit: 'gm' },
  { name: 'छोला मसाला', quantity: 20, unit: 'gm' },
  { name: 'किचन किंग मसाला', quantity: 20, unit: 'gm' },
  { name: 'टमाटर प्यूरी', quantity: 200, unit: 'gm' },
  { name: 'टमाटर सॉस', quantity: 200, unit: 'gm' },
  { name: 'रेड चिली सॉस', quantity: 100, unit: 'gm' },
  { name: 'फोला मिर्च बिना गूंठ', quantity: 75, unit: 'gm' },
  { name: 'आमचूर पिसी', quantity: 50, unit: 'gm' },
  { name: 'नींबू सत', quantity: 20, unit: 'gm' },
  { name: 'मीठा सोडा', quantity: 20, unit: 'gm' },
  { name: 'हरा रंग', quantity: 5, unit: 'gm' },
  { name: 'लाल रंग', quantity: 5, unit: 'gm' },
  { name: 'केसरिया रंग', quantity: 5, unit: 'gm' },
  { name: 'पॉपपर', quantity: 5, unit: 'gm' },
  { name: 'दालचीनी', quantity: 5, unit: 'gm' },
  { name: 'माचिस', quantity: 1, unit: 'पैकेट' },
  { name: 'झाड़ू', quantity: 1, unit: 'नग' },
  { name: 'निर्मल सर्फ', quantity: 500, unit: 'gm' },
  { name: 'हार्पिक', quantity: 100, unit: 'gm' },
  { name: 'चाय', quantity: 50, unit: 'gm' },
  { name: 'चीनी', quantity: 200, unit: 'gm' },
  { name: 'कॉफी पाउडर', quantity: 20, unit: 'gm' },
];

const disposableItems = [
  { name: 'पानी गिलास', quantity: 150, unit: 'नग' },
  { name: 'नैपकिन', quantity: 75, unit: '' },
  { name: 'चावल सर्विंग स्पून', quantity: 75, unit: '' },
  { name: 'बाउल', quantity: 75, unit: '' },
  { name: 'कॉफी गिलास', quantity: 100, unit: '' },
  { name: 'चाय गिलास', quantity: 100, unit: '' },
  { name: 'क्लीन रोल', quantity: 100, unit: 'gm' },
  { name: 'टेबल रोल', quantity: 200, unit: 'gm' },
  { name: 'दूध गिलास', quantity: 50, unit: 'नग' },
  { name: 'टूथपिक', quantity: 50, unit: '' },
  { name: 'मोम डब्बा', quantity: 4, unit: '' },
  { name: 'ग्लव्स', quantity: 5, unit: '' },
  { name: 'मास्क', quantity: 5, unit: '' },
  { name: 'टोपी', quantity: 5, unit: '' },
];

const ghareluSaman = [
  { name: 'गैस टंकी', quantity: 2, unit: '' },
  { name: 'मिक्सी सुजाता', quantity: 1, unit: '' },
  { name: 'कांटा', quantity: 1, unit: '' },
  { name: 'छोटी खुर्पी', quantity: 1, unit: '' },
  { name: 'अखबार', quantity: 1, unit: '' },
  { name: 'पुराना कपड़ा', quantity: 3, unit: '' },
  { name: 'चाकू', quantity: 2, unit: '' },
  { name: 'चिल्लर', quantity: 2, unit: '' },
  { name: 'आटा छलनी', quantity: 1, unit: '' },
  { name: 'छलनी/छाजड़ी', quantity: 2, unit: '' },
  { name: 'खाली कार्टन', quantity: 1, unit: '' },
];

const tentItems = [
  { name: 'दाल मशीन', quantity: 1, unit: '' },
  { name: 'आटा मशीन', quantity: 1, unit: '' },
  { name: 'टोपियाँ', quantity: 5, unit: '' },
  { name: 'ढक्कन', quantity: 3, unit: '' },
  { name: 'खुमचा', quantity: 5, unit: '' },
  { name: 'परात', quantity: 20, unit: '' },
  { name: 'गैस भट्टा', quantity: 1, unit: '' },
  { name: 'रोटी भट्टा', quantity: 1, unit: '' },
  { name: 'छोटी भटकन', quantity: 1, unit: '' },
  { name: 'कतली पट्टा', quantity: 1, unit: '' },
  { name: 'कतली पर्चा', quantity: 1, unit: '' },
  { name: 'कतली डब्बा', quantity: 3, unit: '' },
  { name: 'कतली बेलन', quantity: 1, unit: '' },
  { name: 'घी कढ़ाई', quantity: 1, unit: '' },
  { name: 'चाशनी कढ़', quantity: 1, unit: '' },
  { name: 'बर्तन टब', quantity: 1, unit: '' },
  { name: 'जलेबी तवा', quantity: 1, unit: '' },
  { name: 'छोटा टोपिया', quantity: 1, unit: '' },
  { name: 'बाल्टी', quantity: 1, unit: '' },
  { name: 'जग', quantity: 1, unit: '' },
  { name: 'धमक', quantity: 3, unit: '' },
  { name: 'कुर्चा', quantity: 1, unit: '' },
  { name: 'थाली', quantity: 20, unit: '' },
  { name: 'चावल चालनी', quantity: 1, unit: '' },
  { name: 'दरी', quantity: 1, unit: '' },
  { name: 'कुर्सी', quantity: 5, unit: '' },
  { name: 'फराटा पंखा', quantity: 1, unit: '' },
  { name: 'पाइप छालनी', quantity: 1, unit: '' },
  { name: 'प्लेट', quantity: 50, unit: '' },
  { name: 'कटोरी', quantity: 50, unit: '' },
  { name: 'खाना सेट', quantity: 5, unit: '' },
  { name: 'टेबल', quantity: 5, unit: '' },
];

app.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image file provided' });

    const uploadResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'halwai-app/dishes' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    res.json({ url: uploadResponse.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image', details: error.message });
  }
});

const formatUnit = (unit) => {
  if (!unit) return '';
  const unitMap = {
    kg: 'kg',
    gram: 'g',
    gm: 'g',
    litre: 'L',
    liter: 'L',
    packet: 'packet',
    piece: 'piece',
    ml: 'ml',
    gaddi: 'gaddi',
    nag: 'piece',
    पैकेट: 'packet',
    नग: 'piece',
    mitar: 'L'
  };
  return unitMap[unit.toLowerCase()] || unit;
};

const formatQuantity = (quantity, unit) => {
  if (!quantity || !unit) return `${quantity}${unit ? ' ' + formatUnit(unit) : ''}`;
  const formattedUnit = formatUnit(unit).toLowerCase();
  if (formattedUnit === 'g' && quantity >= 1000) {
    return `${(quantity / 1000).toFixed(2)} kg`;
  }
  return `${quantity} ${formattedUnit}`;
};

const capitalizeText = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const truncateText = (doc, text, maxWidth) => {
  if (!text || typeof text !== 'string') return '';
  let result = text.trim().slice(0, 25);
  if (doc.widthOfString(result) <= maxWidth) return result;
  return result.slice(0, 22) + '...';
};

const convertToLiters = (quantity, unit) => {
  if (!quantity || !unit) return 0;
  const unitLower = unit.toLowerCase();
  if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter' || unitLower === 'mitar') return quantity;
  if (unitLower === 'ml') return quantity / 1000;
  if (unitLower === 'kg') return quantity;
  if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
  return 0;
};

const calculateTotals = (items, numberOfPersons, masalaItems) => {
  let totalOil = 0;
  let totalGhee = 0;

  const khanaKhazanaCategories = ['Khana Khazana'];
  const subCategoryDishCounts = {};

  // Count dishes per subcategory
  (items || []).forEach((item) => {
    const { categoryName, subCategoryName, type } = item || {};
    if (!categoryName || type !== 'dish') return;
    if (khanaKhazanaCategories.includes(categoryName)) {
      const subCategory = subCategoryName || 'Other';
      if (!subCategoryDishCounts[subCategory]) {
        subCategoryDishCounts[subCategory] = 0;
      }
      subCategoryDishCounts[subCategory]++;
    }
  });
  console.log('Subcategory dish counts:', subCategoryDishCounts);

  // Calculate oil and ghee for dishes
  (items || []).forEach((item) => {
    const { categoryName, subCategoryName, ingredients, type, name } = item || {};
    if (!categoryName || !ingredients || type !== 'dish') return;
    if (khanaKhazanaCategories.includes(categoryName)) {
      const subCategory = subCategoryName || 'Other';
      const dishCount = subCategoryDishCounts[subCategory] || 1;
      const scaleFactor = numberOfPersons / (50 * dishCount);
      console.log(`Processing dish: ${name}, Subcategory: ${subCategory}, Scale factor: ${scaleFactor}`);
      (ingredients || []).forEach((ing) => {
        const nameLower = (ing.name || '').toLowerCase();
        const qty = Number((ing.quantity * scaleFactor).toFixed(2));
        if (/^(oil|tel)$/i.test(nameLower)) {
          const oilQty = convertToLiters(qty, ing.unit);
          totalOil += oilQty;
          console.log(`Adding oil for ${name}: ${qty} ${ing.unit} = ${oilQty} liters`);
        } else if (/^ghee$/i.test(nameLower)) {
          const gheeQty = convertToLiters(qty, ing.unit);
          totalGhee += gheeQty;
          console.log(`Adding ghee for ${name}: ${qty} ${ing.unit} = ${gheeQty} liters`);
        }
      });
    }
  });

  // Calculate oil and ghee from masala items
  masalaItems.forEach((item) => {
    const nameLower = (item.name || '').toLowerCase();
    const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
    if (/^(oil|tel)$/i.test(nameLower)) {
      const oilQty = convertToLiters(qty, item.unit);
      totalOil += oilQty;
      console.log(`Adding oil from masala item ${item.name}: ${qty} ${item.unit} = ${oilQty} liters`);
    } else if (/^ghee$/i.test(nameLower)) {
      const gheeQty = convertToLiters(qty, item.unit);
      totalGhee += gheeQty;
      console.log(`Adding ghee from masala item ${item.name}: ${qty} ${item.unit} = ${gheeQty} liters`);
    }
  });

  console.log(`Total Oil: ${totalOil} liters, Total Ghee: ${totalGhee} liters`);
  return { totalOil: Number(totalOil.toFixed(2)), totalGhee: Number(totalGhee.toFixed(2)) };
};

const isHindi = (text) => {
  if (!text || typeof text !== 'string') return false;
  return /[\u0900-\u097F]/.test(text);
};

const drawDecorativeBorder = (doc) => {
  doc
    .strokeColor('#FF8C00')
    .lineWidth(2)
    .moveTo(30, 30)
    .lineTo(565, 30)
    .moveTo(30, 30)
    .lineTo(30, 812)
    .moveTo(565, 30)
    .lineTo(565, 812)
    .moveTo(30, 812)
    .lineTo(565, 812)
    .stroke();
  for (let i = 40; i < 560; i += 20) {
    doc
      .fillColor('#FFD700')
      .circle(i, 35, 3)
      .fill()
      .circle(i, 807, 3)
      .fill();
  }
};

const renderTable = (doc, currentY, items, title, numberOfPersons, scale = false, checkPageBreak) => {
  const headerHeight = 24;
  const rowHeight = 22;
  const tableLeft = 40;
  let maxNameWidth = 250;
  let maxQtyWidth = 120;

  items.forEach((item) => {
    const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
    const unit = formatUnit(item.unit);
    const nameText = truncateText(doc, item.name, 300);
    const qtyText = formatQuantity(qty, item.unit);
    maxNameWidth = Math.min(300, Math.max(maxNameWidth, doc.widthOfString(nameText)));
    maxQtyWidth = Math.min(120, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
  });

  const col1 = tableLeft;
  const col2 = col1 + maxNameWidth + 15;
  const col3 = col2 + maxQtyWidth + 15;
  const tableWidth = Math.min(525, col3 + 50 - tableLeft);

  let remainingItems = [...items];

  while (remainingItems.length > 0) {
    currentY = checkPageBreak(currentY, headerHeight + rowHeight + 20, `section-${title}`);
    doc.y = currentY;

    doc
      .fillColor('#800000')
      .font('Merriweather-Bold')
      .fontSize(16)
      .text(title, tableLeft, currentY, { align: 'left', lineBreak: false });
    currentY += 20;

    const tableTop = currentY;
    const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
    const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
    remainingItems = remainingItems.slice(rowsPerPage);

    doc
      .fillColor('#FF8C00')
      .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
      .fill();
    doc
      .fillColor('white')
      .font('Merriweather-Bold')
      .fontSize(10)
      .text('Item Name', col1 + 5, tableTop + 5, { lineBreak: false })
      .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
      .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

    let rowY = tableTop + headerHeight;
    let rowIndex = 0;
    currentBatch.forEach((item) => {
      if (rowIndex % 2 === 0) {
        doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
      } else {
        doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
      }
      doc.fillColor('black');
      const qty = scale ? Number((item.quantity * (numberOfPersons / 50)).toFixed(2)) : item.quantity;
      const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
      doc
        .font(font)
        .fontSize(10)
        .text(truncateText(doc, item.name, maxNameWidth), col1 + 5, rowY + 5, { lineBreak: false });
      doc
        .font('Merriweather-Regular')
        .text(formatQuantity(qty, item.unit), col2 + 5, rowY + 5, { lineBreak: false });
      doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
      rowIndex++;
      rowY += rowHeight;
    });

    doc
      .strokeColor('#800000')
      .lineWidth(0.5)
      .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
      .stroke()
      .moveTo(col2, tableTop)
      .lineTo(col2, rowY)
      .moveTo(col3, tableTop)
      .lineTo(col3, rowY)
      .stroke();

    currentY = rowY + 15;
    doc.y = currentY;
  }
  return currentY + 10;
};

const renderItemsWithImages = (doc, currentY, items, title, checkPageBreak) => {
  currentY = checkPageBreak(currentY, 40, `category-${title}`);
  doc
    .fillColor('#800000')
    .font('Merriweather-Bold')
    .fontSize(16)
    .text(title, 40, currentY, { align: 'left', lineBreak: false });
  currentY += 20;

  const itemHeight = 60;
  const tableLeft = 40;
  const tableWidth = 505;
  let remainingItems = [...items];

  while (remainingItems.length > 0) {
    currentY = checkPageBreak(currentY, itemHeight + 10, `items-${title}`);
    const rowsPerPage = Math.floor((doc.page.height - currentY - 80) / itemHeight);
    const currentBatch = remainingItems.slice(0, rowsPerPage || 1);
    remainingItems = remainingItems.slice(rowsPerPage);

    currentBatch.forEach((item, index) => {
      const rowY = currentY + index * itemHeight;
      doc.fillColor(index % 2 === 0 ? '#FFFDD0' : '#FFFFFF')
         .rect(tableLeft, rowY, tableWidth, itemHeight)
         .fill();

      if (item.imageUrl) {
        try {
          doc.image(item.imageUrl, tableLeft + 5, rowY + 5, { width: 50, height: 50 });
        } catch (error) {
          console.warn(`Failed to load image for ${item.name}: ${error.message}`);
        }
      }

      const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
      doc.fillColor('black')
         .font(font)
         .fontSize(12)
         .text(truncateText(doc, item.name, 400), tableLeft + 60, rowY + 25, { lineBreak: false });
    });

    currentY += currentBatch.length * itemHeight + 10;
    doc.y = currentY;
  }

  doc.strokeColor('#800000')
     .lineWidth(0.5)
     .roundedRect(tableLeft, currentY - (itemHeight * items.length + 20), tableWidth, itemHeight * items.length + 20, 5)
     .stroke();

  return currentY + 10;
};

const renderIngredientsTable = (doc, currentY, ingredients, numberOfPersons, scaleFactor, itemName, checkPageBreak) => {
  if (!ingredients || ingredients.length === 0) return currentY;

  const headerHeight = 24;
  const rowHeight = 20;
  const tableLeft = 60;
  let maxIngWidth = 200;
  let maxQtyWidth = 100;

  ingredients.forEach((ing) => {
    const qty = Number((ing.quantity * scaleFactor).toFixed(2));
    const ingText = truncateText(doc, ing.name || 'Unknown', 300);
    const qtyText = formatQuantity(qty, ing.unit);
    maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
    maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
  });

  const col1 = tableLeft;
  const col2 = col1 + maxIngWidth + 15;
  const col3 = col2 + maxQtyWidth + 15;
  const tableWidth = Math.min(505, col3 + 50 - tableLeft);

  let remainingIngredients = [...ingredients];

  while (remainingIngredients.length > 0) {
    currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${itemName}`);
    console.log(`Rendering ingredients table for ${itemName}, remaining: ${remainingIngredients.length}`);

    const rowsPerPage = Math.floor((doc.page.height - currentY - headerHeight - 80) / rowHeight);
    const currentBatch = remainingIngredients.slice(0, rowsPerPage || 1);
    remainingIngredients = remainingIngredients.slice(rowsPerPage);

    const tableTop = currentY;

    doc
      .fillColor('#FF8C00')
      .roundedRect(tableLeft, tableTop, tableWidth, headerHeight, 5)
      .fill();
    doc
      .fillColor('white')
      .font('Merriweather-Bold')
      .fontSize(10)
      .text('Ingredient', col1 + 5, tableTop + 5, { lineBreak: false })
      .text('Quantity', col2 + 5, tableTop + 5, { lineBreak: false })
      .text('Remark', col3 + 2, tableTop + 5, { lineBreak: false });

    let rowY = tableTop + headerHeight;
    let rowIndex = 0;
    currentBatch.forEach((ing) => {
      if (rowIndex % 2 === 0) {
        doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
      } else {
        doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, rowHeight).fill();
      }
      doc.fillColor('black');
      const qty = Number((ing.quantity * scaleFactor).toFixed(2));
      const ingFont = isHindi(ing.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
      doc
        .font(ingFont)
        .fontSize(10)
        .text(truncateText(doc, ing.name || 'Unknown', maxIngWidth), col1 + 5, rowY + 5, { lineBreak: false });
      doc
        .font('Merriweather-Regular')
        .text(formatQuantity(qty, ing.unit), col2 + 5, rowY + 5, { lineBreak: false });
      doc.text(' ', col3 + 5, rowY + 5, { lineBreak: false });
      rowIndex++;
      rowY += rowHeight;
    });

    doc
      .strokeColor('#800000')
      .lineWidth(0.5)
      .roundedRect(tableLeft, tableTop, tableWidth, rowY - tableTop, 5)
      .stroke()
      .moveTo(col2, tableTop)
      .lineTo(col2, rowY)
      .moveTo(col3, tableTop)
      .lineTo(col3, rowY)
      .stroke();

    currentY = rowY + 15;
    doc.y = currentY;
  }

  return currentY;
};

app.post('/api/compose-latex', async (req, res) => {
  try {
    console.log('Received POST request at /api/compose-latex');
    const { order, withIngredients } = req.body;
    if (!order) throw new Error('Missing order');

    const { orderId, customerName, numberOfPersons, functionDate, functionName, items, mealType } = order;

    // Sanitize customerName and functionName for safe filename
    const sanitizeFilename = (str) => {
      if (!str || typeof str !== 'string') return 'unknown';
      return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_') // Replace non-alphanumeric with underscore
        .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores
    };

    // Format date to YYYY-MM-DD
    let formattedDate = 'unknown';
    try {
      let date;
      if (functionDate && typeof functionDate === 'object') {
        if (functionDate.toDate) {
          date = functionDate.toDate();
        } else if (typeof functionDate.seconds === 'number') {
          date = new Date(functionDate.seconds * 1000);
        }
      } else if (functionDate && typeof functionDate === 'string') {
        date = new Date(functionDate);
      } else if (functionDate instanceof Date) {
        date = functionDate;
      }
      if (date && !isNaN(date.getTime())) {
        formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
      }
    } catch (error) {
      console.warn('Error formatting date for filename:', error.message);
    }

    // Construct filename
    const filename = `${sanitizeFilename(customerName)}-${sanitizeFilename(functionName)}-${formattedDate}`;

    let formattedDisplayDate = 'N/A';
    try {
      let date;
      if (functionDate && typeof functionDate === 'object') {
        if (functionDate.toDate) {
          date = functionDate.toDate();
        } else if (typeof functionDate.seconds === 'number') {
          date = new Date(functionDate.seconds * 1000);
        }
      } else if (functionDate && typeof functionDate === 'string') {
        date = new Date(functionDate);
      } else if (functionDate instanceof Date) {
        date = functionDate;
      }
      if (date && !isNaN(date.getTime())) {
        formattedDisplayDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      } else {
        console.warn('Invalid date parsed:', date);
      }
    } catch (error) {
      console.error('Error parsing functionDate:', error.message, 'Value:', functionDate);
    }

    const doc = new PDFDocument({ size: 'A4', margin: 30 });
    try {
      doc.registerFont('NotoSerifDevanagari-Regular', path.join(__dirname, 'fonts/NotoSerifDevanagari-Regular.ttf'));
      doc.registerFont('NotoSerifDevanagari-Bold', path.join(__dirname, 'fonts/NotoSerifDevanagari-Bold.ttf'));
      doc.registerFont('Merriweather-Regular', path.join(__dirname, 'fonts/Merriweather-Regular.ttf'));
      doc.registerFont('Merriweather-Bold', path.join(__dirname, 'fonts/Merriweather-Bold.ttf'));
    } catch (error) {
      console.error('Failed to register fonts:', error.message);
      throw new Error('Font registration failed. Ensure font files are in the fonts/ directory.');
    }

    const tempDir = path.join(__dirname, 'temp');
    const pdfFile = path.join(tempDir, `${filename}.pdf`);

    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const writeStream = fs.createWriteStream(pdfFile);
    doc.pipe(writeStream);

    let pageBreakCount = 0;
    const checkPageBreak = (currentY, requiredSpace, debugLabel = '') => {
      const pageHeight = doc.page.height - 80;
      if (currentY + requiredSpace > pageHeight) {
        pageBreakCount++;
        console.log(`Adding page break #${pageBreakCount} at y=${currentY}, requiredSpace=${requiredSpace}, pageHeight=${pageHeight}, label=${debugLabel}`);
        if (pageBreakCount > 50) throw new Error('Too many page breaks, possible recursion');
        doc.addPage();
        addHeader();
        drawDecorativeBorder(doc);
        return 100;
      }
      return currentY;
    };

    const addCoverPage = () => {
      doc
        .fillColor('#FFFDD0')
        .rect(0, 0, doc.page.width, doc.page.height)
        .fill();
      drawDecorativeBorder(doc);
      doc
        .fillColor('#800000')
        .font('Merriweather-Bold')
        .fontSize(36)
        .text('Shiv Shakti Catering', 50, 100, { align: 'center' });
      doc
        .font('NotoSerifDevanagari-Bold')
        .fontSize(24)
        .text('शिव शक्ति कैटरिंग', 50, 150, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .fontSize(16)
        .fillColor('#e65c2e')
        .text(`Celebrating Your Special Moments with Authentic Flavors`, 50, 250, { align: 'center' });
      doc
        .font('NotoSerifDevanagari-Regular')
        .fontSize(14)
        .fillColor('#e65c2e')
        .text('आपके विशेष क्षणों को प्रामाणिक स्वादों के साथ उत्सव बनाएं', 50, 280, { align: 'center' });
      doc
        .fillColor('#FF8C00')
        .font('Merriweather-Bold')
        .fontSize(20)
        .text('Prepared for: ' + (customerName || 'N/A'), 50, 350, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .fontSize(18)
        .fillColor('#872741')
        .text(`Event: ${functionName || 'N/A'} on ${formattedDisplayDate}`, 50, 380, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .fontSize(12)
        .fillColor('#800000')
        .text('Antyodaya Nagar Corner, Bikaner, Rajasthan', 50, 700, { align: 'center' });
      doc
        .font('NotoSerifDevanagari-Regular')
        .text('अंत्योदय नगर कॉर्नर, बीकानेर, राजस्थान', 50, 720, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .text('Mobile: +91 97993 31097', 50, 740, { align: 'center' });
      doc.addPage();
    };

    const addHeader = () => {
      doc
        .fillColor('#FF8C00')
        .rect(30, 40, doc.page.width - 60, 30)
        .fill();
      doc
        .fillColor('white')
        .font('Merriweather-Bold')
        .fontSize(14)
        .text('Shiv Shakti Catering', 30, 50, { align: 'center', lineBreak: false });
      doc
        .fillColor('#800000')
        .rect(30, 72, doc.page.width - 60, 2)
        .fill();
    };

    const addSummaryPage = (categories, totalOil, totalGhee, dishCounts) => {
      doc.addPage();
      addHeader();
      drawDecorativeBorder(doc);
      let currentY = 100;

      doc
        .font('Merriweather-Bold')
        .fontSize(20)
        .fillColor('#800000')
        .text('Order Summary', 30, currentY, { align: 'center' });
      currentY += 40;

      const tableLeft = 30;
      const col1 = tableLeft;
      const col2 = col1 + 250;
      const tableWidth = 535;

      doc
        .fillColor('#FF8C00')
        .rect(tableLeft, currentY, tableWidth, 25)
        .fill();
      doc
        .fillColor('white')
        .font('Merriweather-Bold')
        .fontSize(12)
        .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
        .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

      const summaryDetails = [
        { label: 'Customer Name', value: customerName || 'N/A' },
        { label: 'Event Name', value: functionName || 'N/A' },
        { label: 'Event Date', value: formattedDisplayDate || 'N/A' },
        { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
        { label: 'Meal Type', value: mealType || 'N/A' },
        { label: 'Total Dishes', value: Object.values(dishCounts).reduce((a, b) => a + b, 0) },
        { label: 'Total Oil', value: `${totalOil} लीटर` },
        { label: 'Total Ghee', value: `${totalGhee} लीटर` },
      ];

      let rowY = currentY + 25;
      doc.font('Merriweather-Regular').fontSize(10);
      summaryDetails.forEach((detail, index) => {
        if (index % 2 === 0) {
          doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
        } else {
          doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
        }
        doc.fillColor('black');
        doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
        const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
        doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
        rowY += 20;
      });

      doc
        .strokeColor('#800000')
        .lineWidth(0.5)
        .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
        .stroke();

      currentY = rowY + 30;

      doc
        .font('Merriweather-Bold')
        .fontSize(16)
        .fillColor('#800000')
        .text('Preparation Checklist', 30, currentY);
      currentY += 20;

      const checklist = [
        { task: 'Verify all masala items are packed', status: '☐' },
        { task: 'Confirm disposable items quantity', status: '☐' },
        { task: 'Check gharelu saman availability', status: '☐' },
        { task: 'Ensure tent items are ready', status: '☐' },
        { task: 'Review menu with chef', status: '☐' },
      ];

      doc
        .fillColor('#FF8C00')
        .rect(tableLeft, currentY, tableWidth, 25)
        .fill();
      doc
        .fillColor('white')
        .font('Merriweather-Bold')
        .fontSize(10)
        .text('Task', col1 + 10, currentY + 8, { lineBreak: false })
        .text('Status', col2 + 10, currentY + 8, { lineBreak: false });

      rowY = currentY + 25;
      checklist.forEach((item, index) => {
        if (index % 2 === 0) {
          doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
        } else {
          doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
        }
        doc
          .fillColor('black')
          .font('Merriweather-Regular')
          .fontSize(10)
          .text(item.task, col1 + 10, rowY + 5, { lineBreak: false })
          .text(item.status, col2 + 10, rowY + 5, { lineBreak: false });
        rowY += 20;
      });

      doc
        .strokeColor('#800000')
        .lineWidth(0.5)
        .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
        .stroke();

      currentY = rowY + 30;

      doc
        .font('Merriweather-Regular')
        .fontSize(12)
        .fillColor('#2F4F4F')
        .text('Thank You for Choosing Shiv Shakti Catering!', 30, currentY, { align: 'center' })
        .font('NotoSerifDevanagari-Regular')
        .text('शिव शक्ति कैटरिंग को चुनने के लिए धन्यवाद!', 30, currentY + 20, { align: 'center' });
    };

    addCoverPage();
    addHeader();
    drawDecorativeBorder(doc);

    let currentY = 100;

    doc
      .font('Merriweather-Bold')
      .fontSize(24)
      .fillColor('#800000')
      .text('Order Details', 30, currentY, { align: 'center' });
    currentY = checkPageBreak(currentY + 40, 120, 'header');

    const tableLeft = 30;
    const col1 = tableLeft;
    const col2 = col1 + 250;
    const tableWidth = 535;

    doc
      .fillColor('#FF8C00')
      .rect(tableLeft, currentY, tableWidth, 25)
      .fill();
    doc
      .fillColor('white')
      .font('Merriweather-Bold')
      .fontSize(12)
      .text('Detail', col1 + 10, currentY + 8, { lineBreak: false })
      .text('Information', col2 + 10, currentY + 8, { lineBreak: false });

    const details = [
      { label: 'Customer Name', value: customerName || 'N/A' },
      { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
      { label: 'Function Date', value: formattedDisplayDate || 'N/A' },
      { label: 'Function Name', value: functionName || 'N/A' },
      { label: 'Meal Type', value: mealType || 'N/A' },
    ];

    let rowY = currentY + 25;
    doc.font('Merriweather-Regular').fontSize(10);
    details.forEach((detail, index) => {
      if (index % 2 === 0) {
        doc.fillColor('#FFFDD0').rect(tableLeft, rowY, tableWidth, 20).fill();
      } else {
        doc.fillColor('#FFFFFF').rect(tableLeft, rowY, tableWidth, 20).fill();
      }
      doc.fillColor('black');
      doc.text(detail.label, col1 + 10, rowY + 5, { lineBreak: false });
      const font = isHindi(detail.value) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
      doc.font(font).text(detail.value, col2 + 10, rowY + 5, { lineBreak: false });
      rowY += 20;
    });

    doc
      .strokeColor('#800000')
      .lineWidth(0.5)
      .roundedRect(tableLeft, currentY, tableWidth, rowY - currentY, 5)
      .stroke();

    currentY = rowY + 30;

    const qrCodeBuffer = await new Promise((resolve, reject) => {
      QRCode.toBuffer('https://shivshakticatering.netlify.app/' + (orderId || ''), { width: 80 }, (err, buffer) => {
        if (err) reject(err);
        else resolve(buffer);
      });
    });
    doc.image(qrCodeBuffer, 485, currentY - 20, { width: 80 });

    doc
      .moveTo(30, currentY)
      .lineTo(565, currentY)
      .strokeColor('#FF8C00')
      .lineWidth(2)
      .stroke();

    currentY = checkPageBreak(currentY + 30, 50, 'menu');
    doc
      .font('Merriweather-Bold')
      .fontSize(18)
      .fillColor('#800000')
      .text('Order Items', 30, currentY);
    currentY += 30;

    const categories = {};
    const dishCounts = {};
    const subCategoryDishCounts = {};

    // Group items by category and subCategoryName
    (items || []).forEach((item) => {
      const { categoryName, name, type, quantity, veg, imageUrl, ingredients, subCategoryName } = item || {};
      if (!categoryName || !name) return;
      if (!categories[categoryName]) {
        categories[categoryName] = {};
        dishCounts[categoryName] = 0;
      }
      let displayName = name;
      if (type === 'dish') {
        displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
        dishCounts[categoryName]++;
        const subCategory = subCategoryName || 'Other';
        if (!categories[categoryName][subCategory]) {
          categories[categoryName][subCategory] = [];
          subCategoryDishCounts[subCategory] = 0;
        }
        subCategoryDishCounts[subCategory]++;
        categories[categoryName][subCategory].push({
          name: displayName,
          type,
          quantity: quantity || 1,
          imageUrl,
          ingredients: ingredients || [],
          veg,
          subCategoryName
        });
      } else {
        // Non-dish items (e.g., Palace, Decor) go under a generic 'Items' subcategory
        if (!categories[categoryName]['Items']) {
          categories[categoryName]['Items'] = [];
        }
        categories[categoryName]['Items'].push({
          name: displayName,
          type,
          quantity: quantity || 1,
          imageUrl,
          ingredients: ingredients || [],
          veg
        });
      }
    });

    for (const [categoryName, subCategoryMap] of Object.entries(categories)) {
      currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
      doc
        .fillColor('#800000')
        .font('Merriweather-Bold')
        .fontSize(16)
        .text(categoryName, 40, currentY, { align: 'left', lineBreak: false });
      currentY += 20;

      for (const [subCategoryName, categoryItems] of Object.entries(subCategoryMap)) {
        // Only render subcategory heading for Khana Khazana dishes
        if (categoryName === 'Khana Khazana' && subCategoryName !== 'Items') {
          currentY = checkPageBreak(currentY, 40, `subcategory-${subCategoryName}`);
          doc
            .fillColor('#7A0000')
            .rect(50, currentY, doc.page.width - 80, 20)
            .fill();
          doc
            .fillColor('white')
            .font(isHindi(subCategoryName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold')
            .fontSize(14)
            .text(subCategoryName, 50, currentY + 3, { align: 'left', lineBreak: false });
          currentY += 20;
        }

        if (!withIngredients) {
          currentY = renderItemsWithImages(
            doc,
            currentY,
            categoryItems,
            categoryName === 'Khana Khazana' ? subCategoryName : categoryName,
            checkPageBreak
          );
        } else {
          const dishCount = categoryName === 'Khana Khazana' ? (subCategoryDishCounts[subCategoryName] || 1) : 1;
          const scaleFactor = numberOfPersons / (50 * dishCount);
          for (const item of categoryItems) {
            currentY = checkPageBreak(currentY, 40, `item-${item.name}`);
            const font = isHindi(item.name) ? 'NotoSerifDevanagari-Regular' : 'Merriweather-Regular';
            doc
              .fillColor('black')
              .font(font)
              .fontSize(14)
              .text(item.name, 60, currentY, { lineBreak: false });
            currentY += 20;

            if (item.type === 'dish' && Array.isArray(item.ingredients) && item.ingredients.length > 0) {
              const ingredients = item.ingredients.slice(0, 50);
              currentY = renderIngredientsTable(
                doc,
                currentY,
                ingredients,
                numberOfPersons,
                scaleFactor,
                item.name,
                checkPageBreak
              );
            }
            currentY += 15;
          }
        }
      }
    }

    if (withIngredients) {
      currentY = renderTable(
        doc,
        currentY,
        masalaItems,
        'Masala Items',
        numberOfPersons,
        true,
        checkPageBreak
      );
      currentY = renderTable(
        doc,
        currentY,
        disposableItems,
        'Disposable Items',
        numberOfPersons,
        true,
        checkPageBreak
      );
      currentY = renderTable(
        doc,
        currentY,
        ghareluSaman,
        'Gharelu Items',
        numberOfPersons,
        true,
        checkPageBreak
      );
      currentY = renderTable(
        doc,
        currentY,
        tentItems,
        'Tent Items',
        numberOfPersons,
        true,
        checkPageBreak
      );

      currentY = checkPageBreak(currentY, 60, 'totals');
      doc
        .font('Merriweather-Bold')
        .fontSize(14)
        .fillColor('#800000')
        .text('Total Consumption', 40, currentY);
      currentY += 20;
      const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
      doc
        .font('Merriweather-Regular')
        .fontSize(12)
        .fillColor('black')
        .text(`Total Oil: ${totalOil}`, 50, currentY, { lineBreak: false });
      doc
        .font('NotoSerifDevanagari-Regular')
        .text(' लीटर', 50 + doc.widthOfString(`Total Oil: ${totalOil}`), currentY, { lineBreak: false });
      currentY += 20;
      doc
        .font('Merriweather-Regular')
        .text(`Total Ghee: ${totalGhee}`, 50, currentY, { lineBreak: false });
      doc
        .font('NotoSerifDevanagari-Regular')
        .text(' लीटर', 50 + doc.widthOfString(`Total Ghee: ${totalGhee}`), currentY, { lineBreak: false });
      currentY += 20;
    }

    const { totalOil, totalGhee } = calculateTotals(items, numberOfPersons, masalaItems);
    addSummaryPage(categories, totalOil, totalGhee, dishCounts);

    doc.end();

    writeStream.on('close', () => {
      fs.readFile(pdfFile, (err, data) => {
        if (err) {
          console.error('Error reading PDF:', err);
          return res.status(500).json({ error: 'Failed to read PDF' });
        }
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${filename}.pdf"`,
        });
        res.send(data);
        fs.unlinkSync(pdfFile);
      });
    });

    writeStream.on('error', (error) => {
      console.error('Error writing PDF:', error);
      res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
    });
  } catch (error) {
    console.error('Error generating PDF:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to generate PDF', message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));