package hamdi.sara.flexi.exception;


import hamdi.sara.flexi.enums.ResultEnum;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public class MyException extends RuntimeException {

    private Integer code;

    public MyException(ResultEnum resultEnum) {
        super(resultEnum.getMessage());

        this.code = resultEnum.getCode();
    }

    public MyException(Integer code, String message) {
        super(message);
        this.code = code;
    }
}
