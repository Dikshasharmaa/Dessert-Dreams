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

    //  Get all cakes
    @GetMapping
    public List<Cake> getAllCakes() {
        return cakeRepository.findAll();
    }




}
