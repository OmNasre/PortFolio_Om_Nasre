package com.ProjectManager.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // Your API path
                .allowedOrigins("http://localhost:3000")  // React app running on this address
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allowed HTTP methods
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
