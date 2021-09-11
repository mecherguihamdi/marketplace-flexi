package hamdi.sara.flexi.service;

import hamdi.sara.flexi.entity.Cart;
import hamdi.sara.flexi.entity.ProductInOrder;
import hamdi.sara.flexi.entity.User;

import java.util.Collection;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public interface CartService {
    Cart getCart(User user);

    void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);

    void delete(String itemId, User user);

    void checkout(User user);
}
