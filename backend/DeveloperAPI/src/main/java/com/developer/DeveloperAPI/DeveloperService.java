package com.developer.DeveloperAPI;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperService {
    @Autowired
    private DeveloperRepository developerRepository;

    public List<Developer> getAllDevelopers(){
        return developerRepository.findAll();
    }

    public Developer addDeveloper(Developer developer){
        return developerRepository.save(developer);
    }

    public void deleteDeveloper(ObjectId id) {
        developerRepository.deleteById(id);
    }

}
