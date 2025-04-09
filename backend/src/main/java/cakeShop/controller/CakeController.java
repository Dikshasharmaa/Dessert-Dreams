package cakeshop.controller;
import cakeshop.model.Cake;
import cakeshop.repository.CakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController  
@RequestMapping("/cakes")  
@CrossOrigin(origins = "http://localhost:5173")
public class CakeController {
    @Autowired
    private CakeRepository cakeRepository;

    // Get all cakes
    @GetMapping
    public List<Cake> getAllCakes() {
        return cakeRepository.findAll();
    }
    // Get a single cake by ID
    @GetMapping("/{id}")
    public Optional<Cake> getCakeById(@PathVariable Long id) {
        return cakeRepository.findById(id);
    }
    //  Add a new cake
    @PostMapping
    public Cake addCake(@RequestBody Cake cake) {
        return cakeRepository.save(cake);
    }
    // Update a cake
    @PutMapping("/{id}")
    public Cake updateCake(@PathVariable Long id, @RequestBody Cake updatedCake) {
        return cakeRepository.findById(id).map(cake -> {
            cake.setName(updatedCake.getName());
            cake.setFlavor(updatedCake.getFlavor());
            cake.setPrice(updatedCake.getPrice());
            return cakeRepository.save(cake);
        }).orElseThrow(() -> new RuntimeException("Cake not found"));
    }

    // Delete a cake
    @DeleteMapping("/{id}")
    public void deleteCake(@PathVariable Long id) {
        cakeRepository.deleteById(id);
    }




}
