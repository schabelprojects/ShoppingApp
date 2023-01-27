package de.schabelprojects.shoppingapp_backend.ShoppingItem;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@Data
@Document(collection = "shoppingitems")
public class ShoppingItem {

    @Id
    private String id;
    private String productname;
    private Number amount;
    private String price;
    private String image;

}
