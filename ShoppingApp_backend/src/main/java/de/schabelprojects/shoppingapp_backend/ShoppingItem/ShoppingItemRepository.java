package de.schabelprojects.shoppingapp_backend.ShoppingItem;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShoppingItemRepository extends MongoRepository<ShoppingItem, String> {
}
