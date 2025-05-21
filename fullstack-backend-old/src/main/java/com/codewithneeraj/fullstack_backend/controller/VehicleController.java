package com.codewithneeraj.fullstack_backend.controller;

import com.codewithneeraj.fullstack_backend.model.Vehicle;
import com.codewithneeraj.fullstack_backend.repository.UserRepository;
import com.codewithneeraj.fullstack_backend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

//    **************

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/{userId}/vehicles")
    public List<Vehicle> getVehiclesByUserId(@PathVariable Long userId) {
        return vehicleRepository.findByUserId(userId);
    }


//    *************

//    @PostMapping("/vehicle")
//    public Vehicle newVehicle(@RequestBody Vehicle newVehicle) {
//        return vehicleRepository.save(newVehicle);
//    }

//    ***************
@PostMapping("/vehicle")
public Vehicle newVehicle(@RequestBody Vehicle newVehicle) {
    if (newVehicle.getUser() != null && newVehicle.getUser().getId() != null) {
        newVehicle.setUser(userRepository.findById(newVehicle.getUser().getId()).orElseThrow());
    }
    return vehicleRepository.save(newVehicle);
}



    @PostMapping("/vehicle/user/{userId}")
    public Vehicle newVehicleForUser(@PathVariable Long userId, @RequestBody Vehicle newVehicle) {
        return userRepository.findById(userId)
                .map(user -> {
                    newVehicle.setUser(user); // ← associate user to vehicle
                    return vehicleRepository.save(newVehicle);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

//    ***********

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @GetMapping("/vehicle/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        return vehicle.orElse(null);
    }

    @PutMapping("/vehicle/{id}")
    public Vehicle updateVehicle(@RequestBody Vehicle updatedVehicle, @PathVariable Long id) {
        return vehicleRepository.findById(id)
                .map(vehicle -> {
                    vehicle.setModel(updatedVehicle.getModel());
                    vehicle.setType(updatedVehicle.getType());
                    vehicle.setRegistrationNumber(updatedVehicle.getRegistrationNumber());
                    return vehicleRepository.save(vehicle);
                }).orElseGet(() -> {
                    updatedVehicle.setId(id);
                    return vehicleRepository.save(updatedVehicle);
                });
    }

    @DeleteMapping("/vehicle/{id}")
    public String deleteVehicle(@PathVariable Long id) {
        vehicleRepository.deleteById(id);
        return "Vehicle with id " + id + " has been deleted successfully.";
    }
}
