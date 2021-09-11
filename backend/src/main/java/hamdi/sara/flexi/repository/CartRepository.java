package hamdi.sara.flexi.repository;

import hamdi.sara.flexi.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */

public interface CartRepository extends JpaRepository<Cart, Integer> {
}
