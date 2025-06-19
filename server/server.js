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
  origin: ['https://shivshakticatering.netlify.app/'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
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
  if (unitLower === 'l' || unitLower === 'litre' || unitLower === 'liter') return quantity;
  if (unitLower === 'ml') return quantity / 1000;
  if (unitLower === 'kg') return quantity;
  if (unitLower === 'gm' || unitLower === 'gram') return quantity / 1000;
  return 0;
};

const calculateTotals = (items, numberOfPersons, masalaItems) => {
  let totalOil = 0;
  let totalGhee = 0;

  const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
  const categories = {};
  const dishCounts = {};

  (items || []).forEach((item) => {
    const { categoryName, ingredients } = item || {};
    if (!categoryName || !ingredients) return;
    if (!categories[categoryName]) {
      categories[categoryName] = [];
      dishCounts[categoryName] = 0;
    }
    categories[categoryName].push({ ingredients: ingredients || [] });
    if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
  });

  for (const [categoryName, dishes] of Object.entries(categories)) {
    const scaleFactor = khanaKhazanaCategories.includes(categoryName)
      ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
      : numberOfPersons / 50;

    dishes.forEach((dish) => {
      (dish.ingredients || []).forEach((ing) => {
        const nameLower = (ing.name || '').toLowerCase();
        const qty = Number((ing.quantity * scaleFactor).toFixed(2));
        if (/^(oil|tel)$/i.test(nameLower)) {
          totalOil += convertToLiters(qty, ing.unit);
        } else if (/^ghee$/i.test(nameLower)) {
          totalGhee += convertToLiters(qty, ing.unit);
        }
      });
    });
  }

  masalaItems.forEach((item) => {
    const nameLower = (item.name || '').toLowerCase();
    const qty = Number((item.quantity * (numberOfPersons / 50)).toFixed(2));
    if (/^(oil|tel)$/i.test(nameLower)) {
      totalOil += convertToLiters(qty, item.unit);
    } else if (/^ghee$/i.test(nameLower)) {
      totalGhee += convertToLiters(qty, item.unit);
    }
  });

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

app.post('/api/compose-latex', async (req, res) => {
  try {
    console.log('Received POST request at /api/compose-latex');
    const { order, withIngredients, filename } = req.body;
    if (!order || !filename) throw new Error('Missing order or filename');

    const { orderId, customerName, numberOfPersons, functionDate, functionName, items } = order;

    let formattedDate = 'N/A';
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
        formattedDate = date.toLocaleDateString('en-US', {
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
      // doc
      //   .font('Merriweather-Regular')
      //   .fontSize(18)
      //   .fillColor('#2F4F4F')
      //   .text(`Order ID: ${orderId || 'N/A'}`, 50, 200, { align: 'center' });
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
        .text(`Event: ${functionName || 'N/A'} on ${formattedDate}`, 50, 380, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .fontSize(12)
        .fillColor('#800000')
        .text('123, Shiv Shakti Nagar, Delhi, India', 50, 700, { align: 'center' });
      doc
        .font('NotoSerifDevanagari-Regular')
        .text('123, शिव शक्ति नगर, दिल्ली, भारत', 50, 720, { align: 'center' });
      doc
        .font('Merriweather-Regular')
        .text('Mobile: +91 98765 43210', 50, 740, { align: 'center' });
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

    const addFooter = () => {
      const pages = doc.bufferedPageRange();
      for (let i = 1; i <= pages.count; i++) {
        doc.switchToPage(i);
        doc
          .fillColor('#800000')
          .rect(30, doc.page.height - 40, doc.page.width - 60, 20)
          .fill();
        doc
          .font('Merriweather-Regular')
          .fontSize(8)
          .fillColor('white')
          .text(
            `Page ${i + 1} of ${pages.count} | Order ID: ${orderId || 'N/A'} | www.shivshakticatering.com`,
            40,
            doc.page.height - 35,
            { align: 'center', lineBreak: false }
          );
      }
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
        { label: 'Event Date', value: formattedDate || 'N/A' },
        { label: 'Number of Persons', value: numberOfPersons || 'N/A' },
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
      { label: 'Function Date', value: formattedDate || 'N/A' },
      { label: 'Function Name', value: functionName || 'N/A' },
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
      QRCode.toBuffer('https://shivshakticatering.netlify.app/' + orderId, { width: 80 }, (err, buffer) => {
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
      .text('Khana Khazana Menu', 30, currentY);
    currentY += 30;

    const khanaKhazanaCategories = ['Vegetables', 'Sweets'];
    const categories = {};
    const dishCounts = {};

    (items || []).forEach((item) => {
      const { categoryName, dishName, ingredients, halwaiId, categoryId, veg } = item || {};
      if (!categoryName || !dishName) return;
      if (!categories[categoryName]) {
        categories[categoryName] = [];
        dishCounts[categoryName] = 0;
      }
      categories[categoryName].push({ dishName, ingredients: ingredients || [], halwaiId, categoryId, veg });
      if (khanaKhazanaCategories.includes(categoryName)) dishCounts[categoryName]++;
    });

    let categoryIndex = 1;
    for (const [categoryName, dishes] of Object.entries(categories)) {
      currentY = checkPageBreak(currentY, 40, `category-${categoryName}`);
      doc
        .fillColor('#800000')
        .rect(30, currentY - 5, 535, 25)
        .fill();
      doc
        .fillColor('white')
        .font('Merriweather-Bold')
        .fontSize(12)
        .text(`${categoryName} (${dishes.length} Dishes)`, 40, currentY + 5, { lineBreak: false });
      currentY += 30;

      let dishIndex = 1;
      for (const dish of dishes) {
        currentY = checkPageBreak(currentY, 30, `dish-${dish.dishName}`);
        const vegLabel = dish.veg === 'veg' ? '(Veg)' : dish.veg === 'non-veg' ? '(Non-Veg)' : '';
        const dishFont = isHindi(dish.dishName) ? 'NotoSerifDevanagari-Bold' : 'Merriweather-Bold';
        doc
          .font(dishFont)
          .fontSize(12)
          .fillColor('#2F4F4F')
          .text(`${dishIndex}. ${truncateText(doc, dish.dishName, 450)} ${vegLabel}`, 40, currentY, {
            lineBreak: false,
          });
        currentY += 20;
        dishIndex++;

        if (withIngredients && Array.isArray(dish.ingredients) && dish.ingredients.length > 0) {
          const scaleFactor = khanaKhazanaCategories.includes(categoryName)
            ? numberOfPersons / (50 * (dishCounts[categoryName] || 1))
            : numberOfPersons / 50;

          const ingredients = dish.ingredients.slice(0, 50);
          const rowHeight = 20;
          const headerHeight = 24;

          let maxIngWidth = 200;
          let maxQtyWidth = 100;
ingredients.forEach((ing) => {
  const qty = Number((ing.quantity * scaleFactor).toFixed(2));
  const ingText = truncateText(doc, ing.name || 'Unknown', 300);
  const qtyText = formatQuantity(qty, ing.unit);
  maxIngWidth = Math.min(300, Math.max(maxIngWidth, doc.widthOfString(ingText)));
  maxQtyWidth = Math.min(150, Math.max(maxQtyWidth, doc.widthOfString(qtyText)));
});

const tableLeft = 60;
const col1 = tableLeft;
const col2 = col1 + maxIngWidth + 15;
const col3 = col2 + maxQtyWidth + 15;
const tableWidth = Math.min(505, col3 + 50 - tableLeft);

let remainingIngredients = [...ingredients];
while (remainingIngredients.length > 0) {
  currentY = checkPageBreak(currentY, headerHeight + rowHeight, `table-${dish.dishName}`);

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
        }
      }
      currentY = checkPageBreak(currentY, 20, `post-category-${categoryName}`);
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
    false,
    checkPageBreak
  );
  currentY = renderTable(
    doc,
    currentY,
    tentItems,
    'Tent Items',
    numberOfPersons,
    false,
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
    // addFooter();

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


