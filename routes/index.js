var express = require('express');
var router = express.Router();
const swell = require('swell-node');
swell.init('the-sweet-spot', '6ittt7LeOAwTJZi9HUX7yKIjHyn6xPPm');
/* GET home page. */
router.put('/updateShippingService/:idCart', async function(req, res, next) {
  try {
    const result = await swell.put('/carts/'+req.params.idCart, {
      shipping: {
        price: req.body.price,
        service: req.body.service,
        service_name: req.body.service,
      },
    });
    res.status(200).json({success:true,data:result});
  } catch (err) {
    res.status(500).json({success:false,data:err});
  }
});

router.get('/getOrder/:idOrder', async function(req, res, next) {
  try {
    const result = await swell.get('/orders/'+req.params.idOrder);
    res.status(200).json({success:true,data:result});
  } catch (err) {
    res.status(500).json({success:false,data:err});
  }
});

module.exports = router;
