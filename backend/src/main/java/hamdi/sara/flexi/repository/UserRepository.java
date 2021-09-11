package hamdi.sara.flexi.repository;


import hamdi.sara.flexi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);
    Collection<User> findAllByRole(String role);

}
