package hamdi.sara.flexi.vo.response;

import hamdi.sara.flexi.entity.ProductInfo;
import org.springframework.data.domain.Page;

/**
 * Created By Hamdi Mechergui & Sara Trabelsi on 2021.
 */
public class CategoryPage {
    private String category;
    private Page<ProductInfo> page;

    public CategoryPage(String category, Page<ProductInfo> page) {
        this.category = category;
        this.page = page;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Page<ProductInfo> getPage() {
        return page;
    }

    public void setPage(Page<ProductInfo> page) {
        this.page = page;
    }
}
