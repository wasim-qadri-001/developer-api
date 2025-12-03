package com.developer.DeveloperAPI;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import tools.jackson.databind.annotation.JsonSerialize;
import tools.jackson.databind.ser.std.ToStringSerializer;

@Document(collection="Developers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Developer {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;
    @NotBlank(message="Name cannot be empty")
    private String name;
    @NotBlank(message="Role cannot be empty")
    private String role;
    @NotBlank(message="Tech Stack cannot be empty")
    private String techStack;
    @Min(value = 0, message = "Experience must be 0 or greater")
    @Max(value = 50, message = "Experience must be less than 50")
    private double experience;
}
