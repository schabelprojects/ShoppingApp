package de.schabelprojects.shoppingapp_backend.ShoppingItem;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
@CrossOrigin(origins = {"http://localhost:5173"})
public class ShoppingItemController {

    private final ShoppingItemService shoppingItemService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<ShoppingItem> createCard(@RequestBody ShoppingItem item){
        shoppingItemService.createItem(item);
        return shoppingItemService.getItems();
    }

    @GetMapping
    public Collection<ShoppingItem> getCards(){
        return shoppingItemService.getItems();
    }

    @GetMapping("/{id}")
    public ShoppingItem getCard(@PathVariable String id){
        return shoppingItemService.getItem(id);
    }

    @PutMapping("/{id}")
    public Collection<ShoppingItem> changeCard(@PathVariable String id, @RequestBody ShoppingItem item){
        shoppingItemService.changeItem(id, item);
        return shoppingItemService.getItems();
    }

    @DeleteMapping("/{id}")
    public Collection<ShoppingItem> deleteCard(@PathVariable String id){
        shoppingItemService.deleteItem(id);
        return shoppingItemService.getItems();
    }

    @DeleteMapping()
    public Collection<ShoppingItem> deleteCard(){
        shoppingItemService.deleteItems();
        return shoppingItemService.getItems();
    }

}
