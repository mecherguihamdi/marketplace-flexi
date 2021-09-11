package hamdi.sara.flexi.service;

import hamdi.sara.flexi.entity.ProductInOrder;
import hamdi.sara.flexi.entity.User;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
