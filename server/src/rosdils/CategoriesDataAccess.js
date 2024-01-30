import RosdilsDB from "./CategoriesModel.js";

export const getCategoriesByParentId = async (parentId) => {
  try {
    return await RosdilsDB.find({ parentId: parentId });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllCategories = async () => {
  try {
    return await RosdilsDB.find();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getCategoryByName = async (idName) => {
  try {
    return await RosdilsDB.find({ idName: idName });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createCategory = async (categoryData) => {
  try {
    return await RosdilsDB.create(categoryData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  try {
    return await RosdilsDB.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    return await RosdilsDB.findByIdAndDelete(categoryId);
  } catch (e) {
    throw new Error(e.message);
  }
};
