import axios from 'axios';


const generatePDF = async (order, withIngredients = false) => {
  try {
    const filename = `order_${order.orderId}_${withIngredients ? 'with_ingredients' : 'without_ingredients'}`;
    
    console.log('Preparing to send request to: https://shivshakticatering.onrender.com/api/compose-latex');
    console.log('withIngredients:', withIngredients);
    console.log('Order data:', JSON.stringify(order, null, 2));

    const response = await axios.post(
      'https://shivshakticatering.onrender.com/api/compose-latex',
      {
        order,
        withIngredients,
        filename,
      },
      {
        responseType: 'blob', 
      }
    );

    console.log('Received response from server:', response.status);

    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${filename}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log('Generated PDF for order:', order.orderId);
  } catch (error) {
    console.error('Error generating PDF:', error.message);
    if (error.response) {
      console.error('Server response:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    }
    throw error;
  }
};

export { generatePDF };