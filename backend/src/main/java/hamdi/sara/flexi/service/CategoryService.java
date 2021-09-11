package hamdi.sara.flexi.service;

import hamdi.sara.flexi.entity.ProductCategory;

import java.util.List;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public interface CategoryService {

    List<ProductCategory> findAll();

    ProductCategory findByCategoryType(Integer categoryType);

    List<ProductCategory> findByCategoryTypeIn(List<Integer> categoryTypeList);

    ProductCategory save(ProductCategory productCategory);


}
