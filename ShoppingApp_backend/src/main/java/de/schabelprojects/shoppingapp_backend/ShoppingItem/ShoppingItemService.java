package de.schabelprojects.shoppingapp_backend.ShoppingItem;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ShoppingItemService {

    private final ShoppingItemRepository shoppingItemRepository;

    public void createItem(ShoppingItem item){
        shoppingItemRepository.save(item);
    }

    public Collection<ShoppingItem> getItems(){
        return shoppingItemRepository.findAll(Sort.by("name"));
    }

    public ShoppingItem getItem(String id){
        return shoppingItemRepository.findById(id).orElse(null);
    }

    public void deleteItem(String id){
        shoppingItemRepository.deleteById(id);
    }

    public void changeItem(String id, ShoppingItem changedItem){
        ShoppingItem item = shoppingItemRepository.findById(id).orElseThrow();

        item.setProductname(changedItem.getProductname());
        item.setAmount(changedItem.getAmount());
        item.setPrice(changedItem.getPrice());
        item.setImage(changedItem.getImage());

        shoppingItemRepository.save(item);
    }

    public void deleteItems() {
        shoppingItemRepository.deleteAll();
    }

}
