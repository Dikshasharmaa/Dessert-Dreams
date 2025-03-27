package cakeshop.service;
import cakeshop.model.Cake;
import cakeshop.repository.CakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CakeService {
    @Autowired
    private CakeRepository cakeRepository;  // Injects the repository

    // Get all cakes
    public List<Cake> getAllCakes() {
        return cakeRepository.findAll();
    }

    // Get a cake by ID
    public Optional<Cake> getCakeById(Long id) {
        return cakeRepository.findById(id);
    }

    // Add a new cake
    public Cake addCake(Cake cake) {
        return cakeRepository.save(cake);
    }

    // Update an existing cake
    public Cake updateCake(Long id, Cake newCake) {
        return cakeRepository.findById(id)
                .map(existingCake -> {
                    existingCake.setName(newCake.getName());
                    existingCake.setFlavor(newCake.getFlavor());
                    existingCake.setPrice(newCake.getPrice());
                    return cakeRepository.save(existingCake);
                })
                .orElseThrow(() -> new RuntimeException("Cake not found"));
    }

    // Delete a cake by ID
    public void deleteCake(Long id) {
        cakeRepository.deleteById(id);
    }


}
