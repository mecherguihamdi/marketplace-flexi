package hamdi.sara.flexi.vo.response;

import lombok.Data;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String account;
    private String name;
    private String role;

    public JwtResponse(String token, String account, String name, String role) {
        this.account = account;
        this.name = name;
        this.token = token;
        this.role = role;
    }
}
