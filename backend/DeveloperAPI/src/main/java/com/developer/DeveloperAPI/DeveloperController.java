package com.developer.DeveloperAPI;

import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/developers")
public class DeveloperController {
    @Autowired
    private DeveloperService developerService;

    @GetMapping
    public ResponseEntity<List<Developer>> getAllDevelopers(){
        return new ResponseEntity<List<Developer>>(developerService.getAllDevelopers(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Developer> addDeveloper(@Valid @RequestBody Developer developer){
        return new ResponseEntity<>(developerService.addDeveloper(developer), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDeveloper(@PathVariable ObjectId id) {
        developerService.deleteDeveloper(id);
        return new ResponseEntity<>("Developer deleted successfully", HttpStatus.OK);
    }

}
