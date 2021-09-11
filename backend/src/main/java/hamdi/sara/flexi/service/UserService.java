package hamdi.sara.flexi.service;


import hamdi.sara.flexi.entity.User;

import java.util.Collection;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public interface UserService {
    User findOne(String email);

    Collection<User> findByRole(String role);

    User save(User user);

    User update(User user);
}
