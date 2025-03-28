package cakeshop.model;

import jakarta.persistence.*;

@Entity  // Marks this class as a database entity (table)
@Table(name = "cakes") // Explicitly naming the table
public class Cake {

    @Id  // Marks this field as the Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment ID
    private Long id;

    @Column(nullable = false)  // Specifies that name cannot be null
    private String name;

    private String flavor;
    private double price;

    // Constructors (Needed for Spring & JPA)
    public Cake() {
    }

    public Cake(String name, String flavor, double price) {
        this.name = name;
        this.flavor = flavor;
        this.price = price;
    }

    // Getters and Setters (Required for accessing private fields)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}