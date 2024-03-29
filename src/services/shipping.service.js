const RootServices = require('./root.service');
// const BusinessService = require('./business.service');
const ShippingModel = require('../database/models/shipping.model');
// const ProductModel = require('../database/models/product.model');
// const AdProductModel = require('../database/models/ad.orders.model');

// const create = async (productInfo) => {
//   const newProduct = new ProductModel(productInfo);

//   const savedProduct = await newProduct.save();

//   return savedProduct;
// };

const getMyShippings = async (query = {}, sort = {}, page = 1) => {
  const shippings = await RootServices.getOperatedData(ShippingModel, query, sort, page);
  return shippings;
};

const getOne = async (oId) => {
  const shipping = await ShippingModel.findById(oId).lean();

  if (!shipping) return null;
  return shipping;
};

const updateOne = async (oId, newInfo) => {
  const order = await getOne(oId);
  if (!order) return null;
  const updateInfo = { ...order, ...newInfo };
  await ShippingModel.updateOne({ _id: oId }, updateInfo);
  return updateInfo;
};

// const getRecommendedorders = async (ownerId, sort = {}, page = 1) => {
//   const owner = await BusinessService.getOne(ownerId);
//   const recommendedorders = await RootServices
//     .getOperatedData(ProductModel, { categoryId: { $in: owner.tagIds } }, sort, page);

//   return recommendedorders;
// };

// const banUnbanOne = async (bId) => {
//   const product = await getOne(bId);
//   if (!product) return null;

//   const isUpdated = await updateOne(bId, { isBanned: !product.isBanned });
//   if (!isUpdated) return null;
//   return true;
// };

// const removeOne = async (bId) => {
//   const product = await getOne(bId);
//   if (!product) return null;
//   await ProductModel.deleteOne({ _id: bId });
//   return true;
// };

// const setAdProduct = async (pId, startDate, endDate, priority) => {
//   const adProduct = new AdProductModel({
//     productId: pId,
//     startDate,
//     endDate,
//     priority,
//   });

//   const savedAdProduct = await adProduct.save();

//   return savedAdProduct;
// };

// const getAdorders = async (page = 1) => {
//   const adorders = await RootServices
//     .getOperatedData(AdProductModel, {}, { priority: 1 }, page);

//   return adorders;
// };

// const rateProduct = async (score, raterId) => {
//   // TODO: get last order id if not found return null
//   // TODO: set to db rating
//   // TODO: calculate the average score and set ratingScore
// };

module.exports = {
//   create,
  getMyShippings,
  //   getOne,
  updateOne,
//   getRecommendedorders,
//   banUnbanOne,
//   setAdProduct,
//   getAdorders,
//   removeOne,
};
